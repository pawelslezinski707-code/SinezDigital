"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}
    >
      <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-600 dark:text-violet-400">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
