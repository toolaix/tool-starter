import Link from "next/link";
import { site } from "@/site.config";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <div className={styles.brand}>{site.name}</div>
            <p className={styles.note}>{site.tagline}</p>
          </div>
          <div className={styles.links}>
            <Link href="/#tool">Tool</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
        <p className={styles.disclaimer}>
          Results are <strong>estimates only</strong>. Replace defaults with your
          real numbers before you commit to a price, listing, or application.
        </p>
        <p className={styles.copy}>
          © {new Date().getFullYear()} {site.name}. Built with the toolaix
          tool-starter template.
        </p>
      </div>
    </footer>
  );
}
