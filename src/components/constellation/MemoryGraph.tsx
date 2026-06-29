"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import dynamic from "next/dynamic";

const ForceGraph3D = dynamic(
  () => import("react-force-graph-3d"),
  {
    ssr: false,
  }
);

const COLORS = {
  core: "#fbbf24",
  region: "#38bdf8",
  category: "#8b5cf6",
  language: "#60a5fa",
  tradition: "#34d399",
  folklore: "#c084fc",
  artifact: "#f97316",
  story: "#93c5fd",
  craft: "#fdba74",
  festival: "#6ee7b7",
  music: "#f9a8d4",
};

interface GraphNode {
  id: string;
  label?: string;
  group: string;
  size: number;
  description?: string;
  region?: string;
  story?: string;
}

interface GraphLink {
  source: string;
  target: string;
}

interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

export default function MemoryGraph() {
  const fgRef = useRef<any>(null);

  const [selected, setSelected] =
    useState<GraphNode | null>(null);

  const [graph, setGraph] =
    useState<GraphData>({
      nodes: [],
      links: [],
    });
  
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
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
      } catch (err) {
        console.error(err);
      }
    }

    load();
  }, []);

  useEffect(() => {
    if (!graph.nodes.length) return;

    const timer = setTimeout(() => {
      fgRef.current?.zoomToFit(1200);
    }, 700);

    return () =>
      clearTimeout(timer);
  }, [graph]);

  function buildGraph(
    memories: any[]
  )  {
    const nodes: GraphNode[] = [];
    const links: GraphLink[] = [];

    const nodeIds = new Set<string>();

    function addNode(node: GraphNode) {
      if (!nodeIds.has(node.id)) {
        nodeIds.add(node.id);
        nodes.push(node);
      }
    }

    addNode({
      id: "Human Memory",
      group: "core",
      size: 80,
      description:
        "Collective cultural memory",
    });

    memories.forEach((memory) => {
      const region =
        memory.region ||
        "Unknown Region";

      const category =
        (
          memory.category ??
          "Uncategorized"
        ).toLowerCase();

      const categoryNode =
        `${region}-${category}`;

      addNode({
        id: region,
        group: "region",
        size: 45,
        description:
          `${region} heritage`,
      });

      addNode({
        id: categoryNode,
        label: category,
        group: "category",
        size: 35,
        description:
          `${category} memories`,
      });

      addNode({
        id: memory.title,
        group:
          COLORS[
            category as keyof typeof COLORS
          ]
            ? category
            : "category",

        size: 22,

        description:
          memory.description,

        region,

        story:
          memory.story,
      });

      links.push({
        source:
          "Human Memory",
        target:
          region,
      });

      links.push({
        source:
          region,
        target:
          categoryNode,
      });

      links.push({
        source:
          categoryNode,
        target:
          memory.title,
      });
    });

    setGraph({
      nodes,
      links,
    });
  }

  return (
    <div className="relative h-[700px] w-full rounded-3xl overflow-hidden border border-white/10 bg-black/20">

      <ForceGraph3D
        ref={fgRef}

        graphData={graph}

        backgroundColor="#020817"

        warmupTicks={200}

        cooldownTicks={0}

        d3AlphaDecay={0.015}

        d3VelocityDecay={0.2}

        nodeRelSize={6}

        nodeVal={(node) =>
          (node as GraphNode).size || 15
        }

        nodeColor={(node) =>
          COLORS[
            (node as GraphNode)
              .group as keyof typeof COLORS
          ] ?? "#ffffff"
        }

        nodeLabel={(node) => {
          const n = node as GraphNode;
        
          return `
        ${n.label || n.id}
        
        ${n.description || ""}
        `;
        }}
        linkWidth={2}

        linkOpacity={0.35}

        linkDirectionalParticles={2}

        linkDirectionalParticleSpeed={
          0.002
        }

        enableNodeDrag

        showNavInfo={false}

        onNodeClick={(node) =>
          setSelected(node as GraphNode)
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
            {selected.label ||
              selected.id}
          </h3>

          <p className="mt-3 text-white/70">
            {selected.description}
          </p>

          {selected.region && (
            <p className="mt-3 text-sm text-white/50">
              🌍 {selected.region}
            </p>
          )}

          {selected.story && (
            <div className="mt-4 border-t border-white/10 pt-4">
              <h4 className="font-semibold">
                Story
              </h4>

              <p className="mt-2 text-sm text-white/70">
                {selected.story}
              </p>
            </div>
          )}

          <button
            onClick={() =>
              setSelected(null)
            }
            className="mt-5 rounded-xl bg-white/10 px-4 py-2 hover:bg-white/20"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
