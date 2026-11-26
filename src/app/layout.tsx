import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
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
      suppressHydrationWarning
      className={`${inter.variable} ${bricolage.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
