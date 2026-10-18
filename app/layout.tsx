import type { Metadata } from "next";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.primaryKeyword}`,
    template: site.seo.titleTemplate,
  },
  description: site.seo.description,
  metadataBase: new URL(`https://${site.domain}`),
  verification: site.gsc.verificationMeta
    ? { google: site.gsc.verificationMeta }
    : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={site.locale}>
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>
        <header style={{ padding: "1rem 1.25rem", borderBottom: "1px solid #eee" }}>
          <strong>{site.name}</strong>
        </header>
        <main style={{ maxWidth: 720, margin: "0 auto", padding: "1.5rem 1.25rem" }}>
          {children}
        </main>
        <footer style={{ padding: "2rem 1.25rem", color: "#666", fontSize: 14 }}>
          © {new Date().getFullYear()} {site.name}. Estimates only.
        </footer>
      </body>
    </html>
  );
}
