# Creem billing stubs (China-friendly)

Mainland-friendly USD checkout for freemium tools. Full working code lives in
product repos (e.g. StitchQuote / embroidery-pricer). This folder is a **skeleton**.

## Env vars

| Variable | Role |
| --- | --- |
| `CREEM_API_KEY` | Create checkout / customer portal |
| `CREEM_WEBHOOK_SECRET` | Verify `creem-signature` HMAC |
| `CREEM_PRICE_MONTHLY` / `CREEM_PRICE_YEARLY` | Creem `prod_…` ids |
| `CREEM_API_BASE` | Default `https://api.creem.io`; Test Mode `https://test-api.creem.io` |
| `CREEM_CHECKOUT_URL_MONTHLY` / `YEARLY` | Static URL fallback |
| `NEXT_PUBLIC_CREEM_CHECKOUT_URL` | Static link when no server |
| `CREEM_SUCCESS_URL` | Post-checkout redirect |
| `CREEM_CUSTOMER_PORTAL_URL` | Optional portal fallback |

Mirror labels in `site.config.ts` → `monetization.premiumPriceLabel`,
`creemPriceMonthly`, `creemPriceYearly`, `creemCheckoutUrl`.

## Files here

- `signature.ts` — HMAC verify helper (safe to copy)
- Copy `checkout.ts` / webhook route from a live product when you enable OpenNext

## When you need server checkout

1. Add `@opennextjs/cloudflare`, fill `wrangler.toml`, drop `output: "export"` if any.
2. `POST /api/checkout` + `POST /api/webhooks/creem`
3. Bind D1 + store `subscriptions` (see `migrations/d1/`)
4. Deploy via **Git-bound** Cloudflare Pages/Workers — not routine `wrangler pages deploy`

See `docs/zh/STACK.md` and `docs/zh/LAUNCH.md`.
