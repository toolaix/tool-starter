import type { Metadata } from "next";
import { site } from "@/site.config";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.primaryKeyword}`,
    template: site.seo.titleTemplate,
  },
  description: site.seo.description,
  keywords: [...site.keywords],
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
    <html lang={site.locale.slice(0, 2)}>
      <body>
        <SiteNav />
        <main
          style={{
            maxWidth: 1040,
            margin: "0 auto",
            padding: "2rem 1.25rem 1rem",
          }}
        >
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
