# Marketing workspace

This repo is a marketing workspace for Claude Code. Skills live in `.claude/skills/` and load automatically.

## Before any marketing task
- Read `.agents/product-marketing.md` if it exists — it holds the product, audience and positioning context every marketing skill relies on.
- If it does not exist, run the `product-marketing` skill first to create it.

## Layout
- `.claude/skills/` — 50 skills from coreyhaines31/marketingskills + 19 marketing/content/research skills from affaan-m/ECC (see `README.md`).
- `tools/clis/` — zero-dependency Node.js CLIs for marketing APIs (GA4, Google Ads, Meta Ads, Ahrefs, Semrush, Apollo, Klaviyo, ...). Run `node tools/clis/<name>.js` for usage. Each needs its own API key as an env var; see `tools/integrations/<name>.md` and `tools/SETUP.md`.
- `tools/REGISTRY.md` — index of tool integrations referenced by the skills.
- `third_party/licenses/` — MIT licenses of the upstream projects.

## Conventions
- Never commit API keys or `.env` files.
- Default content language: Turkish unless the user asks otherwise.
