import { site } from "@/site.config";

const items = [
  {
    q: `What is a ${site.primaryKeyword}?`,
    a: "A free tool that estimates costs and suggested prices for one job or listing.",
  },
  {
    q: "Is it free?",
    a: `${site.monetization.freeQuotaLabel}. Premium unlocks saved shop numbers.`,
  },
  {
    q: "Are the numbers guaranteed?",
    a: "No. Results are estimates. Replace defaults with your real costs.",
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
    <section style={{ marginTop: "2rem" }}>
      <h2>FAQ</h2>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {items.map((i) => (
        <div key={i.q} style={{ marginBottom: "1rem" }}>
          <h3 style={{ fontSize: "1rem" }}>{i.q}</h3>
          <p style={{ color: "#444" }}>{i.a}</p>
        </div>
      ))}
    </section>
  );
}
