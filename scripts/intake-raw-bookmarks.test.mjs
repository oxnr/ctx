#!/usr/bin/env node

import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const script = path.join(root, "scripts", "intake-raw-bookmarks.mjs");

test("limit zero inspects the complete bookmark feed", async (t) => {
  const temp = await mkdtemp(path.join(os.tmpdir(), "ctx-intake-"));
  t.after(() => rm(temp, { recursive: true, force: true }));
  const input = path.join(temp, "bookmarks.jsonl");
  const output = path.join(temp, "output");
  const bookmarks = Array.from({ length: 3 }, (_, index) => ({
    tweet_id: String(index + 1),
    tweet_url: `https://x.com/i/web/status/${index + 1}`,
    updated_at: `2026-07-2${index + 1}T00:00:00.000Z`,
    tweet_created_at: `2026-07-2${index + 1}T00:00:00.000Z`,
    text: `bookmark ${index + 1}`
  }));
  await writeFile(input, `${bookmarks.map((item) => JSON.stringify(item)).join("\n")}\n`);

  const result = spawnSync(process.execPath, [
    script,
    "--input", input,
    "--limit", "0",
    "--since-days", "0",
    "--expand-limit", "0",
    "--output", output,
    "--cache", path.join(temp, "cache.json")
  ], { encoding: "utf8" });

  assert.equal(result.status, 0, result.stderr);
  const report = JSON.parse(await readFile(path.join(output, "raw-bookmark-candidates.json"), "utf8"));
  assert.equal(report.selected_bookmarks, 3);
  assert.equal(report.total_bookmarks, 3);
});

test("positive limit remains bounded", async (t) => {
  const temp = await mkdtemp(path.join(os.tmpdir(), "ctx-intake-"));
  t.after(() => rm(temp, { recursive: true, force: true }));
  const input = path.join(temp, "bookmarks.jsonl");
  const output = path.join(temp, "output");
  const bookmarks = Array.from({ length: 3 }, (_, index) => ({
    tweet_id: String(index + 1),
    updated_at: `2026-07-2${index + 1}T00:00:00.000Z`,
    text: `bookmark ${index + 1}`
  }));
  await writeFile(input, `${bookmarks.map((item) => JSON.stringify(item)).join("\n")}\n`);

  const result = spawnSync(process.execPath, [
    script,
    "--input", input,
    "--limit", "2",
    "--since-days", "0",
    "--output", output,
    "--cache", path.join(temp, "cache.json")
  ], { encoding: "utf8" });

  assert.equal(result.status, 0, result.stderr);
  const report = JSON.parse(await readFile(path.join(output, "raw-bookmark-candidates.json"), "utf8"));
  assert.equal(report.selected_bookmarks, 2);
});
