# Sinez Digital

Strona internetowa agencji **Sinez Digital** – projektowanie stron internetowych i portfolio dla firm oraz osób prywatnych. Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000).

Inne przydatne komendy:

```bash
npm run build   # build produkcyjny
npm run start   # uruchomienie builda produkcyjnego
npm run lint    # ESLint
```

## Struktura projektu

```
src/
  app/
    layout.tsx        – czcionki, metadata SEO, ThemeProvider
    page.tsx           – składa wszystkie sekcje strony
    globals.css         – zmienne motywu, tryb ciemny/jasny
    sitemap.ts / robots.ts
    icon.svg             – favicon
    api/contact/route.ts – endpoint formularza kontaktowego (stub)
  components/
    header.tsx, hero.tsx, services.tsx, portfolio.tsx,
    process.tsx, about.tsx, pricing.tsx,
    contact.tsx, footer.tsx
    theme-provider.tsx, theme-toggle.tsx
    ui/container.tsx, ui/section-heading.tsx
  lib/
    data.ts     – treści (usługi, cennik, portfolio…)
    motion.ts    – warianty animacji Framer Motion
```

## Podłączenie formularza kontaktowego (Formspree)

Formularz (`src/components/contact.tsx`) domyślnie wysyła dane na lokalny `POST /api/contact`, który tylko loguje wiadomość w konsoli serwera. Aby wiadomości trafiały naprawdę na Twoją skrzynkę e-mail przez [Formspree](https://formspree.io):

1. Załóż darmowe konto na [formspree.io](https://formspree.io), używając adresu e-mail, na który mają przychodzić zgłoszenia.
2. Utwórz nowy formularz – Formspree wygeneruje endpoint w postaci `https://formspree.io/f/XXXXXXXX`.
3. Skopiuj plik `.env.example` jako `.env.local` i wklej identyfikator (samo `XXXXXXXX` lub cały adres):

   ```bash
   cp .env.example .env.local
   ```

   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=XXXXXXXX
   ```

4. Zrestartuj `npm run dev`. Formularz zacznie wysyłać dane bezpośrednio do Formspree, a każda wiadomość trafi na e-mail powiązany z Twoim kontem.

Jeśli zmienna `NEXT_PUBLIC_FORMSPREE_ENDPOINT` nie jest ustawiona, formularz wraca do lokalnego stuba `src/app/api/contact/route.ts` (przydatne w developmencie / przy innej usłudze, np. Resend – przykład w komentarzu w tym pliku).

## Motyw i design

Tryb jasny/ciemny obsługiwany przez `next-themes` (przełącznik w nagłówku). Kolory motywu i akcenty gradientowe (fiolet/niebieski na granacie/czerni) są zdefiniowane w `src/app/globals.css`.
