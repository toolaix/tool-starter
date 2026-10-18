"use client";

import { useMemo, useState } from "react";
import { site } from "@/site.config";
import { Reveal } from "@/components/motion/Reveal";
import styles from "./ToolDemo.module.css";

/**
 * Generic dual-pane tool shell.
 * Replace the fee math with your calculator or wire an uploader UI for kind=uploader.
 * Do NOT paste product-specific scoring (e.g. resume ATS) into the template.
 */
export function ToolDemo() {
  const [price, setPrice] = useState(40);
  const [cost, setCost] = useState(12);

  const { fee, profit, margin } = useMemo(() => {
    const fee = price * 0.065 + 0.2;
    const profit = price - cost - fee;
    const margin = price > 0 ? (profit / price) * 100 : 0;
    return { fee, profit, margin };
  }, [price, cost]);

  return (
    <Reveal as="section" id="tool" className={styles.shell}>
      <div className={styles.panel}>
        <h2 className={styles.panelTitle}>Inputs</h2>
        <label className={styles.label}>
          Selling price (USD)
          <input
            className={styles.input}
            type="number"
            min={0}
            step={0.01}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </label>
        <label className={styles.label}>
          Your cost (USD)
          <input
            className={styles.input}
            type="number"
            min={0}
            step={0.01}
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
          />
        </label>
        <p className={styles.hint}>
          Demo formula only — swap for your real model. Free quota:{" "}
          {site.monetization.freeQuotaLabel}.
        </p>
      </div>

      <div className={styles.panel}>
        <h2 className={styles.panelTitle}>Estimate</h2>
        <div className={styles.result}>
          <div className={styles.heroStat}>
            <p className={styles.heroLabel}>Est. profit</p>
            <p className={styles.heroValue}>${profit.toFixed(2)}</p>
          </div>
          <div className={styles.row}>
            <span className={styles.muted}>Platform fees</span>
            <span className={styles.strong}>${fee.toFixed(2)}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.muted}>Margin</span>
            <span className={styles.strong}>{margin.toFixed(1)}%</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
