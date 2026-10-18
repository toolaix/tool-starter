import { site } from "@/site.config";
import { ToolDemo } from "@/components/ToolDemo";
import { Faq } from "@/components/Faq";
import { Reveal } from "@/components/motion/Reveal";

export default function HomePage() {
  return (
    <>
      <Reveal as="section" style={{ marginBottom: "0.5rem" }}>
        <p
          style={{
            margin: "0 0 0.65rem",
            display: "inline-block",
            padding: "0.25rem 0.65rem",
            borderRadius: 999,
            background: "var(--accent-soft)",
            color: "var(--accent-ink)",
            fontSize: "0.8rem",
            fontWeight: 650,
          }}
        >
          Free {site.kind} · {site.monetization.freeQuotaLabel}
        </p>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(1.75rem, 4vw, 2.35rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.035em",
            color: "var(--ink)",
          }}
        >
          {site.primaryKeyword}
        </h1>
        <p
          style={{
            margin: "0.85rem 0 0",
            maxWidth: 40 * 16,
            color: "var(--muted)",
            fontSize: "1.05rem",
          }}
        >
          {site.tagline}
        </p>
      </Reveal>

      <ToolDemo />

      <Faq />

      <Reveal
        as="section"
        id="pricing"
        style={{
          marginTop: "2.75rem",
          padding: "1.35rem 1.4rem",
          borderRadius: "var(--radius)",
          border: "1px solid var(--line)",
          background: "var(--surface)",
          boxShadow: "var(--shadow)",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "var(--ink)",
            letterSpacing: "-0.03em",
            fontSize: "1.25rem",
          }}
        >
          Pricing
        </h2>
        <p style={{ margin: "0.55rem 0 0", color: "var(--muted)" }}>
          Free: {site.monetization.freeQuotaLabel}. Premium:{" "}
          {site.monetization.premiumPriceLabel}
          {site.monetization.premiumPriceYearly
            ? ` (or $${site.monetization.premiumPriceYearly}/yr)`
            : ""}
          .
        </p>
        {site.monetization.creemCheckoutUrl ? (
          <p style={{ margin: "1rem 0 0" }}>
            <a
              href={site.monetization.creemCheckoutUrl}
              style={{
                display: "inline-block",
                padding: "0.65rem 1.1rem",
                borderRadius: 999,
                background: "var(--accent)",
                color: "#fff",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Upgrade — {site.monetization.premiumPriceLabel}
            </a>
          </p>
        ) : (
          <p style={{ margin: "0.85rem 0 0", fontSize: 14, color: "var(--muted)" }}>
            Set <code>monetization.creemCheckoutUrl</code> (static) or wire{" "}
            <code>lib/creem</code> + OpenNext when you need server checkout /
            webhooks. See <code>docs/zh/LAUNCH.md</code>.
          </p>
        )}
      </Reveal>
    </>
  );
}
