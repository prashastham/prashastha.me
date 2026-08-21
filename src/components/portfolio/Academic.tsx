import Icon from "@/components/icons/Icon";
import { EDUCATION, ORGANIZATIONS } from "@/lib/portfolio-data";

export default function Academic() {
  return (
    <section className="mb-section-desktop border-t border-outline-variant/20 pt-section-desktop">
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xl">
        Academic &amp; Organizational
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
        <div className="flex flex-col gap-lg">
          {EDUCATION.map((edu) => (
            <div key={edu.institution}>
              <h3 className="font-title-lg text-title-lg text-on-surface mb-xs flex items-center gap-sm">
                <Icon name="school" />
                {edu.institution}
              </h3>
              <p className="font-body-base text-body-base text-on-surface-variant mb-xs">
                {edu.degree}
              </p>
              <div className="flex items-center gap-sm">
                <span className="font-body-base text-body-base text-secondary">
                  {edu.location}
                </span>
                <span className="w-1 h-1 bg-surface-variant rounded-full" />
                <span className="font-label-caps text-label-caps text-secondary bg-surface-container px-sm py-xs rounded-full">
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h3 className="font-title-lg text-title-lg text-on-surface mb-md">
            Organizations
          </h3>
          <div className="flex flex-wrap gap-sm">
            {ORGANIZATIONS.map((org) => (
              <a
                key={org.name}
                href={org.href}
                target="_blank"
                rel="noreferrer"
                className="px-md py-sm bg-surface border border-outline-variant/30 rounded-full font-code-mono text-code-mono text-on-surface hover:border-primary hover:text-primary transition-colors"
              >
                {org.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
