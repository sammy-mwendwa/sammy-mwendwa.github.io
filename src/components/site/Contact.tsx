import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal, SectionLabel } from "./primitives";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "WhatsApp", value: "+254 792 697 745", href: profile.whatsapp, Icon: MessageCircle },
  { label: "LinkedIn", value: profile.handle, href: profile.linkedin, Icon: Linkedin },
  { label: "GitHub", value: profile.handle, href: profile.github, Icon: Github },
];

export function Contact() {
  return (
    <section id="contact" className="on-dark relative overflow-hidden py-24 sm:py-28">
      <div aria-hidden className="blueprint-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8">
        <SectionLabel index="06" title="Contact" />
        <div className="mt-10 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl leading-tight font-bold sm:text-[2.75rem]">
              Let's Build Digital Systems That Work.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed opacity-75">
              Whether you need software engineered, infrastructure designed, or digital growth
              systems built — I'd like to hear what you're working on.
            </p>
            <p className="label-mono mt-8 flex items-center gap-2 text-amber">
              <MapPin className="size-4" /> {profile.location}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="label-mono group inline-flex items-center gap-2 bg-amber px-6 py-3 text-graphite transition-opacity duration-300 hover:opacity-90"
              >
                Start a Conversation
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={profile.resume}
                className="label-mono inline-flex items-center gap-2 border border-amber px-6 py-3 text-amber transition-colors duration-300 hover:bg-amber hover:text-graphite"
              >
                <Download className="size-4" /> Download Resume
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ul className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label} className="bg-graphite">
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex h-full flex-col gap-3 p-7 transition-colors duration-300 hover:bg-steel/20"
                  >
                    <Icon className="size-5 text-amber" />
                    <span className="label-mono text-muted-foreground">{label}</span>
                    <span className="text-sm break-words transition-colors duration-300 group-hover:text-amber">
                      {value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="on-dark border-t border-border bg-graphite py-14">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-xl font-bold">{profile.name}</p>
          <p className="label-mono mt-2 text-muted-foreground">
            {profile.title} — {profile.descriptor}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {["about", "expertise", "services", "projects", "contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="label-mono text-muted-foreground transition-colors duration-300 hover:text-amber"
              >
                {id}
              </a>
            </li>
          ))}
        </ul>
        <p className="label-mono text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
