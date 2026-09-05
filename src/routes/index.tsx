import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import {
  About,
  Differentiator,
  Expertise,
  Philosophy,
  Services,
  Stack,
} from "@/components/site/Sections";
import { Projects } from "@/components/site/Projects";
import { Contact, Footer } from "@/components/site/Contact";
import { profile } from "@/data/portfolio";

const title = "Sammy M. Kasango — Digital Systems Engineer | Software, Networks & Growth";
const description =
  "Digital Systems Engineer in Nairobi building scalable software, secure network infrastructure and digital growth systems for startups, SMEs and enterprises.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.title,
          email: `mailto:${profile.email}`,
          address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
          sameAs: [profile.linkedin, profile.github],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-ivory">
      <Nav />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Stack />
        <Services />
        <Projects />
        <Differentiator />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
