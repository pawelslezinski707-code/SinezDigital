import type { Metadata } from "next";
import { Instrument_Sans, Caveat } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  display: "swap",
});

const siteUrl = "https://www.sinezdigital.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sinez Digital – Zamieniamy pomysły w aplikacje",
    template: "%s | Sinez Digital",
  },
  description:
    "Sinez Digital tworzy aplikacje internetowe. Współpracujemy z każdym, kto ma pomysł — pomagamy go dopracować, wybrać kolory i styl oraz zbudować. Robimy też strony internetowe.",
  keywords: [
    "tworzenie aplikacji",
    "aplikacje internetowe",
    "aplikacja na zamówienie",
    "tworzenie stron www",
    "projektowanie stron internetowych",
  ],
  authors: [{ name: "Sinez Digital" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "Sinez Digital",
    title: "Sinez Digital – Zamieniamy pomysły w aplikacje",
    description:
      "Masz pomysł? Pomożemy zamienić go w prawdziwą aplikację — od koloru i stylu po działający produkt.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sinez Digital – Zamieniamy pomysły w aplikacje",
    description:
      "Masz pomysł? Pomożemy zamienić go w prawdziwą aplikację — od koloru i stylu po działający produkt.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${instrument.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
