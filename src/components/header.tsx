"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled || isOpen
          ? "border-surface-border bg-background/95 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-18 items-center justify-between py-4" aria-label="Nawigacja główna">
          <Link href="/" className="flex items-center gap-2.5 text-base font-semibold text-foreground">
            <Logo className="h-8 w-8" />
            Sinez Digital
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${link.href}`}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link href="/#kontakt" className="btn-primary hidden px-5 py-2.5 lg:inline-flex">
            Napisz do nas
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-surface-border text-foreground lg:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-surface-border bg-background lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={`/${link.href}`}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-3 text-base text-foreground transition-colors hover:bg-surface"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/#kontakt" onClick={() => setIsOpen(false)} className="btn-primary mt-2">
                Napisz do nas
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
