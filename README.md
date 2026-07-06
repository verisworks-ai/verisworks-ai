<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F172A,50:1E3A5F,100:0EA5E9&height=140&section=header" width="100%"/>
</p>

<p align="center">
  <a href="https://veris.kr">
    <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=28&duration=3500&pause=1000&color=0EA5E9&center=true&vCenter=true&width=640&height=60&lines=verisworks-ai;AI-native+devtools+for+real+operators;Ship+with+verification%2C+not+vibes" alt="verisworks-ai"/>
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

### Verification & audit

| Tool | Stars | Solves |
|------|-------|--------|
| [**prompt-ops-maker**](https://github.com/verisworks-ai/prompt-ops-maker) | ![Stars](https://img.shields.io/github/stars/verisworks-ai/prompt-ops-maker?style=flat-square&color=F59E0B) | AI agents drift without operating rules — generates verification-first prompts with `--self-verify`, `--promptspec`, and cross-model checks (Claude · GPT · Gemini). |
| [**vibecodecheck**](https://github.com/verisworks-ai/vibecodecheck) | ![Stars](https://img.shields.io/github/stars/verisworks-ai/vibecodecheck?style=flat-square&color=F59E0B) | Vibe-coded MVPs launch with invisible SEO/security gaps — one command audits SEO · AEO · GEO · AI crawler access · security boundary into a single score. |

```bash
npx --yes --package=@veris.works/vibecodecheck vibecodecheck <URL>
```

### MCP servers

| Tool | Stars | Solves |
|------|-------|--------|
| [**naejipgak-mcp**](https://github.com/verisworks-ai/naejipgak-mcp) | ![Stars](https://img.shields.io/github/stars/verisworks-ai/naejipgak-mcp?style=flat-square&color=F59E0B) | Korean apartment subscription (청약) rules are opaque to AI — exposes eligibility checks as a public MCP server any agent can query. |
| [**service-ontology-lite**](https://github.com/verisworks-ai/service-ontology-lite) | ![Stars](https://img.shields.io/github/stars/verisworks-ai/service-ontology-lite?style=flat-square&color=F59E0B) | Agents operate on web services blind — provides a structured service ontology plus audit tools over MCP. |

---

## Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=verisworks-ai&theme=tokyonight&hide_border=true&show_icons=true&count_private=true&rank_icon=github" height="165" alt="GitHub stats"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=verisworks-ai&theme=tokyonight&hide_border=true&layout=compact&langs_count=6" height="165" alt="Top languages"/>
</p>

<p align="center">
  <img src="https://streak-stats.demolab.com/?user=verisworks-ai&theme=tokyonight&hide_border=true&background=0F172A&ring=0EA5E9&fire=10B981&currStreakLabel=0EA5E9" alt="Streak stats"/>
</p>

---

## Stack

<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/Claude_API-D97706?style=for-the-badge&logo=anthropic&logoColor=white" alt="Claude API"/>
  <img src="https://img.shields.io/badge/MCP-Model_Context_Protocol-blueviolet?style=for-the-badge" alt="MCP"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
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
