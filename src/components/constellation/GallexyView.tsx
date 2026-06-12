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
          🏛 Sites
          <div className="text-3xl font-bold mt-2">75</div>
        </div>
      </div>

      <div className="relative h-[250px] mt-12 rounded-2xl bg-black/20 overflow-hidden">

        <div className="absolute top-10 left-20 w-3 h-3 bg-cyan-400 rounded-full"></div>
        <div className="absolute top-24 left-72 w-3 h-3 bg-purple-400 rounded-full"></div>
        <div className="absolute top-40 left-48 w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-yellow-400 rounded-full"></div>
      
        <svg className="absolute inset-0 w-full h-full">
          <line x1="80" y1="40" x2="300" y2="100" stroke="white" />
          <line x1="300" y1="100" x2="180" y2="160" stroke="white" />
          <line x1="180" y1="160" x2="700" y2="120" stroke="white" />
        </svg>
      
      </div>

      <div className="mt-12">
        <MemoryGraph />
      </div>
    </section>
  );
}
