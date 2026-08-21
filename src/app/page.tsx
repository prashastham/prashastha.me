import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Experience from "@/components/home/Experience";

export default function Home() {
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col gap-24">
        <Hero />
        <About />
        <Experience />
      </div>
    </div>
  );
}
