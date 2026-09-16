import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Palette,
  FileText,
  LifeBuoy,
  Search,
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
  {
    icon: Search,
    title: "SEO dla firm",
    description:
      "Optymalizacja strony pod wyszukiwarki, aby klienci łatwiej znajdowali Twoją firmę w Google – w pakietach Business i Business Pro, lub jako dodatkowy upgrade.",
  },
];

export type ProjectCategory = "firmy" | "prywatne";

export type Project = {
  id: string;
  name: string;
  category: ProjectCategory;
  categoryLabel: string;
  image: string;
  demoUrl: string;
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
    demoUrl: "/demos/studio-yogi-lotus/index.html",
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
    demoUrl: "/demos/trattoria-bella-vita/index.html",
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
    demoUrl: "/demos/remontpro/index.html",
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
    title: "Konsultacja i wstępna wycena",
    description:
      "Podczas konsultacji poznajemy, jak ma wyglądać i działać Twoja strona — z uwzględnieniem tego, co chcesz dzięki niej osiągnąć. Ustalamy zakres projektu i przygotowujemy wstępną wycenę.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Projekt graficzny",
    description:
      "Przesyłamy wstępny wygląd strony dopasowany do charakteru Twojej marki. Ty decydujesz, czy to wystarczy, czy przechodzimy do dalszej realizacji.",
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
  priceFrom?: boolean;
  priceNote: string;
  description: string;
  features: string[];
  notes?: string[];
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Portfolio",
    price: "900 zł",
    priceNote: "cena stała",
    description: "Prosta strona z najważniejszymi informacjami i danymi kontaktowymi.",
    features: [
      "Jedna strona z podstawowymi informacjami",
      "Dane kontaktowe i linki do social media",
      "Wersja mobilna",
      "Podstawowa optymalizacja pod wyszukiwarki",
    ],
  },
  {
    name: "Business",
    price: "1 300 zł",
    priceNote: "cena stała",
    description: "Pełna oferta, realizacje i kontakt zebrane w jednym miejscu.",
    features: [
      "Rozbudowane sekcje: oferta, o firmie, realizacje, opinie",
      "Formularz kontaktowy",
      "Wersja mobilna",
      "SEO Basic w cenie pakietu",
    ],
  },
  {
    name: "Business Pro",
    price: "3 300 zł",
    priceFrom: true,
    priceNote: "cena od",
    description: "Osobne podstrony na każdą część oferty — gdy masz więcej do pokazania.",
    features: [
      "Do 6 podstron w cenie bazowej",
      "Panel do samodzielnej edycji treści",
      "SEO Pro w cenie pakietu",
      "Zawiera wszystko z pakietów Portfolio i Business",
    ],
    notes: ["+200 zł za każdą kolejną podstronę"],
  },
];

export type MaintenancePlan = {
  name: string;
  price: string;
};

export const maintenancePlans: MaintenancePlan[] = [
  { name: "Business", price: "79 zł / mies." },
  { name: "Business Pro", price: "od 129 zł / mies." },
];

export const maintenanceNote =
  "To przykładowe stawki — dopasuj je do zakresu prac, jaki chcesz obejmować abonamentem (np. liczba zmian w miesiącu, czas reakcji).";

export const seoUpgrade = {
  name: "Upgrade do SEO Pro",
  priceNote: "jednorazowo",
  price: "120 zł",
  note:
    "Upgrade do SEO Pro to jednorazowa usługa, którą można dokupić do pakietu Portfolio lub Business — w Business Pro jest już w cenie.",
};

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
