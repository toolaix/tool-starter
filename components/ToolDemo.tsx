"use client";

import { useState } from "react";

/** 替换成真实计算器逻辑；此处仅演示交互。 */
export function ToolDemo() {
  const [price, setPrice] = useState(40);
  const [cost, setCost] = useState(12);
  const fee = price * 0.065 + 0.2;
  const profit = price - cost - fee;

  return (
    <section
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: 12,
        padding: "1rem",
        margin: "1.25rem 0",
      }}
    >
      <label style={{ display: "block", marginBottom: 8 }}>
        Selling price
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          style={{ display: "block", width: "100%", marginTop: 4 }}
        />
      </label>
      <label style={{ display: "block", marginBottom: 8 }}>
        Your cost
        <input
          type="number"
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
          style={{ display: "block", width: "100%", marginTop: 4 }}
        />
      </label>
      <p>
        Est. fees: <strong>${fee.toFixed(2)}</strong>
      </p>
      <p>
        Est. profit: <strong>${profit.toFixed(2)}</strong>
      </p>
    </section>
  );
}
