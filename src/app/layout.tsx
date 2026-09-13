import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://sinezdigital.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sinez Digital – Projektowanie stron internetowych i portfolio",
    template: "%s | Sinez Digital",
  },
  description:
    "Sinez Digital to agencja projektowania nowoczesnych stron internetowych i portfolio dla firm oraz osób prywatnych. Strony wizytówki, sklepy internetowe i SEO.",
  keywords: [
    "projektowanie stron internetowych",
    "tworzenie stron www",
    "agencja interaktywna",
    "portfolio online",
    "sklepy internetowe",
    "SEO",
  ],
  authors: [{ name: "Sinez Digital" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "Sinez Digital",
    title: "Sinez Digital – Tworzymy strony, które sprzedają",
    description:
      "Nowoczesne strony internetowe i portfolio dla firm oraz osób prywatnych. Design, kod i SEO w jednym miejscu.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sinez Digital – Tworzymy strony, które sprzedają",
    description:
      "Nowoczesne strony internetowe i portfolio dla firm oraz osób prywatnych.",
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
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
