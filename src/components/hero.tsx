"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SketchToApp } from "@/components/sketch-to-app";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
          <motion.h1
            variants={fadeInUp}
            className="text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-foreground sm:text-6xl"
          >
            Przynieś pomysł.
            <br />
            Resztę zrobimy razem.
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Tworzymy aplikacje i współpracujemy z każdym, kto ma pomysł. Pomożemy
            wybrać kolory, projekt i styl, a potem zamienimy to w prawdziwą rzecz.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href="#kontakt" className="btn-primary group">
              Opowiedz o pomyśle
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#aplikacje" className="link text-sm font-medium text-foreground">
              Zobacz, nad czym pracujemy
            </a>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <SketchToApp />
        </motion.div>
      </Container>
    </section>
  );
}
