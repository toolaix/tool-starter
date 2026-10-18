"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/site.config";
import styles from "./SiteNav.module.css";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const initial = site.name.trim().charAt(0).toUpperCase() || "T";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.mark} aria-hidden>
            {initial}
          </span>
          {site.name}
        </Link>
        <nav className={styles.links} aria-label="Primary">
          <Link href="/#tool">Tool</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#tool" className={styles.cta}>
            Try free
          </Link>
        </nav>
      </div>
    </header>
  );
}
