"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { pricingPlans } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Pricing() {
  return (
    <section id="cennik" className="bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Cennik"
          title="Przejrzyste pakiety dopasowane do Twoich potrzeb"
          description="Każdy projekt jest inny, dlatego ceny traktujemy jako punkt wyjścia do rozmowy o Twoich potrzebach."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                plan.featured
                  ? "border-transparent bg-gradient-to-b from-violet-600 to-blue-600 text-white shadow-2xl shadow-violet-600/30 lg:-translate-y-4"
                  : "border-surface-border bg-background"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-violet-700 shadow-md">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  Polecany
                </span>
              )}

              <h3
                className={`text-lg font-semibold ${
                  plan.featured ? "text-white" : "text-foreground"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-2 text-sm ${
                  plan.featured ? "text-violet-100" : "text-muted"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-bold ${
                    plan.featured ? "text-white" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </span>
              </div>
              <p
                className={`mt-1 text-xs ${
                  plan.featured ? "text-violet-100" : "text-muted"
                }`}
              >
                {plan.priceNote}
              </p>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        plan.featured ? "text-white" : "text-violet-600 dark:text-violet-400"
                      }`}
                    />
                    <span className={plan.featured ? "text-white/90" : "text-foreground/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:scale-105 ${
                  plan.featured
                    ? "bg-white text-violet-700"
                    : "bg-gradient-to-r from-violet-600 to-blue-600 text-white"
                }`}
              >
                Wybieram {plan.name}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
