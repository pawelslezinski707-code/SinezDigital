"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]" />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-600/30 via-purple-500/20 to-blue-500/20 blur-3xl dark:from-violet-600/40 dark:via-purple-500/25 dark:to-blue-500/25"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-20 right-[-6rem] h-72 w-72 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/25"
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute bottom-0 left-[-6rem] h-72 w-72 rounded-full bg-violet-500/20 blur-3xl dark:bg-violet-500/25"
      />

      <Container className="relative">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          animate="visible"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-600 dark:text-violet-400"
          >
            <Sparkles className="h-4 w-4" />
            Agencja projektowania stron internetowych
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Tworzymy strony, które{" "}
            <span className="text-gradient">sprzedają</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            Sinez Digital projektuje nowoczesne strony internetowe i portfolio dla
            firm oraz osób prywatnych. Łączymy przemyślany design z wydajnym
            kodem, aby Twoja strona realnie pracowała na wyniki.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-600/25 transition-transform hover:scale-105"
            >
              Zobacz portfolio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-black/[0.02] px-7 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-violet-500/40 hover:text-violet-600 dark:border-white/15 dark:bg-white/[0.03] dark:hover:text-violet-400"
            >
              Skontaktuj się
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
