#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadValueChainData, renderCompaniesMarkdown } from "./value-chain-utils.mjs";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = path.join(rootDir, "value-chain", "companies.md");
const rendered = renderCompaniesMarkdown(await loadValueChainData(rootDir));

if (process.argv.includes("--check")) {
  const current = await readFile(outputPath, "utf8");
  if (current !== rendered) {
    console.error("value-chain/companies.md is out of date. Run `node scripts/render-companies-catalog.mjs --write`.");
    process.exit(1);
  }
  console.log("companies catalog ok");
} else if (process.argv.includes("--write")) {
  await writeFile(outputPath, rendered);
  console.log(`wrote ${outputPath}`);
} else {
  process.stdout.write(rendered);
}
