#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const DEFAULT_OUTPUT_DIR = "reports/bookmark-intake";
const DEFAULT_CACHE_FILE = ".cache/bookmark-url-cache.json";

const args = parseArgs(process.argv.slice(2));
const input = args.input || process.env.BOOKMARK_FEED;
if (!input) {
  throw new Error("Missing --input <bookmarks.jsonl> or BOOKMARK_FEED.");
}

const limit = numberArg(args.limit, 1500);
const sinceDays = numberArg(args.sinceDays, 60);
const expandLimit = numberArg(args.expandLimit, 1200);
const concurrency = numberArg(args.concurrency, 12);
const timeoutMs = numberArg(args.timeoutMs, 8000);
const outputDir = args.output || DEFAULT_OUTPUT_DIR;
const cacheFile = args.cache || DEFAULT_CACHE_FILE;
const now = new Date();

await mkdir(outputDir, { recursive: true });
await mkdir(path.dirname(cacheFile), { recursive: true });

const cache = await readJson(cacheFile, {});
const bookmarks = parseJsonl(await readFile(input, "utf8"))
  .map(normalizeBookmark)
  .filter(Boolean)
  .sort((a, b) => b.sortTime - a.sortTime);

const since = new Date(now.getTime() - sinceDays * 24 * 60 * 60 * 1000);
const recent = bookmarks.filter((bookmark) => bookmark.sortTime >= since.getTime());
const selected = (recent.length ? recent : bookmarks).slice(0, limit);
const urls = collectUrls(selected).slice(0, expandLimit);

await expandUrls(urls, cache, { concurrency, timeoutMs });
await writeFile(cacheFile, `${JSON.stringify(cache, null, 2)}\n`);

const repoMap = new Map();
const linkMap = new Map();

for (const bookmark of selected) {
  for (const originalUrl of bookmark.urls) {
    const expandedUrl = cache[originalUrl]?.finalUrl || originalUrl;
    const repo = githubRepoFromUrl(expandedUrl) || githubRepoFromUrl(originalUrl);
    if (repo) addRepo(repoMap, repo, bookmark, expandedUrl);
    addLink(linkMap, expandedUrl, bookmark);
  }
}

const repos = [...repoMap.values()].sort(compareCandidates);
const links = [...linkMap.values()].sort(compareCandidates).slice(0, 200);
const out = {
  generated_at: now.toISOString(),
  input: path.basename(input),
  selected_bookmarks: selected.length,
  recent_bookmarks: recent.length,
  total_bookmarks: bookmarks.length,
  since_days: sinceDays,
  expanded_urls: Object.keys(cache).length,
  repos,
  links,
};

await writeFile(
  path.join(outputDir, "raw-bookmark-candidates.json"),
  `${JSON.stringify(out, null, 2)}\n`,
);
await writeFile(path.join(outputDir, "raw-bookmark-candidates.md"), renderMarkdown(out));

console.log(`selected_bookmarks=${selected.length}`);
console.log(`recent_bookmarks=${recent.length}`);
console.log(`repos=${repos.length}`);
console.log(`output=${outputDir}`);

function parseArgs(argv) {
  const parsed = {};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith("--")) continue;
    const key = arg.slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) parsed[key] = true;
    else {
      parsed[key] = next;
      i += 1;
    }
  }
  return parsed;
}

function numberArg(value, fallback) {
  if (value === undefined || value === true) return fallback;
  const number = Number(value);
  if (!Number.isFinite(number) || number < 0) return fallback;
  return number;
}

async function readJson(file, fallback) {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch {
    return fallback;
  }
}

function parseJsonl(text) {
  return text
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line, index) => {
      try {
        return JSON.parse(line);
      } catch (error) {
        throw new Error(`Invalid JSONL on line ${index + 1}: ${error.message}`);
      }
    });
}

