# tool-starter（中文说明）

给大陆侧快速开「一词一页」小工具站的模板。

## 为什么这套栈

- **Cloudflare Pages**：免费额度够用，DNS/CDN 一体，不必死磕 Vercel。
- **Creem**：国内个人收美元相对顺，模板只留 checkout 链接位。
- **一词一页**：先主词工具页，再 FAQ / 长尾；别一上来写 100 篇。
- **证伪**：GSC 印象 → 点击 → 使用 → 付费；30 天无印象就砍。

## 你只改这些

1. `site.config.ts` — 主词、域名、定价文案、Creem 链接  
2. `components/ToolDemo.tsx` — 真实计算逻辑  
3. `docs/zh/LAUNCH.md` — 按清单上线  

详细步骤见同目录英文 README 与 `docs/zh/`。
