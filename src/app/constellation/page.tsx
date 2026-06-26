"use client";

import MemoryGraph from "@/components/constellation/MemoryGraph";

export default function ConstellationPage() {
  return (
    <main className="p-10 text-white">
      <h1 className="text-5xl font-bold mb-4">
        🌠 Memory Constellation
      </h1>

      <p className="text-white/60 mb-8">
        Explore connections between endangered
        cultures, traditions, stories and preserved
        human knowledge.
      </p>

      <MemoryGraph />
    </main>
  );
}
