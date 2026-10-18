/**
 * 每个小工具只改这一份配置。
 * 主词 / 定价 / 收款 / 分析 — 大陆出海默认 Creem + Cloudflare。
 */
export const site = {
  /** 对外品牌名，如 "Etsy Fee Lab" */
  name: "Tool Starter",
  /** 主关键词，一词一页的核心 */
  primaryKeyword: "example fee calculator",
  /** 一句话价值 */
  tagline: "Know your real cost in under 60 seconds.",
  /** 生产域名，上线前改掉 */
  domain: "example.toolaix.com",
  locale: "en-US",
  /** 工具类型：calculator | converter | quoter */
  kind: "calculator" as const,
  monetization: {
    /** ads | freemium | one_time | lead */
    model: "freemium" as const,
    /** Creem product / checkout URL，上线前填 */
    creemCheckoutUrl: "",
    freeQuotaLabel: "3 free runs / day",
    premiumPriceLabel: "$9.99 / mo",
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
