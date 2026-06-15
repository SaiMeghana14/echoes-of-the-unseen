"use client";

import MemoryGraph from "./MemoryGraph";

export default function GalaxyView() {
  return (
    <section
      className="
      min-h-screen
      bg-space
      text-white
      p-8
    "
    >
      <h1 className="text-5xl font-bold mb-4">
        🗺️ Memory Atlas
      </h1>

      <p className="text-gray-400 mb-8">
        Connecting cultures across time.
        Mapping humanity's preserved memories.
      </p>

      <div className="grid md:grid-cols-4 gap-6 p-8">
        <div className="glass-card p-6">
          🌍 Languages
          <div className="text-3xl font-bold mt-2">38</div>
        </div>
      
        <div className="glass-card p-6">
          🎭 Traditions
          <div className="text-3xl font-bold mt-2">22</div>
        </div>
      
        <div className="glass-card p-6">
          📖 Stories
          <div className="text-3xl font-bold mt-2">150+</div>
        </div>
      
        <div className="glass-card p-6">
          🏛️ Sites
          <div className="text-3xl font-bold mt-2">75</div>
        </div>
      </div>

      <div className="mt-12">
        <MemoryGraph />
      </div>

      <div className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Top Connected Cultures
        </h2>
      
        <div className="grid md:grid-cols-3 gap-6">
      
          <div className="glass-card p-6">
            <h3 className="font-bold">
              Ainu Culture
            </h3>
      
            <p className="text-white/60 mt-2">
              Connected to language preservation,
              fishing songs, spiritual beliefs,
              and ancestral knowledge.
            </p>
          </div>
      
          <div className="glass-card p-6">
            <h3 className="font-bold">
              Toda Culture
            </h3>
      
            <p className="text-white/60 mt-2">
              Connected through embroidery,
              festivals, and oral traditions.
            </p>
          </div>
      
          <div className="glass-card p-6">
            <h3 className="font-bold">
              Māori Culture
            </h3>
      
            <p className="text-white/60 mt-2">
              Connected through songs,
              tribal wisdom, and preservation efforts.
            </p>
          </div>
      
        </div>
      
      </div>
    </section>
  );
}
