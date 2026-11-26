import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { projects } from "@/lib/data";

const demos = projects.filter((project) => project.demoUrl);

export function Websites() {
  return (
    <section id="strony" className="pb-24 sm:pb-28">
      <Container>
        <div className="flex flex-col gap-8 rounded-2xl border-2 border-dashed border-muted/40 p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="font-hand text-2xl text-accent">a może strona?</p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Potrzebujesz strony internetowej?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Taką też możemy zrobić. Zobacz przykładowe projekty
              demonstracyjne — to nie są strony prawdziwych klientów, ale
              pokazują, jak może wyglądać Twoja.
            </p>
          </div>
          <ul className="flex flex-col gap-2 sm:min-w-64">
            {demos.map((demo) => (
              <li key={demo.id}>
                <Link
                  href={`/portfolio/${demo.id}`}
                  className="group flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
                >
                  <span>
                    {demo.name}
                    <span className="block text-xs text-muted sm:ml-2 sm:inline">
                      {demo.categoryLabel}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
