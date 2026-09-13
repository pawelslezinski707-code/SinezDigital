import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Palette,
  FileText,
  LifeBuoy,
  ClipboardList,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

export const navLinks = [
  { href: "#o-nas", label: "O nas" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#cennik", label: "Cennik" },
  { href: "#kontakt", label: "Kontakt" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Building2,
    title: "Strony internetowe dla firm",
    description:
      "Profesjonalne serwisy firmowe, które budują wiarygodność marki i wspierają pozyskiwanie klientów.",
  },
  {
    icon: Palette,
    title: "Portfolio dla freelancerów i artystów",
    description:
      "Estetyczne, minimalistyczne strony prezentujące realizacje – dopasowane do indywidualnego stylu.",
  },
  {
    icon: FileText,
    title: "Strony wizytówki / one-page",
    description:
      "Szybkie, skuteczne strony jednostronicowe idealne na start lub prostą prezentację oferty.",
  },
  {
    icon: LifeBuoy,
    title: "Opieka i rozwój strony po wdrożeniu",
    description:
      "Stałe wsparcie techniczne, aktualizacje i rozwój funkcjonalności już po uruchomieniu projektu.",
  },
];

export type ProjectCategory = "firmy" | "prywatne";

export type Project = {
  id: string;
  name: string;
  category: ProjectCategory;
  categoryLabel: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "nova-consulting",
    name: "Nova Consulting",
    category: "firmy",
    categoryLabel: "Strona firmowa",
    gradient: "from-indigo-500 via-purple-500 to-blue-500",
  },
  {
    id: "marta-fotografia",
    name: "Marta Kowalska – Fotografia",
    category: "prywatne",
    categoryLabel: "Portfolio prywatne",
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
  },
  {
    id: "urbanfit",
    name: "UrbanFit Studio",
    category: "firmy",
    categoryLabel: "Strona firmowa",
    gradient: "from-blue-500 via-cyan-500 to-teal-400",
  },
  {
    id: "adam-grafik",
    name: "Adam Nowak – Grafik",
    category: "prywatne",
    categoryLabel: "Portfolio prywatne",
    gradient: "from-violet-500 via-indigo-500 to-blue-600",
  },
  {
    id: "greenpack",
    name: "GreenPack",
    category: "firmy",
    categoryLabel: "E-commerce",
    gradient: "from-purple-600 via-violet-500 to-fuchsia-500",
  },
  {
    id: "kasia-ilustracje",
    name: "Kasia Wiśniewska – Ilustracje",
    category: "prywatne",
    categoryLabel: "Portfolio prywatne",
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
  },
];

export type ProcessStep = {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Brief i wycena",
    description:
      "Poznajemy Twoje cele biznesowe, oczekiwania i budżet, a następnie przygotowujemy szczegółową wycenę.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Projekt graficzny",
    description:
      "Tworzymy makiety i projekt UI dopasowany do charakteru marki, uwzględniając Twoje uwagi.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Realizacja",
    description:
      "Kodujemy stronę zgodnie z projektem – z naciskiem na wydajność, responsywność i dostępność.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Wdrożenie i wsparcie",
    description:
      "Publikujemy stronę, konfigurujemy analitykę i zostajemy przy Tobie, oferując dalszą opiekę.",
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  featured?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "1 500 zł",
    priceNote: "cena od, projekt jednorazowy",
    description: "Idealne rozwiązanie na start – prosta strona wizytówka lub one-page.",
    features: [
      "Strona jednostronicowa (one-page)",
      "Responsywny design mobile-first",
      "Podstawowa optymalizacja SEO",
      "Formularz kontaktowy",
      "1 runda poprawek",
      "Wdrożenie na hosting",
    ],
  },
  {
    name: "Business",
    price: "3 900 zł",
    priceNote: "cena od, projekt jednorazowy",
    description: "Rozbudowana strona firmowa z pełną strukturą podstron i CMS-em.",
    features: [
      "Do 6 podstron",
      "Indywidualny projekt graficzny",
      "Zaawansowane SEO on-page",
      "Panel do edycji treści (CMS)",
      "Integracja z Google Analytics",
      "3 rundy poprawek",
      "30 dni wsparcia po wdrożeniu",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "7 500 zł",
    priceNote: "cena od, wycena indywidualna",
    description: "Kompleksowe projekty – sklepy internetowe i rozbudowane platformy.",
    features: [
      "Nielimitowana liczba podstron",
      "Sklep internetowy / funkcje e-commerce",
      "Indywidualne animacje i UX",
      "Zaawansowana optymalizacja wydajności",
      "Integracje (płatności, CRM, newsletter)",
      "Opieka i rozwój przez 3 miesiące",
      "Dedykowany opiekun projektu",
    ],
  },
];

export const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
];

export const contactInfo = {
  phone: "+48 577 128 085",
};
