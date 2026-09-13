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
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-600 dark:text-violet-400">
            O nas
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Projektujemy z myślą o realnych rezultatach
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Wierzymy, że dobra strona internetowa to nie tylko estetyka, ale przede
            wszystkim narzędzie do osiągania celów biznesowych. Łączymy nowoczesny
            design z solidnym kodem, aby każda realizacja była szybka, responsywna
            i przyjazna dla użytkownika.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Pracujemy zarówno z firmami, jak i osobami prywatnymi, dbając o to, żeby
            każda strona była dopasowana do indywidualnych potrzeb i wygodna w
            obsłudze na każdym urządzeniu.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
