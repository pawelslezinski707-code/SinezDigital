import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Jak Sinez Digital przetwarza dane osobowe i czy strona używa plików cookies.",
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-surface-border pt-8">
      <h2 className="text-xl font-semibold text-foreground sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3 text-base leading-relaxed text-muted [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-foreground">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <Container className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Polityka prywatności
          </h1>
          <p className="mt-4 text-sm text-muted">
            Ostatnia aktualizacja: 26 listopada 2026
          </p>

          <div className="mt-12 space-y-10">
            <Section title="1. Kto jest administratorem danych">
              <p>
                Administratorem danych osobowych przekazanych przez tę stronę jest{" "}
                <strong>Paweł Śleziński</strong>, działający pod nazwą Sinez
                Digital. We wszystkich sprawach dotyczących
                danych osobowych możesz skontaktować się z nami telefonicznie:{" "}
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="link text-foreground"
                >
                  {contactInfo.phone}
                </a>
                .
              </p>
            </Section>

            <Section title="2. Jakie dane zbieramy i po co">
              <p>
                Zbieramy tylko dane, które sam(a) wpiszesz w formularzu kontaktowym:
                imię i nazwisko, adres e-mail, temat i treść wiadomości.
                Wykorzystujemy je wyłącznie po to, żeby odpowiedzieć na Twoją
                wiadomość i porozmawiać o Twoim pomyśle.
              </p>
              <p>Podstawa prawna (RODO):</p>
              <ul>
                <li>
                  art. 6 ust. 1 lit. b — działania na Twoje żądanie przed
                  ewentualnym zawarciem umowy,
                </li>
                <li>
                  art. 6 ust. 1 lit. f — nasz prawnie uzasadniony interes, czyli
                  odpowiedź na wiadomość.
                </li>
              </ul>
              <p>
                Podanie danych jest dobrowolne, ale bez adresu e-mail nie będziemy
                mogli odpowiedzieć.
              </p>
            </Section>

            <Section title="3. Komu przekazujemy dane">
              <p>Korzystamy z zewnętrznych usług, które przetwarzają dane w naszym imieniu:</p>
              <ul>
                <li>
                  <strong>Formspree</strong> — dostarcza wiadomości z formularza
                  kontaktowego na naszą skrzynkę e-mail,
                </li>
                <li>
                  <strong>Vercel</strong> — hosting strony; serwery mogą
                  automatycznie zapisywać techniczne dane połączenia, np. adres IP.
                </li>
              </ul>
              <p>
                Obie firmy mają siedzibę w USA, więc dane mogą być przekazywane poza
                Europejski Obszar Gospodarczy na podstawie mechanizmów przewidzianych
                w RODO. Nie sprzedajemy danych ani nie przekazujemy ich innym
                podmiotom w celach marketingowych.
              </p>
            </Section>

            <Section title="4. Jak długo przechowujemy dane">
              <p>
                Dane z formularza przechowujemy tak długo, jak jest to potrzebne do
                prowadzenia rozmowy i ewentualnej współpracy, albo do czasu
                zgłoszenia przez Ciebie sprzeciwu.
              </p>
            </Section>

            <Section title="5. Twoje prawa">
              <p>Masz prawo do:</p>
              <ul>
                <li>dostępu do swoich danych i otrzymania ich kopii,</li>
                <li>sprostowania danych,</li>
                <li>usunięcia danych lub ograniczenia ich przetwarzania,</li>
                <li>wniesienia sprzeciwu wobec przetwarzania,</li>
                <li>przenoszenia danych,</li>
                <li>
                  wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych
                  (uodo.gov.pl).
                </li>
              </ul>
            </Section>

            <Section title="6. Pliki cookies">
              <p>
                <strong>Ta strona nie używa plików cookies</strong> — ani
                analitycznych, ani reklamowych. Nie korzystamy z narzędzi do
                śledzenia odwiedzających.
              </p>
              <p>
                Strona nie zapisuje też żadnych informacji w pamięci Twojej
                przeglądarki.
              </p>
            </Section>

            <Section title="7. Strony demonstracyjne i linki zewnętrzne">
              <p>
                Przykładowe strony demonstracyjne (Studio Yogi Lotus, Trattoria Bella
                Vita, RemontPro) wczytują czcionki z Google Fonts oraz zdjęcia z
                zewnętrznych serwisów (np. Pexels, Unsplash). Strona Trattoria Bella
                Vita zawiera też osadzoną mapę Google, która może zapisywać własne
                pliki cookies. Podczas oglądania tych stron Twoja przeglądarka łączy
                się z tymi serwisami, które mogą zobaczyć Twój adres IP.
              </p>
              <p>
                Linki do Instagrama, TikToka i aplikacji Hablamos prowadzą do
                zewnętrznych serwisów, które mają własne zasady prywatności.
              </p>
            </Section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
