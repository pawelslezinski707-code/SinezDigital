"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Services() {
  return (
    <section id="uslugi" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          note="co robimy"
          title="Od pomysłu do działającego produktu"
          description="Zajmujemy się tworzeniem aplikacji i pomagamy we wszystkim, co jest potrzebne po drodze."
        />

        <motion.ol
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            <motion.li
              key={service.title}
              variants={fadeInUp}
              className="border-t border-foreground/80 pt-5 pb-10"
            >
              <span className="font-hand text-3xl text-accent">{index + 1}.</span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
