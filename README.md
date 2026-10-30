# WRO 2027 team site

Bilingual (ES/EN) static site built with Astro. Same base as NextWing Systems, different identity.

```bash
npm install
npm run dev      # http://localhost:4321/WRO_2027/
npm run build
```

## What to edit
- `src/config.ts` — team name, email, TikTok/YouTube (one place).
- `src/i18n/es.ts` and `en.ts` — all visible text.
- `src/components/Sections.astro` — page sections.
- `src/styles/global.css` — colors (`--signal` is the accent).

## Before publishing
- Replace the placeholder email in `src/config.ts`.
- Confirm team members, roles and sponsor amounts.
- Add real photos (robot, team) and the final logo/favicon.
- Pages: Settings → Pages → Source: GitHub Actions. Deploys on push to `main`.
