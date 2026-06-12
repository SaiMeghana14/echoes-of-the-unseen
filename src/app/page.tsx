import HeroSection from "@/components/home/HeroSection";
import EndangeredFeed from "@/components/home/EndangeredFeed";
import OraclePreview from "@/components/home/OraclePreview";
import HistorianPreview from "@/components/home/HistorianPreview";
import VoicesPreview from "@/components/home/VoicesPreview";
import ConstellationPreview from "@/components/home/ConstellationPreview";

import ImpactStats from "@/components/dashboard/ImpactStats";

import CulturalDNA from "@/components/dna/CulturalDNA";
import VanishingEarth from "@/components/globe/VanishingEarth";

export default function HomePage() {
  return (
    <main className="bg-[#020817] text-white overflow-hidden">

      {/* Hero */}
      <HeroSection />

      {/* Interactive Globe */}
      <section
        id="explore"
        className="relative h-screen overflow-hidden"
      >
        <VanishingEarth />

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/60
          via-transparent
          to-black
          pointer-events-none
        "
        />
      </section>

      {/* Impact Statistics */}
      <section
        id="memory"
        className="
        py-24
        px-6
        border-y
        border-white/10
      "
      >
        <ImpactStats />
      </section>

      {/* Cultural DNA */}
      <section className="py-24">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black">
            Cultural DNA
          </h2>

          <p className="mt-4 text-white/60">
            Mapping humanity's interconnected memories.
          </p>
        </div>

        <CulturalDNA />
      </section>

      {/* AI Agents */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-16">
            AI Preservation Agents
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <OraclePreview />
            <HistorianPreview />
            <VoicesPreview />
          </div>

        </div>
      </section>

      {/* Endangered Heritage */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-12">
            Endangered Today
          </h2>

          <EndangeredFeed />

        </div>
      </section>

      {/* Cultural Constellation */}
      <section className="py-24">
        <ConstellationPreview />
      </section>

      {/* Final CTA */}
      <section
        className="
        py-32
        text-center
        px-6
      "
      >
        <h2
          className="
          text-5xl
          md:text-6xl
          font-black
          max-w-5xl
          mx-auto
        "
        >
          Humanity doesn't lose its memory all at once.
        </h2>

        <p
          className="
          text-2xl
          mt-8
          text-cyan-400
          font-semibold
        "
        >
          It disappears one story at a time.
        </p>

        <p
          className="
          text-white/60
          mt-8
          max-w-3xl
          mx-auto
          text-lg
        "
        >
          Echoes of the Unseen preserves cultures,
          languages, traditions, and digital memories
          through AI-powered heritage preservation.
        </p>

        <div className="mt-12">
          <a
            href="/echo-oracle"
            className="
            px-10
            py-5
            rounded-full
            bg-cyan-400
            text-black
            font-bold
            hover:scale-105
            transition
          "
          >
            Begin Preserving Memory
          </a>
        </div>
      </section>

    </main>
  );
}
