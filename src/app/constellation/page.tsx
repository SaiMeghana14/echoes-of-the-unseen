"use client";

import dynamic from "next/dynamic";

const ForceGraph3D = dynamic(
  () => import("react-force-graph-3d"),
  { ssr: false }
);

export default function ConstellationPage() {
  const data = {
    nodes: [
      { id: "Ainu" },
      { id: "Toda" },
      { id: "Fishing Songs" },
      { id: "Story Archive" },
      { id: "Ancestor Wisdom" },
    ],

    links: [
      {
        source: "Ainu",
        target: "Story Archive",
      },

      {
        source: "Toda",
        target: "Ancestor Wisdom",
      },

      {
        source: "Fishing Songs",
        target: "Story Archive",
      },
    ],
  };

  return (
    <main className="p-10 text-white">
      <h1 className="text-4xl font-bold mb-4">
        🌠 Memory Constellation
      </h1>

      <p className="text-white/60 mb-8">
        Explore connections between endangered
        cultures, traditions, stories, and
        preserved human knowledge.
      </p>

      <div className="h-[700px] rounded-3xl overflow-hidden border border-white/10 bg-black/20">
        <ForceGraph3D
          graphData={data}
          nodeAutoColorBy="id"
        />
      </div>
    </main>
  );
}
