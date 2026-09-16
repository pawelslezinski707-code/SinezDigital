"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  pricingPlans,
  maintenancePlans,
  maintenanceNote,
  seoUpgrade,
} from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export function Pricing() {
  return (
    <section id="cennik" className="bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Cennik"
          title="Wybierz zakres, dopasujemy resztę"
          description="Każda strona zaczyna się od rozmowy o tym, co ma robić. Poniższe warianty pokazują punkt startowy — dokładną wycenę ustalamy po krótkiej konsultacji."
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

              <div className="mt-6 flex items-baseline gap-2">
                {plan.priceFrom && (
                  <span
                    className={`text-sm ${
                      plan.featured ? "text-violet-100" : "text-muted"
                    }`}
                  >
                    od
                  </span>
                )}
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

              <ul className="mt-8 flex-1 space-y-3 border-t border-white/10 pt-6">
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
                {plan.notes?.map((note) => (
                  <li
                    key={note}
                    className={`pl-7 text-xs italic ${
                      plan.featured ? "text-violet-100" : "text-violet-600 dark:text-violet-400"
                    }`}
                  >
                    {note}
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
                Umów konsultację
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-20 max-w-2xl border-t border-surface-border pt-14"
        >
          <h3 className="text-xl font-semibold text-foreground">
            Opieka po wdrożeniu
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Po uruchomieniu strony możesz zlecić jej bieżące utrzymanie — drobne
            zmiany treści, aktualizacje i wsparcie techniczne w ramach
            miesięcznego abonamentu. Dotyczy to stron jedno- i
            wielostronicowych — Portfolio to usługa jednorazowa i nie wymaga
            abonamentu. Cena zależy od typu strony:
          </p>

          <ul className="mt-6 divide-y divide-surface-border border-y border-surface-border">
            {maintenancePlans.map((item) => (
              <li key={item.name} className="flex items-baseline justify-between py-4">
                <span className="text-sm text-foreground">{item.name}</span>
                <span className="font-semibold text-violet-600 dark:text-violet-400">
                  {item.price}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            {maintenanceNote}
          </p>

          <ul className="mt-8 divide-y divide-surface-border border-y border-surface-border">
            <li className="flex items-baseline justify-between py-4">
              <span className="text-sm text-foreground">
                {seoUpgrade.name}{" "}
                <span className="text-xs text-muted">
                  ({seoUpgrade.priceNote})
                </span>
              </span>
              <span className="font-semibold text-violet-600 dark:text-violet-400">
                {seoUpgrade.price}
              </span>
            </li>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-muted">
            {seoUpgrade.note}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
