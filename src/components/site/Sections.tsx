import { ArrowRight, Download } from "lucide-react";
import {
  expertise,
  outcomes,
  philosophySteps,
  profile,
  services,
  skillGroups,
  systemFlow,
  tools,
} from "@/data/portfolio";
import {
  CodeMotif,
  FlowMotif,
  NodesMotif,
  Reveal,
  SectionLabel,
  SkillGauge,
} from "./primitives";

export function About() {
  return (
    <section id="about" className="bg-ivory py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionLabel index="01" title="About Me" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-[2.75rem]">
              Engineering Digital Systems That Connect Technology, Infrastructure and Growth.
            </h2>
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-steel-light">
            <p>
              I bridge software engineering, network infrastructure, and digital marketing to design
              and build scalable, secure, and growth-oriented digital systems.
            </p>
            <p>
              My focus is not just on building technology — it's on delivering solutions that drive
              real business impact in today's digital economy.
            </p>
            <p>
              Based in Nairobi, Kenya, I work with startups, SMEs, and enterprises across East Africa
              and globally, helping them architect the infrastructure that drives their ambitions.
            </p>
            <a
              href={profile.resume}
              className="label-mono inline-flex items-center gap-2 border-b border-amber pb-1 text-graphite transition-colors duration-300 hover:text-amber"
            >
              <Download className="size-4" /> Download Resume
            </a>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {outcomes.map((o, i) => (
            <Reveal as="li" key={o.n} delay={i * 90}>
              <div className="premium-card h-full p-8">
                <p className="label-mono text-amber">{o.n}</p>
                <h3 className="mt-5 font-display text-xl font-bold">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-light">{o.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Motif({ kind }: { kind: "code" | "nodes" | "flow" }) {
  if (kind === "code") return <CodeMotif />;
  if (kind === "nodes") return <NodesMotif />;
  return <FlowMotif />;
}

export function Expertise() {
  return (
    <section id="expertise" className="bg-ivory-soft py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionLabel index="02" title="My Core Expertise" />
        <h2 className="mt-8 max-w-3xl font-display text-3xl leading-tight font-bold sm:text-[2.75rem]">
          Three Disciplines. One Digital Infrastructure Vision.
        </h2>

        <div className="mt-14 space-y-6">
          {expertise.map((e, i) => (
            <Reveal key={e.n} delay={i * 80}>
              <article
                className={`premium-card grid gap-10 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr_0.7fr] ${
                  e.tone === "dark"
                    ? "on-dark"
                    : e.tone === "steel"
                      ? "bg-steel/8"
                      : "bg-ivory"
                }`}
              >
                <div>
                  <p className="label-mono flex items-center gap-2 text-amber">
                    <span className="status-dot" /> {e.n}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">{e.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed opacity-75">{e.description}</p>
                </div>
                <ul className="space-y-3 self-center">
                  {e.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3 border-b border-border pb-3 text-sm">
                      <span className="mt-2 h-px w-4 shrink-0 bg-amber" />
                      {c}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col justify-between gap-6">
                  <Motif kind={e.motif} />
                  <a
                    href="#services"
                    className="label-mono group inline-flex items-center gap-2 text-amber"
                  >
                    Explore capability
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className="on-dark py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionLabel index="03" title="Technical Stack" />
        <h2 className="mt-8 font-display text-3xl leading-tight font-bold sm:text-[2.75rem]">
          Tools Behind the Systems.
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-3 lg:gap-16">
          {skillGroups.map((g, i) => (
            <Reveal key={g.group} delay={i * 90}>
              <h3 className="label-mono border-b border-border pb-4 text-amber">{g.group}</h3>
              <ul className="mt-7 space-y-6">
                {g.skills.map((s) => (
                  <SkillGauge key={s.name} name={s.name} value={s.value} />
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <p className="label-mono text-muted-foreground">Tools & Stack</p>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
            {tools.map((t) => (
              <li key={t} className="label-mono text-foreground/80">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-ivory py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionLabel index="04" title="What I Build" />
        <h2 className="mt-8 max-w-3xl font-display text-3xl leading-tight font-bold sm:text-[2.75rem]">
          End-to-End Digital Infrastructure — From Concept to Deployment.
        </h2>

        <ul className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80}>
              <article className="premium-card group flex h-full flex-col p-8 sm:p-10">
                <p className="label-mono text-amber">{s.n}</p>
                <h3 className="mt-4 font-display text-2xl font-bold">{s.title}</h3>
                <span
                  aria-hidden
                  className="mt-5 block h-px w-10 bg-amber transition-all duration-300 group-hover:w-24"
                />
                <p className="mt-5 text-sm leading-relaxed text-steel-light">{s.description}</p>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {s.capabilities.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <span className="mt-2 h-px w-3 shrink-0 bg-amber" />
                      {c}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="label-mono mt-8 inline-flex items-center gap-2 pt-2 text-graphite transition-colors duration-300 hover:text-amber"
                >
                  {s.cta}
                  <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Differentiator() {
  return (
    <section className="bg-ivory-soft py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal>
          <p className="label-mono text-amber">Project Architecture</p>
          <h2 className="mt-4 max-w-5xl font-display text-3xl leading-tight font-bold sm:text-[2.75rem]">
            Software Engineer. Network Architect.
            <br className="hidden sm:block" /> Digital Systems Builder.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel-light">
            This portfolio is intentionally built around the intersection of code, infrastructure and
            growth — because that intersection is where working systems actually live.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4 font-display text-2xl font-bold sm:text-4xl">
            <span>Software</span>
            <span className="text-amber">+</span>
            <span>Infrastructure</span>
            <span className="text-amber">+</span>
            <span>Growth</span>
            <span className="text-amber">=</span>
            <span className="text-amber">Digital Systems</span>
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-16">
          <p className="label-mono text-muted-foreground">Signature system flow</p>
          <ol className="mt-6 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
            {systemFlow.map((step, i) => (
              <li key={step} className="bg-ivory p-6">
                <span className="label-mono text-amber">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 font-display text-lg font-bold">{step}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

export function Philosophy() {
  return (
    <section className="bg-ivory py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionLabel index="08" title="How I Approach Systems" />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {philosophySteps.map((p, i) => (
            <Reveal as="li" key={p.n} delay={i * 70}>
              <div className="h-full border-t border-border pt-6">
                <p className="label-mono text-amber">{p.n}</p>
                <h3 className="mt-3 font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-light">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-24 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-[2.5rem]">
              Technology Should Create Leverage.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-steel-light">
              The best digital systems do more than function. They reduce friction, improve
              visibility, automate repetitive work, strengthen infrastructure and create
              opportunities for growth.
            </p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-3 lg:self-center">
            {[
              ["Efficiency", "Reduce manual processes."],
              ["Reliability", "Build systems businesses can depend on."],
              ["Growth", "Turn digital infrastructure into a business advantage."],
            ].map(([t, b]) => (
              <li key={t} className="border-l border-amber pl-4">
                <p className="label-mono">{t}</p>
                <p className="mt-2 text-sm text-steel-light">{b}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
