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
    </section>
  );
}
