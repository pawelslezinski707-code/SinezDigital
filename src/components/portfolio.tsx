"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, LayoutGrid } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects, type ProjectCategory } from "@/lib/data";

const filters: { value: ProjectCategory | "wszystkie"; label: string }[] = [
  { value: "wszystkie", label: "Wszystkie" },
  { value: "firmy", label: "Firmy" },
  { value: "prywatne", label: "Portfolio prywatne" },
];

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "wszystkie">(
    "wszystkie"
  );

  const filteredProjects =
    activeFilter === "wszystkie"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Realizacje, z których jesteśmy dumni"
          description="Wybrane projekty stron internetowych stworzonych dla firm oraz osób prywatnych."
        />

        <div
          role="tablist"
          aria-label="Filtruj realizacje po kategorii"
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeFilter === filter.value
                  ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-md shadow-violet-600/25"
                  : "border border-surface-border bg-surface text-muted hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group overflow-hidden rounded-2xl border border-surface-border bg-surface"
              >
                <div
                  className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${project.gradient}`}
                >
                  <LayoutGrid
                    className="h-10 w-10 text-white/70 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-black/25 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {project.categoryLabel}
                  </span>
                </div>
                <div className="flex items-center justify-between p-5">
                  <h3 className="text-base font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400"
                  >
                    Zobacz więcej
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
