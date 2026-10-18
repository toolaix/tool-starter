# tool-starter

China-friendly **one-keyword SEO micro-tool** starter for [toolaix](https://github.com/toolaix).

Stack: **Next.js → Cloudflare Pages (Git-bound) → Creem**. Optional **OpenNext + D1** when you need server APIs.

## Quick start

```bash
npm i
npm run dev
```

Edit `site.config.ts` (keyword, domain, Creem). Replace `components/ToolDemo.tsx` with real logic.

## Mainland-friendly defaults

| Concern | Default |
| --- | --- |
| Deploy | Cloudflare Pages, **Git-connected** |
| Pay | Creem (`lib/creem` stubs + env in `.env.example`) |
| Analytics | GSC first; optional CF beacon |
| Keyword research | **Monid** + one-keyword SEO skill before coding |
| Motion | Zero-dep `Reveal`; optional `npm i motion` |
| Content | EN SEO pages; `docs/zh` ops checklists |

## Fork shapes

See [README.zh-CN.md](README.zh-CN.md) for **calculator** vs **uploader** (PassATS-like) forks.

## Ship checklist

[docs/zh/LAUNCH.md](docs/zh/LAUNCH.md) · [docs/zh/STACK.md](docs/zh/STACK.md) · [docs/zh/GSC-30D.md](docs/zh/GSC-30D.md)
