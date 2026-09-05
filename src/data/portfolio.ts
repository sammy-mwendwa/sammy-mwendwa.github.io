export const profile = {
  name: "Sammy M. Kasango",
  title: "Digital Systems Engineer",
  descriptor: "Software • Networks • Growth",
  location: "Nairobi, Kenya",
  email: "hellosammykasango@gmail.com",
  whatsapp: "https://wa.me/254792697745",
  linkedin: "https://linkedin.com/in/sammykasango",
  github: "https://github.com/sammykasango",
  handle: "@sammykasango",
  resume: "/assets/Sammy_M_Kasango_Resume.pdf",
  photo: "/assets/profile.jpg",
};

export const outcomes = [
  {
    n: "01",
    title: "Scalable Software",
    body: "Scalable software systems that reduce manual work and improve efficiency.",
  },
  {
    n: "02",
    title: "Secure Infrastructure",
    body: "Secure network design that keeps operations reliable and connected.",
  },
  {
    n: "03",
    title: "Measurable Growth",
    body: "SEO and digital strategy built around measurable growth and visibility.",
  },
];

export const expertise = [
  {
    n: "01",
    name: "Software Systems",
    description:
      "Engineering robust applications and automation tools that power modern business operations.",
    capabilities: [
      "Web applications & portals",
      "Automation & scripting tools",
      "REST APIs & backend systems",
      "Database design & optimization",
    ],
    motif: "code" as const,
    tone: "dark" as const,
  },
  {
    n: "02",
    name: "Network Infrastructure",
    description:
      "Designing and securing networks that form the backbone of reliable digital operations.",
    capabilities: [
      "LAN/WAN architecture & design",
      "Network security & hardening",
      "VLAN, DHCP & routing protocols",
      "System monitoring & optimization",
    ],
    motif: "nodes" as const,
    tone: "steel" as const,
  },
  {
    n: "03",
    name: "Digital Growth Systems",
    description:
      "Combining technology with marketing intelligence for measurable market growth.",
    capabilities: [
      "SEO-optimized platforms",
      "Marketing funnels & automation",
      "Analytics & performance tracking",
      "Conversion-focused architecture",
    ],
    motif: "flow" as const,
    tone: "ivory" as const,
  },
];

export const skillGroups = [
  {
    group: "Engineering",
    skills: [
      { name: "HTML / CSS", value: 90 },
      { name: "JavaScript", value: 78 },
      { name: "Python", value: 80 },
      { name: "APIs & Backend", value: 72 },
      { name: "C++", value: 75 },
    ],
  },
  {
    group: "Networking",
    skills: [
      { name: "TCP/IP & Protocols", value: 85 },
      { name: "Cisco IOS / Packet Tracer", value: 80 },
      { name: "Network Security", value: 76 },
      { name: "VLAN / VLSM / DHCP", value: 82 },
      { name: "LAN/WAN Design", value: 78 },
    ],
  },
  {
    group: "Digital Marketing",
    skills: [
      { name: "SEO Optimization", value: 82 },
      { name: "Google Analytics", value: 75 },
      { name: "Conversion Funnels", value: 70 },
      { name: "Content Strategy", value: 78 },
      { name: "WordPress / CMS", value: 85 },
    ],
  },
];

export const tools = [
  "Git & GitHub",
  "WordPress",
  "MySQL",
  "VS Code",
  "Cisco Packet Tracer",
  "Tkinter",
  "ReportLab",
  "GitHub Pages",
  "Figma",
];

export const services = [
  {
    n: "01",
    title: "Website & Web App Development",
    description:
      "Custom websites, web applications, and portals built for performance, conversion, and scalability — from landing pages to full-stack platforms.",
    capabilities: [
      "Business websites & portfolios",
      "Conversion-focused landing pages",
      "E-commerce & booking systems",
      "Admin dashboards & portals",
      "WordPress & CMS solutions",
    ],
    cta: "Build a Web System",
  },
  {
    n: "02",
    title: "Network Setup for SMEs",
    description:
      "Reliable, secure, and scalable network infrastructure design and deployment for small and medium businesses — from cabling to cloud.",
    capabilities: [
      "LAN/WAN design & deployment",
      "VLAN & firewall configuration",
      "WiFi & hotspot systems",
      "Network audits & troubleshooting",
    ],
    cta: "Design a Network",
  },
  {
    n: "03",
    title: "System Automation",
    description:
      "Python-powered automation scripts and tools that eliminate repetitive tasks, reduce errors, and free teams to focus on what matters.",
    capabilities: [
      "Workflow & process automation",
      "Data scraping & processing",
      "Report generation tools",
      "API integration & bots",
    ],
    cta: "Automate a Process",
  },
  {
    n: "04",
    title: "SEO & Digital Optimization",
    description:
      "Technical SEO, analytics setup, and digital growth strategies that turn a website from a digital brochure into a conversion machine.",
    capabilities: [
      "Technical SEO audits",
      "Google Analytics & Search Console",
      "Performance optimization",
      "Content & funnel strategy",
    ],
    cta: "Optimize Growth",
  },
];

