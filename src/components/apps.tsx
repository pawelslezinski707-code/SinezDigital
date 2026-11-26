"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const apps = projects.filter((project) => project.category === "aplikacje");

export function Apps() {
  return (
    <section id="aplikacje" className="border-t border-surface-border py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Aplikacje"
          title="Nad czym teraz pracujemy"
          description="Aplikacja w trakcie tworzenia — możesz ją już otworzyć i sprawdzić samodzielnie."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 space-y-6"
        >
          {apps.map((app) => (
            <motion.article
              key={app.id}
              variants={fadeInUp}
              className="grid overflow-hidden rounded-3xl border border-surface-border bg-surface lg:grid-cols-2"
            >
              <div className="flex flex-col p-8 sm:p-10 lg:p-12">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 font-mono text-xs text-violet-700 dark:text-violet-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                  {app.categoryLabel}
                </span>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {app.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {app.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {app.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-violet-500/15 text-violet-600 dark:text-violet-300">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/90">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={app.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-10 w-fit"
                >
                  Otwórz aplikację
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="relative min-h-72 border-t border-surface-border lg:border-t-0 lg:border-l">
                <Image
                  src={app.image}
                  alt={app.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-left-top"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
