import { readFile } from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";

export async function loadValueChainData(rootDir = process.cwd()) {
  const dataPath = path.join(rootDir, "value-chain", "data.js");
  const source = await readFile(dataPath, "utf8");
  const context = {
    window: {},
    console,
    URL,
  };
  vm.createContext(context);
  vm.runInContext(source, context, { filename: dataPath });
  if (!context.window.VC_DATA) {
    throw new Error("value-chain/data.js did not define window.VC_DATA.");
  }
  return context.window.VC_DATA;
}

export function renderCompaniesMarkdown(data) {
  const lines = [
    "# AI Value Chain - Company Catalog",
    "",
    "Generated from `value-chain/data.js`. Do not hand-edit; run `node scripts/render-companies-catalog.mjs --write`.",
    "",
  ];

  for (const layer of data.layers) {
    const layerTools = data.tools.filter((tool) => (tool.directLayers || []).includes(layer.id));
    lines.push(`## Layer ${layer.index} - ${layer.label}`, "");
    lines.push("| Entity | What they do | Type | Source | YC Batch |");
    lines.push("| --- | --- | --- | --- | --- |");
    for (const tool of layerTools) {
      lines.push([
        markdownCell(tool.name),
        markdownCell(tool.desc),
        markdownCell(tool.type),
        markdownCell(sourceLink(tool)),
        markdownCell(tool.yc || "-"),
      ].join(" | ").replace(/^/, "| ").replace(/$/, " |"));
    }
    lines.push("");
  }

  return `${lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd()}\n`;
}

export function sourceUrl(tool) {
  return tool.github || tool.url || "";
}

function sourceLink(tool) {
  const url = sourceUrl(tool);
  if (!url) return "-";
  return `[${sourceLabel(url)}](${url})`;
}

function sourceLabel(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "github.com") {
      const [owner, repo] = parsed.pathname.split("/").filter(Boolean);
      if (owner && repo) return `${owner}/${repo}`;
    }
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function markdownCell(value) {
  return String(value ?? "-")
    .replace(/\r?\n/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\|/g, "\\|")
    .trim();
}
