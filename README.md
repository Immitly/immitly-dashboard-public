# Immitly Dashboard (Public)

Public dashboard for Immitly, the immigration guidance platform.
It shows the public record only: completed 197-country coverage, the live
coming-soon site, and the legal line the venture works under.

Descriptor of record: Verified immigration guidance, step by step.
Slogan: Mother of All Immigration.
Status: pre-launch.

## Public-safe rule

This repository is public, and GitHub Pages on the free plan publishes
from public repositories. So this build carries a hard rule:

- Every figure here is already public on [immitly.com](https://immitly.com) or in the public record of the venture.
- Internal figures never enter this repository: no internal scoring, no internal metrics or inventories beyond the public coverage record, no prices, no market sizing, no internal decision queues, no internal comparisons.
- The data file, `src/data/immitly.ts`, carries a header comment that states this rule. Any change to that file is checked against the rule before merge.

If a figure is not public on immitly.com, it does not belong here.

## What it shows

| Page | Contents |
| --- | --- |
| Overview | Count-up KPI cards (197 of 197 countries, 198 panel files, 3 live hosts, pre-launch status), a 100 percent coverage ring, a coverage composition visual (197 country panels plus 1 jurisdiction panel), and live site status |
| Coverage | Public stat block and a searchable, sortable named-country list. Every panel is listed in verification-held state |

Public facts shown, with dates:

- Country coverage complete 2026-10-28: 197 of 197 countries, every panel in verification-held state.
- Panel files: 198 (197 country panels plus the Hong Kong jurisdiction panel).
- Live site: version v9 live since 2026-10-29 on immitly.com, www.immitly.com, and immitly.app.
- Legal line: paid case-specific advice belongs to licensed lawyers and RCICs only. Immitly never files and never represents (IRPA s.91).

## Stack

- Vite 5 with React 18 and TypeScript (strict).
- All visuals are hand-built CSS and SVG. No chart library.
- Fonts: Space Grotesk (display) and IBM Plex Mono (data), loaded from Google Fonts with system fallbacks.
- Brand kit: Ink Black `#0B0B0C` ground, Paper White `#F5F2EC` type, Signal Red `#E03131` as the single accent. No neon, no glass effects.

## Scripts

```bash
npm install     # install dependencies
npm run dev     # local development server
npm run build   # type check plus production build into dist/
npm run preview # preview the production build
```

Node 24 is the reference runtime. The GitHub Actions workflow uses Node 24.

## Deployment

`vite.config.ts` sets `base: './'`, so `dist/` runs from GitHub Pages, a
subpath, or any static host.

`.github/workflows/pages.yml` builds and deploys to GitHub Pages on every
push to `main`, using checkout, setup-node 24, `npm ci`, `npm run build`,
upload-pages-artifact, and deploy-pages. A repository admin enables Pages
once, in Settings, Pages, source: GitHub Actions.

## Update path

1. Confirm the figure is public on immitly.com first.
2. Edit only `src/data/immitly.ts`, keeping the date label with the figure.
3. Run `npm run build` and confirm it passes.
4. Commit with a message that names the figure changed and its source.

Never type a number into a component. Components read from the data file only.

## Repository rules

- Public repository. Public-safe content only, per the rule above.
- No secrets in code or data files. No API keys, no tokens, no personal data.
- No em dash character in UI text, docs, or comments. Use a colon, comma pair, parentheses, or a hyphen.

## License

Proprietary. All rights reserved. See `LICENSE`.
