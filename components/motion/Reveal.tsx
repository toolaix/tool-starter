"use client";

import {
  createElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import styles from "./Reveal.module.css";

type RevealTag = "div" | "section" | "article" | "ul" | "li";

type RevealProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  as?: RevealTag;
  id?: string;
  /** Extra delay in ms after entering viewport */
  delay?: number;
};

/**
 * Zero-dependency scroll reveal (CSS + IntersectionObserver).
 * Respects prefers-reduced-motion. Upgrade path: motion/react — see README.
 */
export function Reveal({
  children,
  className,
  style,
  as = "div",
  id,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = [
    styles.reveal,
    visible ? styles.revealVisible : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return createElement(
    as,
    {
      ref,
      id,
      className: cls,
      style: {
        ...style,
        ["--reveal-delay" as string]: `${delay}ms`,
      },
    },
    children,
  );
}
