"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { fadeInUp } from "@/lib/motion";

export function About() {
  return (
    <section id="o-nas" className="py-24 sm:py-32">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl"
        >
          <span className="flex items-center gap-3 font-mono text-xs font-medium tracking-widest text-violet-600 uppercase dark:text-violet-400">
            <span aria-hidden className="h-px w-8 bg-violet-500/60" />
            O nas
          </span>
          <p className="mt-6 font-display text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-5xl">
            Współpracujemy z każdym, kto ma pomysł.{" "}
            <span className="text-gradient">
              Chętnie pomożemy zamienić go w prawdziwą rzecz.
            </span>
          </p>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Nie musisz mieć gotowego projektu ani wiedzieć, jak ma wyglądać.
            Razem wybierzemy kolory, projekt i styl, a potem zbudujemy z tego
            działający produkt — niezależnie od tego, czy jesteś firmą, czy osobą
            prywatną.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
