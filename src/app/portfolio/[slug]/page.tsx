import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Container } from "@/components/ui/container";
import { DemoFrame } from "@/components/demo-frame";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.id === slug);
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Realizacja nie znaleziona" };
  }

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-32 pb-24 sm:pt-40 sm:pb-32">
        <Container>
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Wróć do portfolio
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-600 dark:text-violet-400">
              {project.categoryLabel}
            </span>
            {project.demo && (
              <span className="rounded-full bg-violet-600 px-4 py-1 text-sm font-semibold text-white">
                Projekt demonstracyjny
              </span>
            )}
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {project.name}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {project.description}
          </p>

          <DemoFrame src={project.demoUrl} title={project.name} />

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-foreground">
                Co warto zobaczyć w tym projekcie
              </h2>
              <ul className="mt-6 space-y-4">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-600 dark:text-violet-400" />
                    <span className="text-base leading-relaxed text-foreground/90">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-surface-border bg-surface p-6">
              <h3 className="text-base font-semibold text-foreground">
                Podoba Ci się ten styl?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Możemy zrealizować podobny projekt dla Ciebie — dopasowany do
                Twojej marki i celów biznesowych.
              </p>
              <Link
                href="/#kontakt"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition-transform hover:scale-105"
              >
                Wyceń podobny projekt
              </Link>
            </div>
          </div>

          <Link
            href="/#portfolio"
            className="mt-16 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Wróć do wszystkich realizacji
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}
