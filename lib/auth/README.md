# Auth OTP stubs

Email OTP + magic link pattern used by StitchQuote (embroidery-pricer):

1. `login_tokens` table in D1 (`migrations/d1/`)
2. `POST /api/auth/request` → create code, email via Resend (or **dev mode**:
   log code + return `devCode` when `RESEND_API_KEY` is unset)
3. `POST /api/auth/verify` → set HttpOnly session cookie
4. Gate Premium with `subscriptions` or `DEV_PREMIUM=1` for local UI

Copy working modules from a product repo when you need accounts. Keep this
template free of product-specific session cookies until forked.
