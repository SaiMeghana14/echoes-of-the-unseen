"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const ForceGraph3D = dynamic(
  () => import("react-force-graph-3d"),
  {
    ssr: false,
  }
);

const COLORS = {
  core: "#fbbf24",
  language: "#60a5fa",
  tradition: "#34d399",
  folklore: "#c084fc",
  artifact: "#f97316",
  story: "#93c5fd",
  craft: "#fdba74",
  festival: "#6ee7b7",
  music: "#f9a8d4",
};

export default function MemoryGraph() {
  const [selected, setSelected] =
    useState<any>(null);

  const [graph] = useState({
    nodes: [
      {
        id: "Human Memory",
        group: "core",
        size: 40,
        description:
          "The collective memory of humanity preserved across cultures, traditions, languages, and stories.",
      },

      {
        id: "Languages",
        group: "language",
        size: 22,
        description:
          "Endangered languages and oral communication systems.",
      },

      {
        id: "Traditions",
        group: "tradition",
        size: 22,
        description:
          "Customs, rituals, and practices passed through generations.",
      },

      {
        id: "Folklore",
        group: "folklore",
        size: 22,
        description:
          "Myths, legends, and oral storytelling traditions.",
      },

      {
        id: "Artifacts",
        group: "artifact",
        size: 22,
        description:
          "Objects and creations representing cultural identity.",
      },

      {
        id: "Ainu Stories",
        group: "story",
        size: 12,
        description:
          "Traditional stories from the indigenous Ainu people.",
      },

      {
        id: "Harvest Festival",
        group: "festival",
        size: 12,
        description:
          "Seasonal celebrations preserving agricultural heritage.",
      },

      {
        id: "Traditional Weaving",
        group: "craft",
        size: 12,
        description:
          "Ancient weaving techniques at risk of disappearing.",
      },

      {
        id: "Oral Histories",
        group: "story",
        size: 12,
        description:
          "Spoken memories and intergenerational knowledge.",
      },

      {
        id: "Sacred Songs",
        group: "music",
        size: 12,
        description:
          "Traditional songs preserving spiritual heritage.",
      },

      {
        id: "Temple Architecture",
        group: "artifact",
        size: 12,
        description:
          "Architectural knowledge embedded in heritage sites.",
      },

      {
        id: "Indigenous Knowledge",
        group: "tradition",
        size: 12,
        description:
          "Traditional ecological and community knowledge.",
      },
    ],

    links: [
      {
        source: "Human Memory",
        target: "Languages",
      },

      {
        source: "Human Memory",
        target: "Traditions",
      },

      {
        source: "Human Memory",
        target: "Folklore",
      },

      {
        source: "Human Memory",
        target: "Artifacts",
      },

      {
        source: "Languages",
        target: "Oral Histories",
      },

      {
        source: "Folklore",
        target: "Ainu Stories",
      },

      {
        source: "Folklore",
        target: "Sacred Songs",
      },

      {
        source: "Traditions",
        target: "Harvest Festival",
      },

      {
        source: "Traditions",
        target: "Indigenous Knowledge",
      },

      {
        source: "Artifacts",
        target: "Traditional Weaving",
      },

      {
        source: "Artifacts",
        target: "Temple Architecture",
      },

      {
        source: "Traditional Weaving",
        target: "Harvest Festival",
      },
    ],
  });

  return (
    <div className="relative h-screen w-full rounded-3xl overflow-hidden">
      <ForceGraph3D
        graphData={graph}
        backgroundColor="#020817"
        nodeLabel={(node: any) => `
${node.id}
${node.description ?? ""}
`}
        nodeColor={(node: any) =>
          COLORS[
            node.group as keyof typeof COLORS
          ] || "#ffffff"
        }
        nodeVal={(node: any) =>
          node.size || 10
        }
        linkWidth={1.5}
        linkOpacity={0.3}
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={0.002}
        cooldownTicks={100}
        d3VelocityDecay={0.25}
        enableNodeDrag={true}
        showNavInfo={false}
        onNodeClick={(node: any) =>
          setSelected(node)
        }
      />

      {selected && (
        <div
          className="
            absolute
            bottom-6
            left-6
            max-w-md
            rounded-3xl
            border
            border-white/10
            bg-black/70
            backdrop-blur-xl
            p-6
            text-white
          "
        >
          <h3 className="text-2xl font-bold">
            {selected.id}
          </h3>

          <p className="mt-3 text-white/70">
            {selected.description}
          </p>

          <button
            onClick={() =>
              setSelected(null)
            }
            className="
              mt-4
              px-4
              py-2
              rounded-xl
              bg-white/10
              hover:bg-white/20
            "
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
