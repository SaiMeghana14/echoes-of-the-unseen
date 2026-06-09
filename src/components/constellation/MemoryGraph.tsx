"use client";

import ForceGraph3D from "react-force-graph-3d";

const data = {
  nodes: [
    { id: "Recipe" },
    { id: "Festival" },
    { id: "Story" },
    { id: "Community" },
    { id: "Song" },
  ],

  links: [
    {
      source: "Recipe",
      target: "Festival",
    },

    {
      source: "Festival",
      target: "Community",
    },

    {
      source: "Story",
      target: "Community",
    },

    {
      source: "Song",
      target: "Festival",
    },
  ],
};

export default function MemoryGraph() {
  return (
    <div className="h-[800px]">
      <ForceGraph3D
        graphData={data}
        nodeLabel="id"
        linkDirectionalParticles={2}
      />
    </div>
  );
}
