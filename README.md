<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,50:1E3A5F,100:0EA5E9&height=140&section=header" width="100%"/>
</p>

<p align="center">
  <a href="https://veris.kr">
    <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=28&duration=4000&pause=2000&color=0EA5E9&center=true&vCenter=true&width=640&height=60&lines=Ship+with+verification%2C+not+vibes;verisworks-ai;AI-native+devtools+for+real+operators" alt="verisworks-ai"/>
  </a>
</p>

<p align="center">
  Tools that make AI-built software verifiable — from prompt to production.
</p>

<p align="center">
  <a href="https://veris.kr"><img src="https://img.shields.io/badge/veris.kr-0EA5E9?style=flat-square&logoColor=white" alt="veris.kr"/></a>
  <a href="https://apt.veris.kr"><img src="https://img.shields.io/badge/apt.veris.kr-내집각-10B981?style=flat-square" alt="apt.veris.kr"/></a>
  <a href="mailto:hello@veris.kr"><img src="https://img.shields.io/badge/hello%40veris.kr-64748B?style=flat-square" alt="email"/></a>
  <img src="https://komarev.com/ghpvc/?username=verisworks-ai&color=0EA5E9&style=flat-square" alt="profile views"/>
</p>

---

## What we build

Solo-built, production-grade tools for developers and operators who ship with AI — focused on the Korean market and the MCP ecosystem.

```
prompt-ops-maker (write) → vibecodecheck (audit) → MCP servers (serve) — one verification loop
```

### Verification & audit

<!-- AUTO:verification-audit-start -->
| Tool | Solves |
|------|--------|
| [**prompt-ops-maker**](https://github.com/verisworks-ai/prompt-ops-maker) | AI agents drift without rules → verification-first prompts with cross-model checks |
| [**vibecodecheck**](https://github.com/verisworks-ai/vibecodecheck) | Vibe-coded MVPs launch blind → one command scores SEO · security · AI crawler access |
| [**github-profile-ops**](https://github.com/verisworks-ai/github-profile-ops) | Profile README setup is confusing → one command generates it with interactive guidance |
<!-- AUTO:verification-audit-end -->

```bash
npx --yes --package=@veris.works/vibecodecheck vibecodecheck <URL>
```

<!-- TODO: .github/assets/vibecodecheck-output.png 추가 후 아래 주석 해제
<p align="center">
  <img src=".github/assets/vibecodecheck-output.png" width="720" alt="vibecodecheck score output"/>
</p>
-->

### MCP servers

<!-- AUTO:mcp-servers-start -->
| Tool | Solves |
|------|--------|
| [**naejipgak-mcp**](https://github.com/verisworks-ai/naejipgak-mcp) | 청약 규칙이 AI에게 불투명 → 공개 MCP로 자격 조회 제공 |
| [**service-ontology-lite**](https://github.com/verisworks-ai/service-ontology-lite) | Agents operate blind → structured service ontology + audit tools over MCP |
<!-- AUTO:mcp-servers-end -->

**naejipgak-mcp — Claude Desktop 연동:**

```bash
npx -y naejipgak-mcp
```

`claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "naejipgak": {
      "command": "npx",
      "args": ["-y", "naejipgak-mcp"]
    }
  }
}
```

---

## Stats

<p align="center">
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=verisworks-ai&theme=tokyonight" height="165" alt="GitHub stats"/>
  <img src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=verisworks-ai&theme=tokyonight" height="165" alt="Top languages"/>
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=verisworks-ai&theme=tokyonight&hide_border=true&background=0F172A&ring=0EA5E9&fire=10B981&currStreakLabel=0EA5E9" alt="Streak stats"/>
</p>

---

## Stack

<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Claude_API-D97706?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude API"/>
  <img src="https://img.shields.io/badge/MCP-blueviolet?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHoiLz48L3N2Zz4=&logoColor=white&label=MCP" alt="MCP"/>
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker"/>
</p>

---

## Contribution snake

<!--
  Setup: create .github/workflows/snake.yml in this repo

  name: Generate snake
  on:
    schedule:
      - cron: "0 0 * * *"
    workflow_dispatch:
  permissions:
    contents: write
  jobs:
    generate:
      runs-on: ubuntu-latest
      steps:
        - uses: Platane/snk@v3
          with:
            github_user_name: verisworks-ai
            outputs: |
              dist/github-snake.svg
              dist/github-snake-dark.svg?palette=github-dark
        - uses: crazy-max/ghaction-github-pages@v3
          with:
            target_branch: output
            build_dir: dist
          env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
-->

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/verisworks-ai/verisworks-ai/output/github-snake-dark.svg"/>
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/verisworks-ai/verisworks-ai/output/github-snake.svg"/>
  <img src="https://raw.githubusercontent.com/verisworks-ai/verisworks-ai/output/github-snake.svg" alt="Contribution snake" width="100%"/>
</picture>

---

## Connect

- Web — [veris.kr](https://veris.kr)
- 내집각 (apartment subscription service) — [apt.veris.kr](https://apt.veris.kr)
- Email — [hello@veris.kr](mailto:hello@veris.kr)
- Issues & ideas — open an issue on any repo above

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0EA5E9,50:1E3A5F,100:0F172A&height=100&section=footer" width="100%"/>
</p>
