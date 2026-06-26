"use client";

import { useEffect,useState } from "react";
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

  const [graph, setGraph] = useState<{
    nodes: any[];
    links: any[];
  }>({
    nodes: [],
    links: [],
  });
  
  useEffect(() => {
    async function load() {
  
      try {
        const res =
          await fetch(
            "/api/memory-atlas"
          );
      
        if (!res.ok) {
          throw new Error(
            "Failed to load memories"
          );
        }
      
        const memories =
          await res.json();
      
        buildGraph(memories);
      
      } catch (error) {
        console.error(
          "Memory Atlas Error:",
          error
        );
      }
    }
  
    load();
  
  }, []);
  
  function buildGraph(
    memories: any[]
  ) {
    const nodes: any[] = [
      {
        id: "Human Memory",
        group: "core",
        size: 40,
        description:
          "Collective cultural memory",
      },
    ];
  
    const links: any[] = [];
  
    const categorySet =
      new Set<string>();
  
    memories.forEach(
      (memory) => {
  
        const category =
          memory.category ||
          "Uncategorized";
  
        categorySet.add(
          category
        );
  
        nodes.push({
          id: memory.title,
          group: category,
          size: 12,
          region:
            memory.region,
          description:
            memory.description,
        });
      }
    );
  
    categorySet.forEach(
      (category) => {
  
        nodes.push({
          id: category,
          group: "category",
          size: 22,
          description:
            `${category} memories`,
        });
  
        links.push({
          source:
            "Human Memory",
          target:
            category,
        });
      }
    );
  
    memories.forEach(
      (memory) => {
  
        links.push({
          source:
            memory.category ||
            "Uncategorized",
  
          target:
            memory.title,
        });
      }
    );
  
    setGraph({
      nodes,
      links,
    });
  }

  return (
    <div className="relative h-[700px] w-full rounded-3xl overflow-hidden border border-white/10 bg-black/20">
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
          
          {selected.region && (
            <p className="mt-2 text-sm text-white/50">
              🌍 {selected.region}
            </p>
          )}
          
          {selected.group && (
            <p className="mt-1 text-sm text-white/50">
              🏺 {selected.group}
            </p>
          )}

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
