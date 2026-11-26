# Sinez Digital – strona firmowa

Jednostronicowa strona firmy Sinez Digital (od 26.11.2026 główny profil: tworzenie aplikacji; strony internetowe jako dodatek) (właściciel: Paweł Śleziński). Treści wyłącznie po polsku.
Stack: Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind v4, framer-motion, lucide-react. Tylko jasny motyw (tryb ciemny usunięty 26.11.2026).

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

- Treści są w `src/lib/data.ts`: `navLinks`, `services`, `projects`, `processSteps`, `socialLinks`, `contactInfo`.
- Kolejność sekcji w `src/app/page.tsx`: Hero → Usługi `#uslugi` → Aplikacje `#aplikacje` → Jak pracujemy `#jak-pracujemy` → O nas `#o-nas` → Strony `#strony` → Kontakt `#kontakt`.
- **`navLinks` musi mieć tę samą kolejność co sekcje na stronie.** Linki w nagłówku i stopce są pisane jako `/#sekcja` (przez `next/link`), żeby działały też z podstron.
- Strony demo to pliki statyczne w `public/demos/<slug>/`, osadzane iframe'em (`demo-frame.tsx`) na podstronie `/portfolio/[slug]`. Na stronie głównej są tylko dyskretne linki w sekcji `#strony` (`websites.tsx`), bez osobnej sekcji portfolio.
- Polityka prywatności: `/polityka-prywatnosci`, link w stopce i pod formularzem. Przy dodaniu analityki, cookies, nowych usług zewnętrznych lub zmianie demo zaktualizuj ją.
- Wygląd (styl „od szkicu do aplikacji”, wybrany przez użytkownika 26.11.2026): ciepłe papierowe tło `#fbf6ee`, tekst `#2a231c`, jeden akcent ceglany `#b5472f` (tokeny w `globals.css`). Czcionki: Instrument Sans (wszystko) + Caveat (`font-hand`) tylko do krótkich odręcznych dopisków. Wspólne klasy `btn-primary`, `btn-ghost`, `field`, `link`.
- **Unikaj wyglądu „AI slop”** (użytkownik to wprost odrzucił): żadnych gradientów (tekst, tło, przyciski, ikony), świecących plam, siatek w tle, plakietek z kropką, pulsujących kropek, monospace'owych nagłówków sekcji, kafelków z gradientowymi ikonami ani mieszania wielu czcionek.
- Nagłówki bezpieczeństwa w `next.config.ts` (`X-Frame-Options: SAMEORIGIN`, bo dema są w iframe na tej samej domenie). `/api/contact` działa tylko w trybie deweloperskim, na produkcji zwraca 404.

## Decyzje użytkownika

- Firma zajmuje się teraz tworzeniem aplikacji; strony internetowe tylko jako „też możemy zrobić”. Przekaz: współpracujemy z każdym, kto ma pomysł, pomagamy zamienić go w prawdziwą rzecz i wybrać kolory, projekt, styl.
- Cennik, abonamenty opieki i upgrade SEO usunięte (26.11.2026).
- Hablamos pokazywany jako aplikacja „W trakcie tworzenia”.
- Nazwa i logo bez zmian. Dane kontaktowe bez zmian: tylko telefon, Instagram i TikTok (bez Facebooka, e-maila i adresu).

## Ikony i logo

Logo użytkownika (jednolity fiolet `#6D51EE`, znak `</>` w Courier New; gradient usunięty 26.11.2026 na życzenie, bez innych zmian) jest w `src/components/logo.tsx`, `src/app/icon.svg`, `src/app/apple-icon.png` i `src/app/favicon.ico`. Przy zmianie logo trzeba odnowić **wszystkie trzy pliki**. `favicon.ico` kiedyś został domyślnym trójkątem Vercela i wprowadzał w błąd. Rastry renderuj jako pełny kwadrat bez przezroczystych rogów (headless Chrome domyślnie daje biały róg).

## Znane niedociągnięcia

- Polityka prywatności: administrator to Paweł Śleziński (działalność niezarejestrowana, bez NIP), kontakt tylko telefoniczny. Po rejestracji firmy zaktualizuj dane w `/polityka-prywatnosci`.
- Nie ma sekcji z opiniami klientów (nie dodawać bez prawdziwych opinii od użytkownika).
