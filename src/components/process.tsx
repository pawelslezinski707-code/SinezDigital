"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Process() {
  return (
    <section id="jak-pracujemy" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          note="jak pracujemy"
          title="Cztery kroki od pomysłu do startu"
          description="Przez cały czas wiesz, na jakim etapie jest Twój projekt."
        />

        <motion.ol
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          {processSteps.map((step, index) => (
            <motion.li key={step.number} variants={fadeInUp} className="relative">
              {index < processSteps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-6 left-16 -right-6 hidden border-t-2 border-dashed border-muted/40 lg:block"
                />
              )}
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-foreground bg-background font-hand text-2xl text-foreground">
                {Number(step.number)}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14"
        >
          <a href="#kontakt" className="btn-primary">
            Opowiedz o swoim pomyśle
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
