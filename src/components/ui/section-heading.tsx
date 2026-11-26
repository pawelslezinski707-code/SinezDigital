"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

export function SectionHeading({
  title,
  description,
  note,
}: {
  title: string;
  description?: string;
  /** Krótki odręczny dopisek nad nagłówkiem. */
  note?: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="max-w-2xl"
    >
      {note ? <p className="font-hand text-2xl text-accent">{note}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}
