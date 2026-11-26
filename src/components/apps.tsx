"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/data";
import { fadeInUp } from "@/lib/motion";

const apps = projects.filter((project) => project.category === "aplikacje");

export function Apps() {
  return (
    <section id="aplikacje" className="bg-surface py-24 sm:py-28">
      <Container>
        <SectionHeading
          note="aplikacje"
          title="Nad czym teraz pracujemy"
          description="Aplikacja w trakcie tworzenia — możesz ją już otworzyć i sprawdzić samodzielnie."
        />

        {apps.map((app) => (
          <motion.article
            key={app.id}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-14 grid items-center gap-10 lg:grid-cols-12"
          >
            <div className="lg:col-span-5">
              <h3 className="text-3xl font-semibold tracking-tight text-foreground">{app.name}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted">{app.description}</p>

              <ul className="mt-6 space-y-2.5">
                {app.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <a
                href={app.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8"
              >
                Otwórz aplikację
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative lg:col-span-7">
              <p className="absolute -top-10 right-4 flex rotate-2 items-end gap-1 font-hand text-2xl text-accent">
                {app.categoryLabel.toLowerCase()}
                <svg aria-hidden viewBox="0 0 24 32" className="h-7 w-5" fill="none">
                  <path
                    d="M6 3c8 4 11 12 8 25M8 22l6 6 5-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-surface-border bg-card">
                <Image
                  src={app.image}
                  alt={`Ekran aplikacji ${app.name}`}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </motion.article>
        ))}
      </Container>
    </section>
  );
}
