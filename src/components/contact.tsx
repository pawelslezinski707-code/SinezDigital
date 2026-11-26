"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactInfo, socialLinks } from "@/lib/data";
import { fadeInUp } from "@/lib/motion";

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    const endpoint = formspreeId
      ? formspreeId.startsWith("http")
        ? formspreeId
        : `https://formspree.io/f/${formspreeId}`
      : "/api/contact";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="border-t border-surface-border py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Kontakt"
            title="Opowiedz nam o swoim pomyśle"
            description="Wypełnij formularz lub zadzwoń — odpowiadamy w ciągu 24 godzin."
          />

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-10 flex flex-col gap-6"
          >
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="flex w-fit items-center gap-3 text-lg font-medium text-foreground transition-colors hover:text-violet-600 dark:hover:text-violet-400"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                <Phone className="h-5 w-5" />
              </span>
              {contactInfo.phone}
            </a>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border text-muted transition-colors hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.form
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-3xl border border-surface-border bg-surface p-6 sm:p-8 lg:col-span-7"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Imię i nazwisko
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={100}
                autoComplete="name"
                className="field"
                placeholder="Jan Kowalski"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Adres e-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={200}
                autoComplete="email"
                className="field"
                placeholder="jan@firma.pl"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm font-medium text-foreground">
              Temat
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              maxLength={200}
              className="field"
              placeholder="Pomysł na aplikację"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Wiadomość
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={5000}
              className="field resize-none"
              placeholder="Opisz swój pomysł — nawet w kilku zdaniach..."
            />
          </div>

          <p className="text-xs leading-relaxed text-muted">
            Wysyłając formularz, przekazujesz nam swoje dane, abyśmy mogli
            odpowiedzieć na wiadomość. Szczegóły znajdziesz w{" "}
            <Link
              href="/polityka-prywatnosci"
              className="text-violet-600 underline underline-offset-2 dark:text-violet-400"
            >
              polityce prywatności
            </Link>
            .
          </p>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send className="h-4 w-4" />
            {status === "loading" ? "Wysyłanie..." : "Wyślij wiadomość"}
          </button>

          <div role="status" aria-live="polite">
            {status === "success" && (
              <p className="flex items-center gap-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                Dziękujemy! Odezwiemy się najszybciej, jak to możliwe.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm font-medium text-red-700 dark:text-red-400">
                <AlertCircle className="h-4 w-4" />
                Coś poszło nie tak. Spróbuj ponownie lub zadzwoń bezpośrednio.
              </p>
            )}
          </div>
        </motion.form>
      </Container>
    </section>
  );
}
