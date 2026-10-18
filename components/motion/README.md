# Motion helpers (optional)

Default `Reveal` needs **no** npm package — CSS + IntersectionObserver.

## Upgrade to Motion (PassATS-style)

```bash
npm i motion
```

Then replace `Reveal.tsx` with a `motion/react` version (see PassATS
`components/motion/Reveal.tsx` + `variants.ts`). Keep
`prefers-reduced-motion` handling.

Do **not** put product-specific animations (score rings, resume UI) in this
template — keep helpers generic.
