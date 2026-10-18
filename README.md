# tool-starter

China-friendly **one-keyword SEO micro-tool** starter for [toolaix](https://github.com/toolaix).

Stack: **Next.js → Cloudflare Pages → Creem**.

## Quick start

```bash
npm i
npm run dev
```

Edit `site.config.ts` (keyword, domain, Creem URL). Replace `components/ToolDemo.tsx` with real logic.

## Mainland-friendly defaults

| Concern | Default |
| --- | --- |
| Deploy | Cloudflare Pages（全球 CDN，CLI 可从大陆机房推） |
| Pay | Creem checkout URL in config（个人卖家友好） |
| Analytics | Optional Cloudflare beacon；先接 GSC |
| Content | EN SEO pages；`docs/zh` 给自己看的运营清单 |
| Domain | 任意海外注册商 + Cloudflare DNS |

## Ship checklist

See [docs/zh/LAUNCH.md](docs/zh/LAUNCH.md) and [docs/zh/GSC-30D.md](docs/zh/GSC-30D.md).

## New tool under toolaix

1. Use this repo as GitHub **Template**.
2. Rename, set `site.config.ts`.
3. Deploy Pages, verify GSC.
4. 14/30 day funnel kill criteria.
