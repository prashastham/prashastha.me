import type { Metadata } from "next";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import ProjectCard from "@/components/portfolio/ProjectCard";
import Academic from "@/components/portfolio/Academic";
import { PROJECTS } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Software and research work from github.com/prashastham and the PraKesEy EEGNet replication group.",
};

export default function Portfolio() {
  return (
    <div className="pt-section-desktop pb-section-desktop max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
      <PortfolioHero />

      <section className="mb-section-desktop">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xl">
          Highlighted Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}
        </div>
      </section>

      <Academic />
    </div>
  );
}
