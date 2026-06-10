import HeroSection from "@/components/home/HeroSection";

import EndangeredFeed from "@/components/home/EndangeredFeed";

import OraclePreview from "@/components/home/OraclePreview";

import HistorianPreview from "@/components/home/HistorianPreview";

import VoicesPreview from "@/components/home/VoicesPreview";

import CulturalDNA from "@/components/dna/CulturalDNA";

import ConstellationPreview from "@/components/home/ConstellationPreview";

import VanishingEarth from "@/components/globe/VanishingEarth";

export default function HomePage() {
  return (
    <main>

      <HeroSection />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-6xl font-bold mb-10">
            🌍 The Vanishing Earth
          </h2>

          <p className="text-gray-400 mb-12">
            A living map of humanity's fading memory.
          </p>

          <VanishingEarth />

        </div>
      </section>

      <EndangeredFeed />

      <OraclePreview />

      <HistorianPreview />

      <VoicesPreview />

      <CulturalDNA />

      <ConstellationPreview />

      <section className="py-32 text-center">

        <h2 className="text-6xl font-bold">
          Humanity doesn't lose its memory all at once.
        </h2>

        <p className="text-2xl mt-6 text-memory">
          It disappears one story at a time.
        </p>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto">
          Echoes of the Unseen ensures those stories
          are never lost.
        </p>

      </section>

    </main>
  );
}
