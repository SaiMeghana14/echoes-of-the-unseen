import HeroSection from "@/components/home/HeroSection";
import EndangeredFeed from "@/components/home/EndangeredFeed";
import OraclePreview from "@/components/home/OraclePreview";
import HistorianPreview from "@/components/home/HistorianPreview";
import VoicesPreview from "@/components/home/VoicesPreview";
import ConstellationPreview from "@/components/home/ConstellationPreview";

import ImpactStats from "@/components/dashboard/ImpactStats";
import GalaxyView from "@/components/constellation/GalaxyView";

import CulturalDNA from "@/components/dna/CulturalDNA";
import VanishingEarth from "@/components/globe/VanishingEarth";
import FeatureCard from "@/components/common/FeatureCard";

import {
  Search,
  BookOpen,
  Archive,
  Gem,
} from "lucide-react";

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
      
      <GalaxyView />

      {/* Cultural DNA */}
      <section className="py-24">
        <CulturalDNA />
      </section>

      {/* AI Agents */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black text-center mb-16">
            AI Preservation Agents
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <OraclePreview />
            <HistorianPreview />
            <VoicesPreview />
          </div>

        </div>
      </section>

      {/* Explore the Platform */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
      
          <h2 className="text-5xl font-black text-center mb-6">
            Explore Echoes
          </h2>
      
          <p className="text-center text-white/60 max-w-3xl mx-auto mb-16">
            Discover every AI-powered preservation tool inside Echoes of the
            Unseen—from semantic search and heritage books to digital memory
            uploads and long-term preservation.
          </p>
      
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
      
            <FeatureCard
              icon={<Search size={30} />}
              title="Semantic Search"
              description="Search endangered cultures, traditions and languages using AI-powered semantic retrieval."
              href="/search"
              accent="cyan"
            />
      
            <FeatureCard
              icon={<BookOpen size={30} />}
              title="Heritage Book"
              description="Generate beautifully structured digital heritage books from preserved memories."
              href="/book-generator"
              accent="purple"
            />
      
            <FeatureCard
              icon={<Gem size={30} />}
              title="Digital Fossils"
              description="Recover and explore forgotten digital artifacts, memories, and cultural traces preserved through AI."
              href="/digital-fossils"
              accent="cyan"
            />
      
            <FeatureCard
              icon={<Archive size={30} />}
              title="Time Capsule"
              description="Preserve cultural memories for future generations."
              href="/time-capsule"
              accent="orange"
            />
      
          </div>
      
        </div>
      </section>
      
      {/* Endangered Heritage */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

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
