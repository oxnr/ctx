#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadValueChainData, renderCompaniesMarkdown, sourceUrl } from "./value-chain-utils.mjs";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const data = await loadValueChainData(rootDir);
const errors = [];
const warnings = [];

const layerIds = new Set();
const subcategoryIds = new Set();
const layerSubcategories = new Map();
for (const [index, layer] of data.layers.entries()) {
  requireString(layer.id, `layers[${index}].id`);
  requireString(layer.index, `layers[${index}].index`);
  requireString(layer.label, `layers[${index}].label`);
  if (layerIds.has(layer.id)) errors.push(`duplicate layer id: ${layer.id}`);
  layerIds.add(layer.id);
  const expectedIndex = String(index + 1).padStart(2, "0");
  if (layer.index !== expectedIndex) {
    errors.push(`layer ${layer.id} has index ${layer.index}, expected ${expectedIndex}`);
  }
  const ownedSubcategories = new Set();
  for (const subcategory of layer.subcategories || []) {
    if (subcategoryIds.has(subcategory.id)) warnings.push(`duplicate subcategory id across layers: ${subcategory.id}`);
    subcategoryIds.add(subcategory.id);
    ownedSubcategories.add(subcategory.id);
  }
  layerSubcategories.set(layer.id, ownedSubcategories);
}

const toolIds = new Map();
for (const [index, tool] of data.tools.entries()) {
  requireString(tool.id, `tools[${index}].id`);
  requireString(tool.name, `tools[${index}].name`);
  requireString(tool.desc, `tools[${index}].desc`);
  requireString(tool.type, `tools[${index}].type`);
  if (!sourceUrl(tool)) errors.push(`tool ${tool.id} is missing url/github source`);
  toolIds.set(tool.id, (toolIds.get(tool.id) || 0) + 1);

  if (!Array.isArray(tool.directLayers) || tool.directLayers.length === 0) {
    errors.push(`tool ${tool.id} must have at least one direct layer`);
  }
  for (const layerId of [...(tool.directLayers || []), ...(tool.indirectLayers || [])]) {
    if (!layerIds.has(layerId)) errors.push(`tool ${tool.id} references unknown layer ${layerId}`);
  }
  for (const subcategoryId of tool.subcategories || []) {
    if (!subcategoryIds.has(subcategoryId)) warnings.push(`tool ${tool.id} references unknown subcategory ${subcategoryId}`);
  }
  for (const layerId of tool.directLayers || []) {
    const owned = layerSubcategories.get(layerId);
    if (!owned) continue;
    const hasOwnedSubcategory = (tool.subcategories || []).some((subcategoryId) => owned.has(subcategoryId));
    if (!hasOwnedSubcategory) {
      warnings.push(`tool ${tool.id} has direct layer ${layerId} but no subcategory owned by that layer`);
    }
  }
  if (tool.layerDetails) {
    for (const layerId of Object.keys(tool.layerDetails)) {
      if (!layerIds.has(layerId)) errors.push(`tool ${tool.id} has layerDetails for unknown layer ${layerId}`);
    }
  }
}

for (const [id, count] of toolIds.entries()) {
  if (count > 1) errors.push(`duplicate tool id: ${id} (${count} entries)`);
}

const companiesPath = path.join(rootDir, "value-chain", "companies.md");
const currentCompanies = await readFile(companiesPath, "utf8");
const expectedCompanies = renderCompaniesMarkdown(data);
if (currentCompanies !== expectedCompanies) {
  errors.push("value-chain/companies.md is out of date; run `node scripts/render-companies-catalog.mjs --write`");
}

const result = {
  layers: data.layers.length,
  tools: data.tools.length,
  errors,
  warnings,
};

console.log(JSON.stringify(result, null, 2));
if (errors.length) process.exit(1);

function requireString(value, label) {
  if (typeof value !== "string" || !value.trim()) {
    errors.push(`${label} must be a non-empty string`);
  }
}
