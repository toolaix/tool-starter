import { site } from "@/site.config";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./Faq.module.css";

const items = [
  {
    q: `What is a ${site.primaryKeyword}?`,
    a: "A free tool that estimates costs, scores, or suggested prices for one job, listing, or upload — in under a minute.",
  },
  {
    q: "Is it free?",
    a: `${site.monetization.freeQuotaLabel}. Premium unlocks higher limits and saved preferences (${site.monetization.premiumPriceLabel}).`,
  },
  {
    q: "Are the numbers guaranteed?",
    a: "No. Results are estimates. Replace defaults with your real inputs before you decide.",
  },
  {
    q: "How do you handle my data?",
    a: "See the Privacy page. Free runs typically process request data without long-term storage of file bodies.",
  },
];

export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <Reveal as="section" id="faq" style={{ marginTop: "2.75rem" }}>
      <h2 style={{ margin: 0, color: "var(--ink)", letterSpacing: "-0.03em" }}>
        FAQ
      </h2>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.wrap}>
        {items.map((i) => (
          <details key={i.q} className={styles.item}>
            <summary>{i.q}</summary>
            <p>{i.a}</p>
          </details>
        ))}
      </div>
    </Reveal>
  );
}
