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
          🌍 38 Languages
          <div className="text-3xl font-bold mt-2">38</div>
        </div>
      
        <div className="glass-card p-6">
          🎭 22 Traditions
          <div className="text-3xl font-bold mt-2">22</div>
        </div>
      
        <div className="glass-card p-6">
          📖 150+ Stories
          <div className="text-3xl font-bold mt-2">150+</div>
        </div>
      
        <div className="glass-card p-6">
          🏛️ 75 Sites
          <div className="text-3xl font-bold mt-2">75</div>
        </div>
      </div>
      
      <div className="relative h-[350px] mt-12 rounded-2xl bg-black/20 overflow-hidden">
      
        <div className="absolute top-12 left-24 w-4 h-4 bg-cyan-400 rounded-full shadow-lg"></div>
        <div className="absolute top-28 left-80 w-4 h-4 bg-purple-400 rounded-full shadow-lg"></div>
        <div className="absolute top-52 left-52 w-4 h-4 bg-green-400 rounded-full shadow-lg"></div>
        <div className="absolute top-32 right-32 w-4 h-4 bg-yellow-400 rounded-full shadow-lg"></div>
      
        <svg className="absolute inset-0 w-full h-full">
          <line x1="100" y1="50" x2="320" y2="120" stroke="#38bdf8" />
          <line x1="320" y1="120" x2="220" y2="220" stroke="#38bdf8" />
          <line x1="220" y1="220" x2="700" y2="150" stroke="#38bdf8" />
        </svg>
      
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xl">
          🌌 Interactive Heritage Galaxy
        </div>
      
      </div>

      <div className="mt-12">
        <MemoryGraph />
      </div>
    </section>
  );
}
