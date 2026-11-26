import type { LucideIcon } from "lucide-react";
import { AppWindow, Lightbulb, Palette, Globe } from "lucide-react";
import { InstagramIcon, TikTokIcon } from "@/components/social-icons";

export const navLinks = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#aplikacje", label: "Aplikacje" },
  { href: "#jak-pracujemy", label: "Jak pracujemy" },
  { href: "#o-nas", label: "O nas" },
  { href: "#strony", label: "Strony" },
  { href: "#kontakt", label: "Kontakt" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: AppWindow,
    title: "Aplikacje internetowe",
    description:
      "Tworzymy aplikacje od pomysłu do działającego produktu — z kontami użytkowników, panelem administratora i zapisem danych.",
  },
  {
    icon: Lightbulb,
    title: "Pomoc z pomysłem",
    description:
      "Masz pomysł, ale nie wiesz, od czego zacząć? Pomożemy zamienić go w prawdziwą rzecz.",
  },
  {
    icon: Palette,
    title: "Kolory, projekt i styl",
    description:
      "Pomożemy wybrać kolory, wygląd i styl, żeby całość pasowała do Twojego pomysłu.",
  },
  {
    icon: Globe,
    title: "Strony internetowe",
    description:
      "Jeśli potrzebujesz strony zamiast aplikacji — też ją dla Ciebie zrobimy.",
  },
];

export type ProjectCategory = "firmy" | "prywatne" | "aplikacje";

export type Project = {
  id: string;
  name: string;
  category: ProjectCategory;
  categoryLabel: string;
  image: string;
  demoUrl?: string;
  liveUrl?: string;
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
  {
    id: "hablamos",
    name: "Hablamos",
    category: "aplikacje",
    categoryLabel: "W trakcie tworzenia",
    image: "/portfolio/hablamos.jpg",
    liveUrl: "https://hablamons.vercel.app",
    demo: false,
    description:
      "Hablamos to aplikacja do nauki hiszpańskiego dla Polaków, którą obecnie rozwijamy. Krótkie lekcje i testy, konta uczniów, rankingi klasy oraz panel administratora — z interfejsem w całości po polsku.",
    highlights: [
      "Krótka lekcja, a po niej test sprawdzający wiedzę z danego tematu",
      "Konta uczniów i ranking klasy, a także tryb gościa bez zakładania konta",
      "Seria dni i punkty XP motywujące do regularnej nauki",
      "Panel administratora do zarządzania treściami",
      "Możliwość zainstalowania aplikacji na telefonie",
    ],
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Opowiadasz o pomyśle",
    description:
      "Przedstaw nam swój pomysł, nawet jeśli jest jeszcze w zarysie. Wspólnie ustalamy, co ma robić i dla kogo.",
  },
  {
    number: "02",
    title: "Projekt i styl",
    description:
      "Pomagamy wybrać kolory, wygląd i styl. Przesyłamy wstępny projekt, a Ty decydujesz, czy przechodzimy do dalszej realizacji.",
  },
  {
    number: "03",
    title: "Tworzenie",
    description:
      "Budujemy całość zgodnie z projektem — z naciskiem na wydajność, responsywność i dostępność.",
  },
  {
    number: "04",
    title: "Uruchomienie",
    description:
      "Publikujemy projekt i zostajemy przy Tobie, oferując dalszą opiekę.",
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
