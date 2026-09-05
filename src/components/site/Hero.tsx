import { ArrowRight, Download } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./primitives";

const status = [
  ["Software", "Online"],
  ["Network", "Online"],
  ["Automation", "Online"],
  ["Growth", "Active"],
];

export function Hero() {
  return (
    <section id="hero" className="on-dark relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      <div aria-hidden className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 size-[520px] rounded-full bg-amber/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <span className="label-mono flex items-center gap-2 border border-border px-3 py-1.5 text-muted-foreground">
                <span className="status-dot" /> Available for opportunities
              </span>
              <span className="label-mono text-amber">Nairobi / East Africa</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="label-mono mt-8 text-muted-foreground">Digital Systems Engineer</p>
            <h1 className="mt-4 font-display text-[2.6rem] leading-[1.02] font-bold tracking-tight sm:text-6xl xl:text-7xl">
              Architecting <span className="text-amber">Digital Systems</span> That Move Businesses
              Forward.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I build high-performance digital infrastructure that helps businesses scale, automate,
              and thrive — combining software engineering, network infrastructure, and digital
              growth strategy.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-amber px-6 py-3.5 text-sm font-medium text-graphite transition-colors duration-300 hover:bg-amber-bright"
              >
                View Projects
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-medium transition-colors duration-300 hover:border-amber hover:text-amber"
              >
                Let's Work Together
              </a>
              <a
                href={profile.resume}
                className="label-mono inline-flex items-center gap-2 px-2 py-3 text-muted-foreground transition-colors duration-300 hover:text-amber"
              >
                <Download className="size-4" /> Download Resume
              </a>
            </div>
          </Reveal>

        </div>

        <Reveal delay={160} className="relative">
          <div className="relative mx-auto max-w-md">
            <span aria-hidden className="absolute -left-4 top-8 bottom-8 w-px bg-amber/70" />
            <div className="relative overflow-hidden rounded-sm border border-border">
              <img
                src={profile.photo}
                alt="Portrait of Sammy M. Kasango, Digital Systems Engineer based in Nairobi, Kenya"
                width={720}
                height={900}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="label-mono absolute inset-x-0 bottom-0 flex flex-wrap gap-x-3 gap-y-1 bg-graphite/80 px-4 py-3 backdrop-blur-md">
                <span className="text-amber">Systems</span>
                <span className="text-muted-foreground">/ Software</span>
                <span className="text-muted-foreground">/ Networks</span>
                <span className="text-muted-foreground">/ Growth</span>
              </div>
            </div>

            <div className="label-mono mt-4 grid gap-3 sm:absolute sm:-right-6 sm:top-10 sm:mt-0 sm:w-52 lg:-right-32">
              <div className="border border-border bg-graphite-deep/90 p-4 backdrop-blur-md">
                <p className="text-amber">System Status</p>
                <ul className="mt-3 space-y-1.5">
                  {status.map(([k, v]) => (
                    <li key={k} className="flex items-center justify-between gap-3">
                      <span className="text-muted-foreground">{k}</span>
                      <span className="flex items-center gap-1.5">
                        <span className="status-dot" />
                        {v}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 max-w-[1280px] px-5 sm:px-8">
        <p className="label-mono border-t border-border pt-5 text-muted-foreground">
          Software × Network × Growth — Building Digital Infrastructure
        </p>
      </div>
    </section>
  );
}
