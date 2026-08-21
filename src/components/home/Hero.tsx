import Image from "next/image";
import Link from "next/link";

const PROFILE_IMAGE_URL =
  "https://images.microcms-assets.io/assets/f02c46f18ba94bb5a072ed933307b9b9/c310fcb8816840d389e407405e40bf1d/PrashasthaProfilePicture.PNG";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center min-h-[60vh]">
      <div className="md:col-span-7 flex flex-col gap-lg order-2 md:order-1">
        <div className="inline-flex items-center gap-sm">
          <span className="font-label-caps text-label-caps bg-primary-container/10 text-primary px-3 py-1 rounded-full">
            System Active
          </span>
          <span className="font-code-mono text-code-mono text-secondary">
            v1.0.4
          </span>
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background max-w-2xl">
          ex-Fintech SE, <br />
          <span className="text-secondary">Neurotechnology Enthusiast &amp; Founder.</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[36rem]">
          University of Colombo School of Computing. Bridging the gap between
          artificial intelligence and human cognition through rigorous
          software engineering and neuro-technology.
        </p>
        <div className="flex flex-wrap gap-md mt-sm">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center bg-primary-container text-white font-title-lg text-title-lg px-6 py-3 rounded-xl hover:shadow-lift hover:-translate-y-[2px] transition-all duration-300"
          >
            Read the Blog
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-surface-container-lowest border border-outline-variant text-on-background font-title-lg text-title-lg px-6 py-3 rounded-xl hover:shadow-lift hover:-translate-y-[2px] transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
      <div className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end">
        <div className="relative w-full max-w-[28rem] aspect-[4/5] rounded-xl overflow-hidden bg-surface-container-lowest border border-outline-variant/50 shadow-sm hover:shadow-lift transition-all duration-500 group">
          <Image
            src={PROFILE_IMAGE_URL}
            alt="Prashastha Mudannayake"
            fill
            sizes="(min-width: 768px) 400px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
            priority
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-xl" />
        </div>
      </div>
    </section>
  );
}
