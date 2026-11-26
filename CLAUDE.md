# Sinez Digital – strona firmowa

Jednostronicowa strona marketingowa agencji Sinez Digital (właściciel: Paweł Śleziński). Treści wyłącznie po polsku.
Stack: Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind v4, framer-motion, lucide-react, next-themes (tryb jasny/ciemny).

## Zasady pracy (najważniejsze)

- **Nigdy nie wymyślaj faktów o firmie** (historia, daty, zespół, statystyki, opinie, klienci). Użytkownik dwukrotnie odrzucił teksty z zmyślonymi szczegółami. Nowy tekst publiczny pisz tylko z tego, co użytkownik podał lub co wynika z kodu/plików projektu, a w razie braków zapytaj.
- Jeśli prośba jest niejasna lub urwana, dopytaj zamiast zgadywać.
- Zwykły rytm: zmiana → `npm run lint` + `npm run build` → sprawdzenie w przeglądarce (desktop, a przy zmianach układu też mobile) → commit i push na `main` (Vercel wdraża automatycznie) → sprawdzenie, że zmiana jest na produkcji. Użytkownik przyzwyczaił się, że po weryfikacji commitujesz i wypychasz; w razie wątpliwości zapytaj.
- Node nie jest w PATH: `export PATH="/Users/figgi/.local-tools/node/bin:$PATH"`.
- Serwer dev: `preview_start` z nazwą `sinez-digital-dev` (konfiguracja w `~/.claude/launch.json`, nie usuwaj innych wpisów).
- Nigdy nie wypisuj ani nie zapisuj tokenów GitHub (w innych repozytoriach użytkownika są wpisane w adresie `origin`).

## Wdrożenie

- Repo: `github.com/pawelslezinski707-code/SinezDigital`, gałąź `main` → Vercel → domena `www.sinezdigital.com`.
- Formularz kontaktowy: Formspree, adres w zmiennej `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (`.env.local`, poza gitem; wzór w `.env.example`). Bez niej działa lokalny stub `/api/contact`.
- Jeśli Vercel przestanie wdrażać nowe commity: Project Settings → Git → Disconnect, potem połącz repo ponownie (webhook kiedyś przestał działać).

## Struktura

- Treści są w `src/lib/data.ts`: `navLinks`, `services`, `projects`, `processSteps`, `pricingPlans`, `maintenancePlans`, `seoUpgrade`, `socialLinks`, `contactInfo`.
- Kolejność sekcji w `src/app/page.tsx`: Hero → Usługi `#uslugi` → Portfolio `#portfolio` → Aplikacje `#aplikacje` → Jak pracujemy `#jak-pracujemy` → O nas `#o-nas` → Cennik `#cennik` → Kontakt `#kontakt`.
- **`navLinks` musi mieć tę samą kolejność co sekcje na stronie.** Linki w nagłówku i stopce są pisane jako `/#sekcja` (przez `next/link`), żeby działały też z podstron `/portfolio/[slug]`.
- Strony demo w portfolio to prawdziwe pliki statyczne w `public/demos/<slug>/`, osadzane iframe'em (`demo-frame.tsx`, zawiera ochronę przed przewijaniem strony nadrzędnej po kliknięciu w iframe) na podstronie `/portfolio/[slug]`.
- Aplikacje (np. Hablamos) mają `liveUrl` i `category: "aplikacje"`, nie mają podstrony ani plakietki „Demo”, bo to działające produkty. Karta prowadzi na żywy adres.

## Decyzje użytkownika

- Social media: tylko Instagram i TikTok (bez Facebooka, na razie). W `contactInfo` tylko telefon (e-mail i adres usunięte na życzenie).
- Portfolio: Studio Yogi Lotus, Trattoria Bella Vita, RemontPro to demo (oznaczone „Demo”), Hablamos to działająca aplikacja.
- Cennik: Portfolio 900 zł, Business 1 300 zł, Business Pro od 3 300 zł. Wszystkie karty wyglądają tak samo, bez plakietki „najczęściej wybierany”, bez czasu realizacji i bez dopisku pod cennikiem. Po najechaniu karta unosi się i ma grubszą fioletową ramkę.
- Opieka po wdrożeniu to płatny abonament dla Business i Business Pro. Plan Portfolio jej nie obejmuje. Informacja jest tylko w dymku przy gwiazdce w kroku 04 „Jak pracujemy”, nie w treści kroku.
- Usługi obejmują „SEO dla firm” i „Aplikacje internetowe”.

## Ikony i logo

Logo użytkownika (gradient fioletowy, znak `</>`) jest w `src/components/logo.tsx`, `src/app/icon.svg`, `src/app/apple-icon.png` i `src/app/favicon.ico`. Przy zmianie logo trzeba odnowić **wszystkie trzy pliki**. `favicon.ico` kiedyś został domyślnym trójkątem Vercela i wprowadzał w błąd. Rastry renderuj jako pełny kwadrat bez przezroczystych rogów (headless Chrome domyślnie daje biały róg).

## Znane niedociągnięcia

- `src/app/layout.tsx`, `robots.ts` i `sitemap.ts` wskazują `https://sinezdigital.pl`, a domena produkcyjna to `www.sinezdigital.com`.
- Tytuł i opis w metadanych (`layout.tsx`) wspominają tylko o stronach, nie o aplikacjach.
- Nie ma sekcji z opiniami klientów (nie dodawać bez prawdziwych opinii od użytkownika).
