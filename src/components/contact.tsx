"use client";

import { useState, type FormEvent } from "react";
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
    <section id="kontakt" className="bg-surface py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Kontakt"
          title="Porozmawiajmy o Twoim projekcie"
          description="Wypełnij formularz lub skontaktuj się z nami bezpośrednio – odpowiadamy w ciągu 24 godzin."
        />

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
          <motion.form
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 lg:col-span-3"
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
                  autoComplete="name"
                  className="rounded-xl border border-surface-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-violet-500"
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
                  autoComplete="email"
                  className="rounded-xl border border-surface-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-violet-500"
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
                className="rounded-xl border border-surface-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-violet-500"
                placeholder="Wycena strony internetowej"
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
                className="resize-none rounded-xl border border-surface-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-violet-500"
                placeholder="Opowiedz nam o swoim projekcie..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === "loading" ? "Wysyłanie..." : "Wyślij wiadomość"}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-4 w-4" />
                Dziękujemy! Odezwiemy się najszybciej, jak to możliwe.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
                <AlertCircle className="h-4 w-4" />
                Coś poszło nie tak. Spróbuj ponownie lub zadzwoń bezpośrednio.
              </p>
            )}
          </motion.form>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6 lg:col-span-2"
          >
            <div className="flex flex-col gap-4 rounded-2xl border border-surface-border bg-background p-6">
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-foreground/90 transition-colors hover:text-violet-600 dark:hover:text-violet-400"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  <Phone className="h-4 w-4" />
                </span>
                {contactInfo.phone}
              </a>

              <div className="mt-2 flex gap-3 border-t border-surface-border pt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-xs font-semibold text-muted transition-colors hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400"
                  >
                    {social.label[0]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
