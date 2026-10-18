import { site } from "@/site.config";
import { ToolDemo } from "@/components/ToolDemo";
import { Faq } from "@/components/Faq";

export default function HomePage() {
  return (
    <>
      <h1 style={{ fontSize: "1.75rem", lineHeight: 1.25 }}>
        {site.primaryKeyword}
      </h1>
      <p style={{ color: "#444" }}>{site.tagline}</p>
      <ToolDemo />
      <Faq />
      {site.monetization.creemCheckoutUrl ? (
        <p>
          <a href={site.monetization.creemCheckoutUrl}>
            Upgrade — {site.monetization.premiumPriceLabel}
          </a>
        </p>
      ) : (
        <p style={{ fontSize: 14, color: "#888" }}>
          {site.monetization.freeQuotaLabel}. Set{" "}
          <code>creemCheckoutUrl</code> in <code>site.config.ts</code> when ready.
        </p>
      )}
    </>
  );
}
