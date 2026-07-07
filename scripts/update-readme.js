#!/usr/bin/env node
// Auto-updates repo tables in README.md between AUTO: markers.
// Triggered by: scheduled workflow, workflow_dispatch, or repository_dispatch.
import { readFileSync, writeFileSync } from 'fs';

const OWNER = 'verisworks-ai';
const META = new Set([OWNER, '.github']);
const MCP_RE = /(-mcp$|ontology)/i;
const HEADERS = { 'User-Agent': 'verisworks-ai-readme-updater', 'Accept': 'application/vnd.github.v3+json' };

const res = await fetch(`https://api.github.com/users/${OWNER}/repos?per_page=50&sort=updated`, { headers: HEADERS });
if (!res.ok) { console.error('GitHub API error:', res.status); process.exit(1); }

const all = (await res.json()).filter(r => !r.fork && !META.has(r.name));
const mcp = all.filter(r => MCP_RE.test(r.name));
const audit = all.filter(r => !MCP_RE.test(r.name));

function rows(list) {
  return list.map(r => {
    const desc = (r.description || '—').replace(/[|]/g, '\\|');
    const stars = `![Stars](https://img.shields.io/github/stars/${OWNER}/${r.name}?style=flat-square&logo=github&labelColor=0F172A&color=0EA5E9)`;
    return `| [**${r.name}**](${r.html_url}) | ${stars} | ${desc} |`;
  }).join('\n');
}

function replaceSection(src, marker, content) {
  const start = `<!-- AUTO:${marker}-start -->`;
  const end = `<!-- AUTO:${marker}-end -->`;
  const table = `| Tool | Stars | Solves |\n|------|-------|--------|\n${content}`;
  const re = new RegExp(`${start}[\\s\\S]*?${end}`, 'g');
  return src.replace(re, `${start}\n${table}\n${end}`);
}

let readme = readFileSync('README.md', 'utf8');
const before = readme;

readme = replaceSection(readme, 'verification-audit', rows(audit));
readme = replaceSection(readme, 'mcp-servers', rows(mcp));

if (readme === before) {
  console.log('No changes.');
} else {
  writeFileSync('README.md', readme, 'utf8');
  console.log(`Updated — audit: ${audit.length}, mcp: ${mcp.length}`);
}
