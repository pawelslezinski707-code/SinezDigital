"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const apps = projects.filter((project) => project.category === "aplikacje");

export function Apps() {
  return (
    <section
      id="aplikacje"
      className="border-t border-surface-border py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Aplikacje"
          title="Tworzymy też aplikacje"
          description="Oprócz stron internetowych budujemy aplikacje. Poniżej realizacja, która już działa — możesz ją otworzyć i sprawdzić samodzielnie."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 space-y-8"
        >
          {apps.map((app) => (
            <motion.article
              key={app.id}
              variants={fadeInUp}
              className="overflow-hidden rounded-3xl border border-surface-border bg-surface"
            >
              <div className="relative h-64 border-b border-surface-border sm:h-96">
                <Image
                  src={app.image}
                  alt={app.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="flex max-w-3xl flex-col p-8 sm:p-10">
                <span className="w-fit rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-600 dark:text-violet-400">
                  {app.categoryLabel}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                  {app.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {app.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {app.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-600 dark:text-violet-400" />
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
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-transform hover:scale-105"
                >
                  Otwórz aplikację
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
