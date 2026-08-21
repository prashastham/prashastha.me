import Link from "next/link";

export default function PortfolioHero() {
  return (
    <section className="mb-section-desktop mt-xl">
      <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-md">
        Neuro-Engineer &amp; <br />
        ex-Fintech Software Engineer
      </h1>
      <p className="font-body-lg text-body-lg text-secondary mb-lg max-w-2xl">
        Founder @ LoopDelta &amp; highbrow.ai. Bridging the gap between
        abstract artificial intelligence and physical industrial design with
        precision and innovation.
      </p>
      <Link
        href="/contact"
        className="inline-block bg-primary-container text-on-primary px-lg py-sm rounded-xl font-title-lg text-title-lg hover:opacity-90 transition-opacity"
      >
        Contact Me
      </Link>
    </section>
  );
}
