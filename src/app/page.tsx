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

      {/* Vanishing Earth */}
      <section
        id="explore"
        className="relative h-screen overflow-hidden"
      >
        <VanishingEarth />

        <div
          className="
          absolute inset-0
          bg-gradient-to-b
          from-black/70
          via-black/20
          to-black
        "
        />

        <div
          className="
          absolute inset-0
          flex flex-col
          items-center
          justify-center
          text-center
          z-[100]
          px-6
        "
        >
          <div
            className="
            px-4 py-2
            rounded-full
            border border-white/20
            backdrop-blur-lg
            bg-white/5
            mb-6
          "
          >
            🌍 Living Memory Network
          </div>

          <h1
            className="
            text-5xl
            md:text-7xl
            lg:text-8xl
            font-black
            tracking-tight
          "
          >
            Echoes of the Unseen
          </h1>

          <p
            className="
            text-xl
            md:text-2xl
            text-white/70
            mt-6
            max-w-3xl
          "
          >
            Preserving endangered languages,
            traditions, oral histories, communities,
            and digital memories before they disappear.
          </p>

          <div
            className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
          "
          >
            <a
              href="#memory"
              className="
              px-8
              py-4
              rounded-full
              bg-cyan-400
              text-black
              font-bold
              hover:scale-105
              transition
            "
            >
              Explore Humanity's Memory
            </a>

            <a
              href="/echo-oracle"
              className="
              px-8
              py-4
              rounded-full
              border
              border-white/20
              backdrop-blur-xl
              bg-white/5
              hover:bg-white/10
              transition
            "
            >
              Ask Echo Oracle
            </a>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
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
        
        <div
          className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-4
          gap-8
        "
        >
          <div
            className="
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            text-center
          "
          >
            <h3 className="text-5xl font-black">
              150+
            </h3>

            <p className="mt-3 text-white/60">
              Cultural Artifacts
            </p>
          </div>

          <div
            className="
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            text-center
          "
          >
            <h3 className="text-5xl font-black">
              38
            </h3>

            <p className="mt-3 text-white/60">
              Endangered Languages
            </p>
          </div>

          <div
            className="
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            text-center
          "
          >
            <h3 className="text-5xl font-black">
              22
            </h3>

            <p className="mt-3 text-white/60">
              Oral Traditions
            </p>
          </div>

          <div
            className="
            rounded-3xl
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            text-center
          "
          >
            <h3 className="text-5xl font-black">
              9
            </h3>

            <p className="mt-3 text-white/60">
              Countries
            </p>
          </div>
        </div>
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

      {/* AI Features */}
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

      {/* Endangered Feed */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-12">
            Endangered Today
          </h2>

          <EndangeredFeed />

        </div>
      </section>

      {/* Constellation */}
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
