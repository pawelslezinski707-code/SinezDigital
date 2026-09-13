"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Process() {
  return (
    <section className="bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Jak pracujemy"
          title="Proces współpracy krok po kroku"
          description="Przejrzysty proces, dzięki któremu dokładnie wiesz, na jakim etapie znajduje się Twój projekt."
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div
            aria-hidden
            className="absolute top-8 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent lg:block"
          />
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-surface-border bg-background text-violet-600 shadow-sm dark:text-violet-400">
                  <Icon className="h-7 w-7" aria-hidden />
                  <span className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-blue-600 text-xs font-bold text-white">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
