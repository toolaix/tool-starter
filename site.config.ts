/**
 * 每个小工具只改这一份配置。
 * 主词 / 定价 / 收款 / 分析 — 大陆出海默认 Creem + Cloudflare。
 *
 * kind:
 *   - "calculator" — 表单输入 → 数字结果（费用/报价类）
 *   - "converter"  — 格式/单位转换
 *   - "uploader"   — 上传文件再分析（如 ATS 扫描；勿把业务逻辑放进模板）
 *   - "quoter"     — 多步报价
 */
export const site = {
  /** 对外品牌名，如 "Fee Lab" / "PassATS" */
  name: "Tool Starter",
  /** 主关键词，一词一页的核心（找词先用 Monid + one-keyword SEO skill） */
  primaryKeyword: "example fee calculator",
  /** SEO / 文案用的关键词列表：主词 + 长尾；sitemap / FAQ 可复用 */
  keywords: [
    "example fee calculator",
    "example fee calculator free",
    "example fees explained",
    "how to calculate example profit",
  ],
  /** 一句话价值 */
  tagline: "Know your real cost in under 60 seconds.",
  /** 生产域名，上线前改掉 */
  domain: "example.toolaix.com",
  locale: "en-US",
  /** 工具类型 */
  kind: "calculator" as const,
  monetization: {
    /** ads | freemium | one_time | lead */
    model: "freemium" as const,
    /**
     * 静态 Creem 商品页 URL（无服务端时直接链出去）。
     * 有 OpenNext + webhook 时优先用服务端 checkout，见 lib/creem/README.md
     */
    creemCheckoutUrl: "",
    /** 月/年商品 id（Creem Dashboard 的 prod_…）；服务端 checkout 用 */
    creemPriceMonthly: "",
    creemPriceYearly: "",
    freeQuotaLabel: "3 free runs / day",
    /** 展示文案，如 "$9.99 / mo" */
    premiumPriceLabel: "$9.99 / mo",
    premiumPriceMonthly: 9.99,
    premiumPriceYearly: 99,
  },
  limits: {
    /** 免费额度；cookie 限流见 lib/rate-limit/cookie-quota.ts */
    freeRunsPerDay: 3,
  },
  seo: {
    titleTemplate: "%s | Tool Starter",
    description:
      "Free example fee calculator. See costs and margins before you list.",
    /** 首批长尾，各自可扩成 /guides/[slug] */
    longTails: [
      "example fee calculator free",
      "example fees explained",
      "how to calculate example profit",
    ],
  },
  analytics: {
    /** 可选：Cloudflare Web Analytics token；大陆侧少依赖 GA */
    cloudflareBeaconToken: "",
  },
  gsc: {
    /** 上线后粘贴 GSC meta 验证码 */
    verificationMeta: "",
  },
} as const;
