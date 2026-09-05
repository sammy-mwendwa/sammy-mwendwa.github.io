import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      data-visible={visible ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </Comp>
  );
}

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="amber-rule label-mono text-muted-foreground">
      <span>
        <span className="text-amber">{index}</span> / {title}
      </span>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="label-mono text-amber">{children}</p>;
}

/* --- Technical motifs ------------------------------------------------- */

export function CodeMotif() {
  const lines = [
    { w: "70%", accent: true },
    { w: "45%" },
    { w: "88%" },
    { w: "60%", accent: true },
    { w: "38%" },
  ];
  return (
    <div aria-hidden className="space-y-2 font-mono">
      {lines.map((l, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="label-mono text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
          <span
            className={`h-[3px] rounded-full ${l.accent ? "bg-amber" : "bg-current opacity-25"}`}
            style={{ width: l.w }}
          />
        </div>
      ))}
    </div>
  );
}

export function NodesMotif() {
  return (
    <svg aria-hidden viewBox="0 0 220 110" className="w-full max-w-[260px]">
      <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="1">
        <path d="M110 20 V50 M110 50 H40 V80 M110 50 H180 V80 M110 50 V80" />
      </g>
      <circle cx="110" cy="16" r="6" fill="var(--amber)" />
      {[40, 110, 180].map((x) => (
        <circle key={x} cx={x} cy="84" r="5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      ))}
    </svg>
  );
}

export function FlowMotif() {
  return (
    <svg aria-hidden viewBox="0 0 220 110" className="w-full max-w-[260px]">
      <path d="M20 18 H200 L150 56 V92 L90 76 V56 Z" fill="none" stroke="currentColor" strokeOpacity="0.3" />
      <path d="M20 18 H200 L170 42 H50 Z" fill="var(--amber)" fillOpacity="0.8" />
    </svg>
  );
}

export function BrowserMotif() {
  return (
    <div aria-hidden className="overflow-hidden rounded-md border border-border">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="size-1.5 rounded-full bg-amber" />
        <span className="size-1.5 rounded-full bg-current opacity-25" />
        <span className="size-1.5 rounded-full bg-current opacity-25" />
      </div>
      <div className="space-y-2 p-4">
        <div className="h-2 w-1/2 rounded-full bg-amber/70" />
        <div className="h-2 w-full rounded-full bg-current opacity-15" />
        <div className="grid grid-cols-3 gap-2 pt-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-8 rounded-sm border border-border" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function DashboardMotif() {
  return (
    <div aria-hidden className="flex gap-2 overflow-hidden rounded-md border border-border p-3">
      <div className="w-1/4 space-y-1.5">
        <div className="h-2 rounded-full bg-amber/80" />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-2 rounded-full bg-current opacity-15" />
        ))}
      </div>
      <div className="flex-1 space-y-2">
        <div className="h-2 w-2/3 rounded-full bg-current opacity-25" />
        <div className="grid grid-cols-2 gap-2">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-6 rounded-sm border border-border" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TopologyMotif() {
  return (
    <svg aria-hidden viewBox="0 0 240 110" className="w-full">
      <g stroke="currentColor" strokeOpacity="0.3">
        <path d="M120 22 V44 M60 66 H180 M60 66 V44 H120 M180 66 V44" fill="none" />
      </g>
      <rect x="104" y="10" width="32" height="12" fill="none" stroke="var(--amber)" />
      {[40, 100, 160].map((x) => (
        <rect key={x} x={x} y="66" width="40" height="14" fill="none" stroke="currentColor" strokeOpacity="0.5" />
      ))}
      <circle cx="120" cy="44" r="4" fill="var(--amber)" />
    </svg>
  );
}

export function ProjectVisual({ kind }: { kind: "code" | "dashboard" | "topology" | "browser" }) {
  if (kind === "code") return <CodeMotif />;
  if (kind === "dashboard") return <DashboardMotif />;
  if (kind === "topology") return <TopologyMotif />;
  return <BrowserMotif />;
}

/* Segmented technical gauge for skills */
export function SkillGauge({ name, value }: { name: string; value: number }) {
  const segments = 20;
  const filled = Math.round((value / 100) * segments);
  return (
    <li className="space-y-2">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm">{name}</span>
        <span className="label-mono text-amber">{value}%</span>
      </div>
      <div className="flex gap-[3px]" aria-hidden>
        {Array.from({ length: segments }).map((_, i) => (
          <span
            key={i}
            className={`h-2 flex-1 ${i < filled ? "bg-amber" : "bg-current opacity-15"}`}
          />
        ))}
      </div>
      <span className="sr-only">{value} percent proficiency</span>
    </li>
  );
}