export type Project = {
  id: string;
  title: string;
  category: "software" | "network" | "digital";
  categoryLabel: string;
  year: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  metrics: string[];
  visual: "code" | "dashboard" | "topology" | "browser";
  links: { label: string; href: string; primary?: boolean }[];
};

export const projects: Project[] = [
  {
    id: "code-smell-detector",
    title: "C++ Code Smell Detector",
    category: "software",
    categoryLabel: "Software",
    year: "2026",
    problem:
      "Manual code reviews in C++ projects miss recurring anti-patterns, slowing down team velocity.",
    solution:
      "A modular 35-file static analysis system with a Lexer, AST Builder, and 7 specialized detectors running 84 automated tests.",
    impact:
      "Automated code quality checks — reducing review effort and improving codebase maintainability.",
    technologies: ["C++", "AST", "Lexer", "Unit Testing"],
    metrics: ["7 Detectors", "84 Tests", "35 Source Files", "0 Dependencies"],
    visual: "code",
    links: [
      {
        label: "Project Documentation",
        href: "https://sammykasango.github.io/code-smell-detector",
        primary: true,
      },
      { label: "View Source", href: "https://github.com/sammykasango" },
    ],
  },
  {
    id: "church-union",
    title: "Church Union Management System",
    category: "software",
    categoryLabel: "Software",
    year: "2026",
    problem:
      "Manual church member management led to duplicates, lost records, and inefficient reporting.",
    solution:
      "Python desktop application with Tkinter UI, ReportLab PDF generation, duplicate prevention logic, and a professional dark-theme sidebar dashboard.",
    impact:
      "Centralized member records, automated PDF reporting, and eliminated data duplication for a growing church organization.",
    technologies: ["Python", "Tkinter", "ReportLab", "SQLite"],
    metrics: ["Desktop App", "PDF Reporting", "Duplicate Prevention"],
    visual: "dashboard",
    links: [
      { label: "View Project", href: "https://github.com/sammykasango", primary: true },
      { label: "GitHub", href: "https://github.com/sammykasango" },
    ],
  },
  {
    id: "vlan-lab",
    title: "Enterprise VLAN Network Lab",
    category: "network",
    categoryLabel: "Network",
    year: "2026",
    problem:
      "University network simulation required segmented VLANs with inter-VLAN routing and dynamic IP allocation.",
    solution:
      "Full Cisco Packet Tracer topology with VLAN configuration, VLSM addressing, Router-on-a-Stick, and DHCP across multiple departments.",
    impact:
      "Demonstrated production-grade network segmentation and routing skills for a secure enterprise VLAN environment.",
    technologies: ["Cisco IOS", "VLAN", "VLSM", "DHCP", "Router-on-a-Stick"],
    metrics: ["Multi-Department", "Inter-VLAN Routing", "DHCP Scopes"],
    visual: "topology",
    links: [
      { label: "View Project", href: "https://github.com/sammykasango", primary: true },
      { label: "GitHub", href: "https://github.com/sammykasango" },
    ],
  },
  {
    id: "vision-school",
    title: "Vision Kindergarten & Primary School Platform",
    category: "digital",
    categoryLabel: "Software",
    year: "2026",
    problem:
      "Educational institutions operating under modern CBC systems face challenges tracking comprehensive multi-tier structures, handling admissions transparently, and managing communications across web touchpoints without high infrastructure costs.",
    solution:
      "Engineered a lightweight, type-safe full-stack school portal framework optimized for direct static deployment using TanStack Start and Tailwind CSS v4, with Cloudflare environments and a Git automation pipeline.",
    impact:
      "Serverless static deployment delivering fast page performance, Google Search Console integration, responsive mobile navigation and CBC-oriented onboarding.",
    technologies: ["TypeScript", "TanStack Start", "Tailwind CSS v4", "Cloudflare", "GitHub Actions"],
    metrics: ["Static Deploy", "Search Console", "Responsive"],
    visual: "browser",
    links: [
      { label: "Visit Live Site", href: "https://sammykasango.github.io/", primary: true },
      { label: "View Source", href: "https://github.com/sammykasango" },
    ],
  },
];

export const filters = [
  { id: "all", label: "All" },
  { id: "software", label: "Software" },
  { id: "network", label: "Network" },
  { id: "digital", label: "Digital" },
] as const;

export const philosophySteps = [
  { n: "01", title: "Understand", body: "Understand the business, users and operational challenge." },
  { n: "02", title: "Architect", body: "Translate requirements into scalable technical architecture." },
  { n: "03", title: "Build", body: "Develop reliable software and infrastructure." },
  { n: "04", title: "Integrate", body: "Connect systems, APIs, networks and workflows." },
  { n: "05", title: "Optimize", body: "Measure performance and improve continuously." },
];

export const systemFlow = [
  "Idea",
  "Architecture",
  "Engineering",
  "Infrastructure",
  "Deployment",
  "Growth",
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
