"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Services() {
  return (
    <section id="uslugi" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Usługi"
          title="Wszystko, czego potrzebujesz, by zaistnieć online"
          description="Od prostej wizytówki po rozbudowaną stronę firmową – dopasowujemy rozwiązanie do Twoich celów i budżetu."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-600/10"
              >
                <div
                  aria-hidden
                  className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-violet-600/0 to-blue-500/0 transition-colors duration-300 group-hover:from-violet-600/10 group-hover:to-blue-500/10"
                />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-600/20">
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
