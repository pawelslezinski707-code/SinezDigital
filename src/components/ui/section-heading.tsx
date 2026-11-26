"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="max-w-2xl"
    >
      <span className="flex items-center gap-3 font-mono text-xs font-medium tracking-widest text-violet-600 uppercase dark:text-violet-400">
        <span aria-hidden className="h-px w-8 bg-violet-500/60" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