function normalizeBookmark(item) {
  const updatedAt = Date.parse(item.updated_at || "");
  const createdAt = Date.parse(item.tweet_created_at || item.raw?.created_at || "");
  const sortTime = Number.isFinite(updatedAt) ? updatedAt : createdAt;
  if (!Number.isFinite(sortTime)) return null;

  const text = String(item.text || item.raw?.text || "");
  const urls = extractUrls(text);
  return {
    tweet_id: item.tweet_id || item.raw?.id || null,
    tweet_url: item.tweet_url || (item.tweet_id ? `https://x.com/i/web/status/${item.tweet_id}` : null),
    updated_at: item.updated_at || null,
    tweet_created_at: item.tweet_created_at || item.raw?.created_at || null,
    public_metrics: item.public_metrics || item.raw?.public_metrics || {},
    text,
    urls,
    sortTime,
  };
}

function extractUrls(text) {
  return [...new Set((text.match(/https?:\/\/[^\s)"'<>]+/g) || []).map(cleanUrl))];
}

function cleanUrl(url) {
  return url.replace(/[),.;!?]+$/g, "");
}

function collectUrls(bookmarks) {
  const seen = new Set();
  const out = [];
  for (const bookmark of bookmarks) {
    for (const url of bookmark.urls) {
      if (seen.has(url)) continue;
      seen.add(url);
      out.push(url);
    }
  }
  return out;
}

async function expandUrls(urls, cache, options) {
  let cursor = 0;
  const workers = Array.from({ length: options.concurrency }, async () => {
    while (cursor < urls.length) {
      const url = urls[cursor];
      cursor += 1;
      if (cache[url]?.finalUrl) continue;
      cache[url] = await expandUrl(url, options.timeoutMs);
    }
  });
  await Promise.all(workers);
}

async function expandUrl(url, timeoutMs) {
  let current = url;
  const chain = [url];
  for (let hop = 0; hop < 6; hop += 1) {
    const response = await requestRedirect(current, timeoutMs);
    if (response.error) return { finalUrl: current, chain, error: response.error };
    if (!response.location) return { finalUrl: response.url || current, chain, status: response.status };
    current = new URL(response.location, current).toString();
    chain.push(current);
  }
  return { finalUrl: current, chain, error: "redirect limit reached" };
}

async function requestRedirect(url, timeoutMs) {
  for (const method of ["HEAD", "GET"]) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, {
        method,
        redirect: "manual",
        signal: controller.signal,
        headers: {
          "user-agent": "ctx-raw-bookmark-intake/1.0",
          accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
      });
      clearTimeout(timer);
      if (method === "HEAD" && [403, 405, 429].includes(response.status)) continue;
      return {
        status: response.status,
        url: response.url,
        location: response.headers.get("location"),
      };
    } catch (error) {
      clearTimeout(timer);
      if (method === "HEAD") continue;
      return { error: error.message };
    }
  }
  return { error: "request failed" };
}

function githubRepoFromUrl(value) {
  try {
    const url = new URL(value);
    if (!/(^|\.)github\.com$/i.test(url.hostname)) return null;
    const [owner, repo] = url.pathname.split("/").filter(Boolean);
    if (!owner || !repo) return null;
    if (["features", "marketplace", "orgs", "pulls", "search", "sponsors", "topics"].includes(owner)) return null;
    const cleanRepo = repo.replace(/\.git$/i, "");
    if (!/^[A-Za-z0-9_.-]+$/.test(owner) || !/^[A-Za-z0-9_.-]+$/.test(cleanRepo)) return null;
    return `${owner}/${cleanRepo}`;
  } catch {
    return null;
  }
}

function addRepo(map, repo, bookmark, url) {
  const existing = map.get(repo) || {
    repo,
    github: `https://github.com/${repo}`,
    count: 0,
    latest_bookmark_at: null,
    score: 0,
    security_flags: [],
    examples: [],
  };
  existing.count += 1;
  existing.score += 1 + metricScore(bookmark.public_metrics);
  for (const flag of securityFlags(repo, url)) {
    if (!existing.security_flags.includes(flag)) existing.security_flags.push(flag);
  }
  if (!existing.latest_bookmark_at || bookmark.updated_at > existing.latest_bookmark_at) {
    existing.latest_bookmark_at = bookmark.updated_at;
  }
  if (existing.examples.length < 4) {
    existing.examples.push(example(bookmark, url));
  }
  map.set(repo, existing);
}

function addLink(map, url, bookmark) {
  const existing = map.get(url) || {
    url,
    count: 0,
    latest_bookmark_at: null,
    score: 0,
    examples: [],
  };
  existing.count += 1;
  existing.score += 1 + metricScore(bookmark.public_metrics);
  if (!existing.latest_bookmark_at || bookmark.updated_at > existing.latest_bookmark_at) {
    existing.latest_bookmark_at = bookmark.updated_at;
  }
  if (existing.examples.length < 2) {
    existing.examples.push(example(bookmark, url));
  }
  map.set(url, existing);
}

function metricScore(metrics) {
  const likes = Number(metrics?.like_count || 0);
  const reposts = Number(metrics?.retweet_count || 0);
  return Math.log10(1 + likes + reposts * 2);
}

function securityFlags(repo, url) {
  const haystack = `${repo} ${url}`.toLowerCase();
  const flags = [];
  if (/(account[-_\s]?creator|gmail[-_\s]?account|credential|cookie|auth[-_\s]?token|token[-_\s]?grabber)/.test(haystack)) {
    flags.push("credential-or-account-automation");
  }
  if (/(malware|stealer|phish|rat\b|botnet|shadowbroker|g0dm0d3)/.test(haystack)) {
    flags.push("malware-or-abuse-signal");
  }
  if (/(exploit|pentest|red[-_\s]?team|cve-|bypass|osint)/.test(haystack)) {
    flags.push("offensive-security-review");
  }
  return flags;
}

function example(bookmark, url) {
  return {
    tweet_url: bookmark.tweet_url,
    bookmark_updated_at: bookmark.updated_at,
    tweet_created_at: bookmark.tweet_created_at,
    url,
    text: bookmark.text.slice(0, 220).replace(/\s+/g, " ").trim(),
  };
}

function compareCandidates(a, b) {
  if (b.count !== a.count) return b.count - a.count;
  if (b.score !== a.score) return b.score - a.score;
  return String(b.latest_bookmark_at || "").localeCompare(String(a.latest_bookmark_at || ""));
}

function renderMarkdown(out) {
  const lines = [
    "# Raw Bookmark Candidates",
    "",
    `Generated: ${out.generated_at}`,
    `Selected bookmarks: ${out.selected_bookmarks}`,
    `Recent bookmarks in window: ${out.recent_bookmarks}`,
    `Total bookmarks: ${out.total_bookmarks}`,
    "",
    "## GitHub Repos",
    "",
    "| Count | Repo | Latest bookmark | Evidence |",
    "| ---: | --- | --- | --- |",
  ];
  for (const repo of out.repos.slice(0, 80)) {
    const evidence = repo.examples
      .map((item) => (item.tweet_url ? `[tweet](${item.tweet_url})` : item.url))
      .join(", ");
    const flags = repo.security_flags?.length ? ` Flags: ${repo.security_flags.join(", ")}.` : "";
    lines.push(`| ${repo.count} | [${repo.repo}](${repo.github}) | ${repo.latest_bookmark_at || ""} | ${evidence}${flags} |`);
  }
  const flagged = out.repos.filter((repo) => repo.security_flags?.length);
  if (flagged.length) {
    lines.push("", "## Security Flags", "", "| Repo | Flags |", "| --- | --- |");
    for (const repo of flagged.slice(0, 80)) {
      lines.push(`| [${repo.repo}](${repo.github}) | ${repo.security_flags.join(", ")} |`);
    }
  }
  lines.push("", "## Top Links", "", "| Count | URL | Latest bookmark |", "| ---: | --- | --- |");
  for (const link of out.links.slice(0, 80)) {
    lines.push(`| ${link.count} | ${link.url} | ${link.latest_bookmark_at || ""} |`);
  }
  return `${lines.join("\n")}\n`;
}
