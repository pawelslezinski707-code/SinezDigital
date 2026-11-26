"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Process() {
  return (
    <section id="jak-pracujemy" className="bg-surface py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              eyebrow="Jak pracujemy"
              title="Cztery kroki od pomysłu do startu"
              description="Przez cały czas wiesz, na jakim etapie jest Twój projekt."
            />
            <motion.a
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              href="#kontakt"
              className="btn-primary mt-10"
            >
              Opowiedz o swoim pomyśle
            </motion.a>
          </div>
        </div>

        <motion.ol
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="lg:col-span-7"
        >
          {processSteps.map((step) => (
            <motion.li
              key={step.number}
              variants={fadeInUp}
              className="grid grid-cols-[auto_1fr] gap-6 border-t border-surface-border py-8 first:border-t-0 first:pt-0 sm:gap-10"
            >
              <span className="text-gradient font-mono text-4xl font-semibold sm:text-5xl">
                {step.number}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
