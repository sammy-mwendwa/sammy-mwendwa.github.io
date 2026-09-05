import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { filters, projects } from "@/data/portfolio";
import { ProjectVisual, Reveal, SectionLabel } from "./primitives";

export function Projects() {
  const [active, setActive] = useState<string>("all");
  const visible = projects.filter((p) => active === "all" || p.category === active);

  return (
    <section id="projects" className="bg-ivory-soft py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionLabel index="05" title="Selected Work" />
        <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-[2.75rem]">
              Engineering Work That Solves Real Problems.
            </h2>
            <p className="mt-4 text-base text-steel-light">
              Selected work demonstrating impact across the full digital infrastructure stack.
            </p>
          </div>

          <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                type="button"
                aria-selected={active === f.id}
                onClick={() => setActive(f.id)}
                className={`label-mono border px-4 py-2 transition-colors duration-300 ${
                  active === f.id
                    ? "border-amber bg-amber text-graphite"
                    : "border-border text-steel-light hover:border-amber hover:text-amber"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-2">
          {visible.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 70}>
              <article className="premium-card group flex h-full flex-col p-8 sm:p-10">
                <p className="label-mono text-muted-foreground">
                  <span className="text-amber">{p.categoryLabel}</span> / {p.year}
                </p>
                <h3 className="mt-4 font-display text-2xl leading-tight font-bold">{p.title}</h3>

                <div className="mt-7 transition-transform duration-500 group-hover:scale-[1.03]">
                  <ProjectVisual kind={p.visual} />
                </div>

                <dl className="mt-8 space-y-5 text-sm leading-relaxed">
                  <div>
                    <dt className="label-mono text-amber">Problem</dt>
                    <dd className="mt-1.5 text-steel-light">{p.problem}</dd>
                  </div>
                  <div>
                    <dt className="label-mono text-amber">Solution</dt>
                    <dd className="mt-1.5 text-steel-light">{p.solution}</dd>
                  </div>
                  <div>
                    <dt className="label-mono text-amber">Impact</dt>
                    <dd className="mt-1.5 text-steel-light">{p.impact}</dd>
                  </div>
                </dl>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {p.technologies.map((t) => (
                    <li key={t} className="label-mono border border-border px-2.5 py-1 text-steel-light">
                      {t}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-4">
                  {p.metrics.map((m) => (
                    <li key={m} className="label-mono bg-card px-3 py-3 text-center">
                      {m}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3 pt-2">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`label-mono inline-flex items-center gap-2 px-4 py-2.5 transition-colors duration-300 ${
                        l.primary
                          ? "bg-graphite text-ivory hover:bg-amber hover:text-graphite"
                          : "border border-border hover:border-amber hover:text-amber"
                      }`}
                    >
                      {l.label}
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

      </div>
    </section>
  );
}
