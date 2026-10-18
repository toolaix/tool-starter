/**
 * Shared motion timing tokens.
 * Default Reveal uses CSS + IntersectionObserver (no npm dep).
 * Optional upgrade: `npm i motion` then swap Reveal to motion/react
 * (see components/motion/README.md). Patterns mirror PassATS.
 */

export const easeOutCss = "cubic-bezier(0.22, 1, 0.36, 1)";

export const durations = {
  enter: 0.55,
  fade: 0.45,
  tap: 0.15,
} as const;

/** Copy these into motion/react Variants when you add the dependency. */
export const fadeUpRecipe = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.enter, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export const staggerRecipe = {
  staggerChildren: 0.08,
  delayChildren: 0.06,
} as const;
