"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_70%_30%,black_30%,transparent_100%)]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-violet-600/30 to-indigo-600/20 blur-3xl"
      />

      <Container className="relative grid items-center gap-14 lg:grid-cols-12">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-3 py-1 font-mono text-xs text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
            Tworzymy aplikacje
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="mt-6 text-5xl leading-[1.02] font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          >
            Masz pomysł?
            <br />
            <span className="text-gradient">Zamienimy go w aplikację.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Współpracujemy z każdym, kto ma pomysł. Pomożemy go dopracować,
            wybrać kolory, projekt i styl, a potem zamienić w prawdziwą rzecz.
            Jeśli potrzebujesz strony internetowej — też ją zrobimy.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#kontakt" className="btn-primary group">
              Opowiedz o pomyśle
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#aplikacje" className="btn-ghost">
              Zobacz, nad czym pracujemy
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="relative lg:col-span-6"
        >
          <div className="overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-2xl shadow-violet-900/20">
            <div className="flex items-center gap-1.5 border-b border-surface-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              <span className="ml-3 font-mono text-xs text-muted">hablamos</span>
            </div>
            <div className="relative aspect-[16/10]">
              <Image
                src="/portfolio/hablamos.jpg"
                alt="Aplikacja Hablamos do nauki hiszpańskiego"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
          <span className="absolute -bottom-4 left-6 inline-flex items-center gap-2 rounded-full border border-surface-border bg-background px-4 py-2 font-mono text-xs text-foreground shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
            </span>
            W trakcie tworzenia
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
