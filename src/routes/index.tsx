import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Nav } from "@/components/portfolio/Nav";
import {
  About,
  Certifications,
  Contact,
  Experience,
  Footer,
  Hero,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Filmon Endris — Full-Stack Developer · IT, Haramaya University" },
      {
        name: "description",
        content:
          "Portfolio of Filmon Endris, a full-stack developer and IT student at Haramaya University. Real case studies across government, education, and healthcare web platforms.",
      },
      { property: "og:title", content: "Filmon Endris — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Full-stack developer building React + Node / PHP + MySQL platforms. IT student at Haramaya University. Open to internships 2026 / 2027.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") document.documentElement.classList.add("light");
  }, []);

  return (
    <main className="min-h-dvh overflow-x-clip bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
