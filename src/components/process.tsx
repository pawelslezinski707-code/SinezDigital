"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Process() {
  return (
    <section id="jak-pracujemy" className="bg-surface py-24 sm:py-32">
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
                <h3 className="mt-5 flex items-center justify-center gap-1 text-lg font-semibold text-foreground">
                  <span>{step.title}</span>
                  {step.note && (
                    <span className="group/tooltip relative inline-flex">
                      <button
                        type="button"
                        className="flex h-5 w-5 items-center justify-center rounded-full text-sm font-bold text-violet-500 outline-none transition-colors hover:text-violet-400 focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-violet-400 dark:hover:text-violet-300"
                        aria-describedby={`step-note-${step.number}`}
                      >
                        *
                      </button>
                      <span
                        id={`step-note-${step.number}`}
                        role="tooltip"
                        className="pointer-events-none absolute top-full right-0 z-20 mt-2 w-56 max-w-[70vw] rounded-lg border border-surface-border bg-background p-3 text-xs leading-relaxed font-normal text-muted opacity-0 shadow-xl transition-opacity duration-200 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100"
                      >
                        {step.note}
                      </span>
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-transform hover:scale-105"
          >
            Umów bezpłatną konsultację
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
