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
import { InstagramIcon, TikTokIcon } from "@/components/social-icons";

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
  image: string;
  demo: boolean;
  description: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    id: "studio-yogi-lotus",
    name: "Studio Yogi Lotus",
    category: "firmy",
    categoryLabel: "Studio jogi",
    image: "/portfolio/lotus-yoga.jpg",
    demo: true,
    description:
      "Studio Yogi Lotus to fikcyjne, kameralne studio jogi, które prowadzi zajęcia Hatha, Vinyasa Flow oraz Yin Yoga, a także sesje oddechowe i medytacyjne dla osób w każdym wieku i na każdym poziomie zaawansowania.",
    highlights: [
      "Stonowana, naturalna kolorystyka budująca atmosferę spokoju",
      "Czytelny harmonogram zajęć i szybkie zapisy online",
      "Sekcja „O nas” budująca zaufanie i historię marki",
      "W pełni responsywny układ dopasowany do telefonów i tabletów",
    ],
  },
  {
    id: "trattoria-bella-vita",
    name: "Trattoria Bella Vita",
    category: "firmy",
    categoryLabel: "Restauracja",
    image: "/portfolio/bella-vita.jpg",
    demo: true,
    description:
      "Trattoria Bella Vita to fikcyjna włoska restauracja serwująca kuchnię śródziemnomorską. Strona ma zachęcać do rezerwacji stolika i budować klimat lokalu już od pierwszego wejrzenia.",
    highlights: [
      "Pełnoekranowe zdjęcie w tle budujące nastrój od razu na starcie",
      "Wyraźne wezwania do działania: „Zobacz menu” i „Zarezerwuj stolik”",
      "Elegancka typografia nawiązująca do włoskiego stylu",
      "Przejrzysta nawigacja do menu, godzin otwarcia i kontaktu",
    ],
  },
  {
    id: "remontpro",
    name: "RemontPro",
    category: "firmy",
    categoryLabel: "Firma remontowa",
    image: "/portfolio/remontpro.jpg",
    demo: true,
    description:
      "RemontPro to fikcyjna firma remontowo-budowlana oferująca kompleksowe remonty mieszkań i domów – od projektu po wykończenie, z naciskiem na solidność i terminowość.",
    highlights: [
      "Mocny, kontrastowy design budujący wrażenie solidności",
      "Stale widoczny przycisk szybkiego kontaktu telefonicznego",
      "Odznaki zaufania: gwarancja, terminowość, ubezpieczenie OC",
      "Jasne wezwania do działania: bezpłatna wycena i oferta",
    ],
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
    description: "Kompleksowe, rozbudowane serwisy internetowe skrojone pod indywidualne potrzeby.",
    features: [
      "Nielimitowana liczba podstron",
      "Indywidualne animacje i UX",
      "Zaawansowana optymalizacja wydajności",
      "Integracje (CRM, newsletter, rezerwacje)",
      "Opieka i rozwój przez 3 miesiące",
      "Dedykowany opiekun projektu",
    ],
  },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/sinezdigital/",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@sinezdigital",
    icon: TikTokIcon,
  },
];

export const contactInfo = {
  phone: "+48 577 128 085",
};
