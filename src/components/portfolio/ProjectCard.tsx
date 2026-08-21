import Icon from "@/components/icons/Icon";
import type { Project } from "@/lib/portfolio-data";

export default function ProjectCard({ project }: { project: Project }) {
  const isResearch = project.category === "RESEARCH";

  return (
    <article
      className={`relative overflow-hidden border border-[#E5E5EA] rounded-xl p-xl hover:shadow-lift hover:-translate-y-0.5 transition-all flex flex-col justify-between ${
        project.wide ? "col-span-1 md:col-span-2" : ""
      } ${isResearch ? "bg-[#FBFBFD]" : "bg-white"}`}
    >
      {isResearch && (
        <div className="absolute top-0 right-0 p-md opacity-20">
          <Icon name="analytics" className="text-6xl" />
        </div>
      )}
      <div className="relative z-10">
        <div className="flex items-center gap-sm mb-md">
          <span
            className={`font-label-caps text-label-caps px-sm py-xs rounded ${
              isResearch
                ? "bg-surface-variant text-on-surface"
                : "bg-primary-container/10 text-primary-container"
            }`}
          >
            {isResearch ? "RESEARCH / DATA" : "SOFTWARE"}
          </span>
          {project.active && (
            <span className="w-2 h-2 rounded-full bg-green-500" />
          )}
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">
          {project.title}
        </h3>
        {project.org && (
          <p className="font-label-caps text-label-caps text-secondary mb-sm">
            {project.org}
          </p>
        )}
        <p className="font-body-base text-body-base text-secondary mb-lg">
          {project.description}
        </p>
      </div>
      <div className="relative z-10 flex justify-between items-center mt-auto">
        <div className="flex items-center gap-md">
          <span className="font-code-mono text-code-mono text-secondary">
            {project.language}
          </span>
          {!!project.stars && (
            <span className="flex items-center gap-xs text-secondary text-sm">
              <Icon name="star" className="text-sm" />
              {project.stars}
            </span>
          )}
        </div>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="text-primary-container font-title-lg text-title-lg text-sm hover:opacity-80 flex items-center gap-xs"
        >
          View Repo
          <Icon name="arrow_forward" className="text-[18px]" />
        </a>
      </div>
    </article>
  );
}
