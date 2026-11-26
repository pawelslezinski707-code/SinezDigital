"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { fadeInUp } from "@/lib/motion";

export function About() {
  return (
    <section id="o-nas" className="border-t border-surface-border py-24 sm:py-28">
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-4xl"
        >
          <p className="font-hand text-2xl text-accent">o nas</p>
          <p className="mt-2 text-3xl leading-snug font-semibold tracking-tight text-foreground sm:text-5xl sm:leading-tight">
            Współpracujemy z każdym, kto ma pomysł. Chętnie pomożemy zamienić go
            w{" "}
            <span className="relative inline-block whitespace-nowrap">
              prawdziwą rzecz.
              <svg
                aria-hidden
                viewBox="0 0 300 16"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-accent"
                fill="none"
              >
                <path
                  d="M3 11c60-7 150-9 294-4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </p>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Nie musisz mieć gotowego projektu ani wiedzieć, jak ma wyglądać. Razem
            wybierzemy kolory, projekt i styl, a potem zbudujemy z tego działający
            produkt — niezależnie od tego, czy jesteś firmą, czy osobą prywatną.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
