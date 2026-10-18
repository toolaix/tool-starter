import type { Metadata } from "next";
import { site } from "@/site.config";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles tool inputs and uploads.`,
};

export default function PrivacyPage() {
  return (
    <article style={{ maxWidth: 720 }}>
      <h1
        style={{
          margin: 0,
          color: "var(--ink)",
          letterSpacing: "-0.03em",
        }}
      >
        Privacy
      </h1>
      <p style={{ color: "var(--muted)" }}>
        Last updated: October 18, 2026 (Asia/Shanghai). Stub — customize before
        launch.
      </p>
      <p style={{ color: "var(--muted-strong)", lineHeight: 1.65 }}>
        Free tool runs process your inputs for the current request to produce a
        result. By default this template does not write file bodies or form
        payloads to a database. A small cookie may track how many free runs you
        used today (count only — not contents). See{" "}
        <code>lib/rate-limit/cookie-quota.ts</code>.
      </p>
      <p style={{ color: "var(--muted-strong)", lineHeight: 1.65 }}>
        If you add accounts, saved jobs, or Pro history (D1 + OpenNext), store
        content only with clear consent. Do not upload passwords, government
        IDs, or other secrets into a demo tool.
      </p>
      <p style={{ color: "var(--muted-strong)", lineHeight: 1.65 }}>
        Contact: replace this stub with your support email before charging
        customers via Creem.
      </p>
    </article>
  );
}
