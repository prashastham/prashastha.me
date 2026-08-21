import Icon from "@/components/icons/Icon";

type ExperienceEntry = {
  role: string;
  organization: string;
  period: string;
  description: string;
  icon: string;
  dotClassName: string;
};

const EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Founder & AI Researcher",
    organization: "highbrow.ai & LoopDelta",
    period: "2022 - Present",
    description:
      "Spearheading research and development in cognitive interfaces and AI-driven analytics. Architecting core systems for real-time data processing and deploying machine learning models in constrained environments.",
    icon: "business",
    dotClassName: "bg-primary-container",
  },
  {
    role: "Software Engineer (Fintech)",
    organization: "WealthOS",
    period: "2020 - 2022",
    description:
      "Engineered highly available microservices for wealth management platforms. Focused on transaction integrity, latency reduction, and robust API design adhering to strict financial regulations.",
    icon: "account_balance",
    dotClassName: "bg-secondary group-hover:bg-primary-container transition-colors",
  },
];

export default function Experience() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
      <div className="md:col-span-4 flex flex-col gap-sm">
        <h2 className="font-headline-lg text-headline-lg text-on-background">
          Work Experience
        </h2>
        <div className="w-12 h-1 bg-primary-container rounded-full" />
      </div>
      <div className="md:col-span-8 flex flex-col gap-lg relative">
        <div className="absolute left-4 top-4 bottom-4 w-px bg-outline-variant/30 hidden sm:block" />
        {EXPERIENCE.map((entry) => (
          <div key={entry.role} className="relative pl-0 sm:pl-12 group">
            <div
              className={`absolute left-[13px] top-6 w-2 h-2 rounded-full hidden sm:block ring-4 ring-surface-container-lowest group-hover:scale-150 transition-transform ${entry.dotClassName}`}
            />
            <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-lg shadow-sm hover:shadow-lift hover:-translate-y-[2px] transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-sm mb-md">
                <div>
                  <h3 className="font-title-lg text-title-lg text-on-background">
                    {entry.role}
                  </h3>
                  <div className="font-body-base text-body-base text-secondary flex items-center gap-xs mt-1">
                    <Icon name={entry.icon} className="text-[18px]" />
                    {entry.organization}
                  </div>
                </div>
                <span className="font-label-caps text-label-caps text-secondary bg-surface-container px-3 py-1 rounded-full whitespace-nowrap self-start">
                  {entry.period}
                </span>
              </div>
              <p className="font-body-base text-body-base text-on-surface-variant">
                {entry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
