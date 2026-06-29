"use client";

import {
  useEffect,
  useState,
} from "react";

import MemoryGraph from "./MemoryGraph";

export default function GalaxyView() {
  const [stats, setStats] =
    useState<any>(null);

  const [memories, setMemories] =
    useState<any[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const statsRes =
          await fetch("/api/dashboard");

        if (statsRes.ok) {
          const statsData =
            await statsRes.json();

          setStats(statsData);
        }

        const memoryRes =
          await fetch(
            "/api/memory-atlas"
          );

        if (memoryRes.ok) {
          const memoryData =
            await memoryRes.json();

          setMemories(memoryData);
        }
      } catch (err) {
        console.error(
          "GalaxyView Error:",
          err
        );
      }
    }

    load();
  }, []);

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

      <p className="text-gray-400 mb-10">
        Connecting cultures across time.
        Mapping humanity's preserved
        memories.
      </p>

      {/* Statistics */}

      <div className="grid md:grid-cols-4 gap-6 mb-12">

        <div className="glass-card rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-lg">
          <div className="text-sm text-white/60">
            🌍 Regions
          </div>

          <div className="text-4xl font-bold mt-3">
            {stats?.regions ?? "..."}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-lg">
          <div className="text-sm text-white/60">
            🏺 Categories
          </div>

          <div className="text-4xl font-bold mt-3">
            {stats?.categories ??
              "..."}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-lg">
          <div className="text-sm text-white/60">
            📖 Memories
          </div>

          <div className="text-4xl font-bold mt-3">
            {stats?.memories ??
              "..."}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-lg">
          <div className="text-sm text-white/60">
            🌐 Countries
          </div>

          <div className="text-4xl font-bold mt-3">
            {stats?.countries ??
              "..."}
          </div>
        </div>

      </div>

      {/* Graph */}

      <MemoryGraph />

      {/* Recent Memories */}

      <div className="mt-20">

        <h2 className="text-3xl font-bold mb-8">
          Recently Preserved
          Memories
        </h2>

        {memories.length === 0 ? (

          <div className="glass-card rounded-2xl p-10 border border-white/10 text-white/60 text-center">

            No memories uploaded
            yet.

          </div>

        ) : (

          <div className="grid md:grid-cols-3 gap-6">

            {memories
              .slice(0, 6)
              .map((memory) => (

                <div
                  key={memory.id}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-lg
                    p-6
                    hover:border-cyan-400/40
                    transition
                  "
                >

                  <h3 className="font-bold text-xl">

                    {memory.title}

                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">

                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs">

                      🌍 {memory.region}

                    </span>

                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs">

                      🏺 {memory.category}

                    </span>

                  </div>

                  <p className="text-white/60 mt-4 line-clamp-4">

                    {memory.description}

                  </p>

                </div>

              ))}

          </div>

        )}

      </div>

    </section>
  );
}
