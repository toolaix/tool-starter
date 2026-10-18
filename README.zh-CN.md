# tool-starter（中文说明）

给大陆侧快速开「一词一页」小工具站的模板。

## 为什么这套栈

- **Cloudflare Pages（Git 绑定）**：免费额度够用，DNS/CDN 一体；日常别用 `wrangler pages deploy` 直推生产。
- **Creem**：国内个人收美元相对顺；静态先填 checkout URL，要 webhook 再上 OpenNext。
- **一词一页**：先 Monid 验证量与 SERP，再主词工具页 + FAQ；别一上来写 100 篇。
- **证伪**：GSC 印象 → 点击 → 使用 → 付费；30 天无印象就砍。

## 你只改这些

1. `site.config.ts` — 主词、`keywords`、域名、`premiumPriceLabel`、Creem 字段  
2. `components/ToolDemo.tsx` — 真实计算或上传壳（**不要**把 ATS 评分逻辑回写模板）  
3. `docs/zh/LAUNCH.md` — 按清单上线  

## 两种常见 fork

### A. 计算器 / 报价（如费用、刺绣报价）

1. `kind: "calculator"` 或 `"quoter"`  
2. 在 `ToolDemo` 双栏壳里换公式即可  
3. 多数情况 **纯静态 Pages** + Creem 外链就够  
4. 若要「本店数字存档 / Saved Jobs」：再加 OpenNext + D1 + OTP（参考 StitchQuote）

### B. 上传分析（如 PassATS 类 resume checker）

1. `kind: "uploader"`  
2. 新建 `app/api/...` Route Handler；用 `lib/rate-limit/cookie-quota.ts` 做免费次数  
3. 必须 **OpenNext**（不能纯 `output: "export"`）  
4. PDF/DOCX 解析、打分规则放在 **产品仓库** `lib/<product>/`，不要塞进本模板  
5. 隐私页写清「是否存文件」；Pro 再用 Creem + D1

## 可选增强

| 能力 | 位置 |
| --- | --- |
| 滚动显现 | `components/motion/Reveal`（零依赖）；要 Framer-like 动效再 `npm i motion` |
| Creem 验签 | `lib/creem/signature.ts` |
| D1 示例 | `migrations/d1/0001_example.sql` |
| 找词 | Monid CLI + one-keyword SEO skill（见 `docs/zh/STACK.md`） |

详细英文 README 与 `docs/zh/STACK.md`。
