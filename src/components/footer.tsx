import { navLinks, socialLinks, contactInfo } from "@/lib/data";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-background">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
            >
              <Logo className="h-8 w-8" />
              Sinez <span className="text-gradient">Digital</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Projektujemy nowoczesne strony internetowe i portfolio, które
              pomagają firmom i osobom prywatnym skutecznie działać online.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Nawigacja</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Kontakt</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <li>{contactInfo.phone}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Social media</h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border text-muted transition-colors hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-surface-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {year} Sinez Digital. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-muted">Zaprojektowane i zbudowane z pasją.</p>
        </div>
      </Container>
    </footer>
  );
}
