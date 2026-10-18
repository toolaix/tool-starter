# 上线清单（大陆侧）

## 0. 找词（上线前）

1. [ ] Monid 拉主词量 / SERP / 竞品 DR（one-keyword SEO skill）
2. [ ] 三条件通过；主词美区量建议 ≥200
3. [ ] 写入 `site.config.ts` 的 `primaryKeyword` / `keywords` / `seo.longTails`

## 1. 静态 MVP（多数计算器）

1. [ ] `site.config.ts` 填主词、域名、tagline、`premiumPriceLabel`
2. [ ] 替换 `components/ToolDemo.tsx` 真实逻辑（勿把 ATS 评分等业务塞回模板）
3. [ ] 域名接入 Cloudflare DNS，Pages **Git 绑定** 自定义域
4. [ ] `npm run build` 本地通过
5. [ ] Google Search Console 验证（meta 或 DNS）
6. [ ] 提交 sitemap（首页 + FAQ + privacy）
7. [ ] Creem 商品建好 → `monetization.creemCheckoutUrl`（或月/年 price id）
8. [ ] 改 `app/privacy/page.tsx` 免责声明
9. [ ] 开始记 GSC：见 `GSC-30D.md`

## 2. 需要服务端时（uploader / 登录 / webhook）

1. [ ] `npm i @opennextjs/cloudflare`；解开 `open-next.config.ts`
2. [ ] `npx wrangler d1 create <name>` → 填 `wrangler.toml` 的 `database_id`
3. [ ] `migrations/d1/` 取消注释并 `wrangler d1 migrations apply … --local`
4. [ ] 接 `lib/rate-limit/cookie-quota.ts` 或 OTP（`lib/auth/README.md`）
5. [ ] Creem：`CREEM_API_KEY` / `CREEM_WEBHOOK_SECRET` / `CREEM_PRICE_*` → Pages Secrets
6. [ ] Webhook：`https://<域名>/api/webhooks/creem`
7. [ ] 生产 **不要** 设 `DEV_PREMIUM=1`

**禁止**：在 bot 上对 live Creem 真收款、或例行 `wrangler pages deploy` 覆盖 Git 生产。
