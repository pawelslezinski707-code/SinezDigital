"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

// Układ „bento”: szerokie karty na zmianę z wąskimi.
const spans = ["lg:col-span-2", "", "", "lg:col-span-2"];

export function Services() {
  return (
    <section id="uslugi" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Usługi"
          title="Od pomysłu do działającego produktu"
          description="Zajmujemy się tworzeniem aplikacji, a przy okazji pomagamy we wszystkim, co jest potrzebne po drodze."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className={`group relative flex min-h-56 flex-col justify-between overflow-hidden rounded-3xl border border-surface-border bg-surface p-7 transition-colors duration-300 hover:border-violet-500/50 ${spans[index] ?? ""}`}
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg shadow-violet-600/20">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-10">
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
