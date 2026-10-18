# 栈说明（大陆出海友好）

## 默认（一词一页静态工具）

- 前端：Next.js App Router，单页工具优先
- 部署：**Cloudflare Pages，Git 绑定仓库自动构建**（日常禁止 `wrangler pages deploy` 直推生产）
- 支付文案：Creem checkout URL 写在 `site.config.ts` → `monetization.creemCheckoutUrl`
- 分析：GSC 必接；可选 Cloudflare Web Analytics
- 找词：**先跑 Monid 拉量/SERP/DR**，再套 one-keyword SEO skill 三条件（见下）

## 需要服务端时（上传限流 / 登录 / D1 / Creem webhook）

| 层 | 选择 |
| --- | --- |
| 适配 | `@opennextjs/cloudflare`（OpenNext）→ Workers / Pages |
| 配置 | 根目录 `wrangler.toml` + `open-next.config.ts`（解开注释） |
| 数据 | Cloudflare **D1**（binding `DB`；示例见 `migrations/d1/`） |
| Auth | Email OTP + magic link（骨架见 `lib/auth/README.md`） |
| 限流 | Cookie 日额度（`lib/rate-limit/cookie-quota.ts`） |
| 支付 | Creem API + webhook HMAC（`lib/creem/`） |

本地 Node **≥ 22** 时再上 OpenNext 预览。未接服务端前 `npm run build` 保持纯 Next 即可。

## Creem 环境变量

见 `.env.example` 与 `lib/creem/README.md`。生产 Secrets 只放 Pages/Workers Dashboard，勿提交 Git。

## 找词 / Monid

1. 装 Monid CLI + API Key（`monid keys add`）
2. 用 **one-keyword-page-seo** skill（仓库/workflow：`seo`）拉 DataForSEO / Ahrefs：搜索量、KD、SERP、竞品 DR
3. 硬门槛（skill 内）：主词美区量 **≥200** 才值得一词一页；50–199 谨慎；&lt;50 默认不做
4. 再过三条件：有人搜、有人肯付、现有结果还烂

模板不内置 Monid 密钥；密钥只在本机 CLI。

## 不默认接

国内备案站、微信登录、支付宝（出海 SEO 词以 EN 为主）。
