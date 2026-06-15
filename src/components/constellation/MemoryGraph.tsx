"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ForceGraph3D = dynamic(
  () => import("react-force-graph-3d"),
  {
    ssr: false,
  }
);

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
  const [graph, setGraph] = useState<any>({
    nodes: [
      { id: "Ainu Culture", group: "culture" },
      { id: "Stories", group: "story" },
      { id: "Beliefs", group: "belief" },
      { id: "Rituals", group: "ritual" },
      { id: "Knowledge", group: "knowledge" },
    ],
    links: [
      {
        source: "Ainu Culture",
        target: "Stories",
      },
      {
        source: "Ainu Culture",
        target: "Beliefs",
      },
    ],
  });
  
  return (
    <div className="h-[800px]">
      <ForceGraph3D
        graphData={graph}
        nodeLabel="id"
        nodeAutoColorBy="group"
        linkDirectionalParticles={4}
        linkDirectionalParticleSpeed={0.004}
        linkWidth={2}
        nodeRelSize={8}
        backgroundColor="#020817"
      />
    </div>
  );
}
