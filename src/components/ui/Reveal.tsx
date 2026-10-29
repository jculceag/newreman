"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
  immediate?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  immediate = false,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Component = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const transition = {
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1] as const,
    delay,
  };

  const hidden = { opacity: 0, y: 18 };
  const visible = { opacity: 1, y: 0 };

  if (immediate) {
    return (
      <Component
        className={className}
        initial={hidden}
        animate={visible}
        transition={transition}
      >
        {children}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.15 }}
      transition={transition}
    >
      {children}
    </Component>
  );
}
