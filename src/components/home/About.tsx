export default function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
      <div className="md:col-span-4 flex flex-col gap-sm">
        <h2 className="font-headline-lg text-headline-lg text-on-background">
          About
        </h2>
        <div className="w-12 h-1 bg-primary-container rounded-full" />
      </div>
      <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-xl shadow-sm hover:shadow-lift hover:-translate-y-[2px] transition-all duration-300">
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          My work sits at the intersection of high-performance backend
          systems and experimental neuro-technology. I believe that elegant
          code and robust architecture are fundamental to solving complex
          biological computational problems.
        </p>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mt-md">
          With a foundation in rigorous academic research and practical
          industry experience, I strive to build systems that are not only
          scalable but structurally beautiful. The principles of classic
          industrial design inform my approach to software: clarity,
          precision, and an unwavering focus on the essential.
        </p>
      </div>
    </section>
  );
}
