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
        🌠 Memory Constellation
      </h1>

      <p className="text-gray-400 mb-8">
        Every story becomes a star.
        Every memory becomes a
        constellation.
      </p>

      <MemoryGraph />
    </section>
  );
}
