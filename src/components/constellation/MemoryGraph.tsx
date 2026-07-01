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
  core: "#FFD54A",
  region: "#38BDF8",
  category: "#A855F7",
  language: "#3B82F6",
  tradition: "#10B981",
  folklore: "#C084FC",
  artifact: "#FF8C42",
  story: "#93C5FD",
  craft: "#FBBF24",
  festival: "#4ADE80",
  music: "#FF77C8",
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

interface MemoryGraphProps {
  searchTerm?: string;
  selectedCategory?: string;
}

export default function MemoryGraph({
  searchTerm = "",
  selectedCategory = "All",
}: MemoryGraphProps) {

  const fgRef = useRef<any>(null);

  const [selected, setSelected] =
    useState<GraphNode | null>(null);

  const [hovered, setHovered] =
    useState<string | null>(null);

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

        const filtered =
          memories.filter(
            (memory: any) => {

              const matchesSearch =
                memory.title
                  ?.toLowerCase()
                  .includes(
                    searchTerm.toLowerCase()
                  ) ||

                memory.region
                  ?.toLowerCase()
                  .includes(
                    searchTerm.toLowerCase()
                  ) ||

                memory.category
                  ?.toLowerCase()
                  .includes(
                    searchTerm.toLowerCase()
                  );

              const matchesCategory =
                selectedCategory === "All" ||

                memory.category
                  ?.toLowerCase() ===
                  selectedCategory;

              return (
                matchesSearch &&
                matchesCategory
              );
            }
          );

        buildGraph(filtered);

      } catch (err) {
        console.error("MemoryGraph:", err);
      }
    }

    load();

  }, [
    searchTerm,
    selectedCategory,
  ]);

  useEffect(() => {

    if (!graph.nodes.length) return;

    const timer = setTimeout(() => {

      fgRef.current?.zoomToFit(1200);

      const linkForce =
        fgRef.current?.d3Force("link") as any;
      
      if (linkForce) {
        linkForce.distance(45);
      }
      
      const chargeForce =
        fgRef.current?.d3Force("charge") as any;
      
      if (chargeForce) {
        chargeForce.strength(-80);
      }

    }, 700);

    return () =>
      clearTimeout(timer);

  }, [graph]);

  function buildGraph(
    memories: any[]
  ) {

    const nodes: GraphNode[] = [];
    const links: GraphLink[] = [];

    const nodeIds =
      new Set<string>();

    function addNode(
      node: GraphNode
    ) {

      if (
        !nodeIds.has(node.id)
      ) {
        nodeIds.add(node.id);
        nodes.push(node);
      }

    }

    addNode({
      id: "Human Memory",
      group: "core",
      size: 50,
      description:
        "Collective cultural memory",
    });

    memories.forEach(
      (memory) => {

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
          size: 28,
          description:
            `${region} heritage`,
        });

        addNode({
          id: memory.id,
          label: memory.title,

          group:
            COLORS[
              category as keyof typeof COLORS
            ]
              ? category
              : "category",

          size: 10,
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
          source: region,
          target: memory.title,
      });
      }
    );

    setGraph({
      nodes,
      links,
    });
  }
  
  return (
    <div className="relative h-[700px] w-full rounded-3xl overflow-hidden border border-cyan-500/20 bg-gradient-to-b from-[#020817] to-[#081326]">

      <ForceGraph3D
        ref={fgRef}
        graphData={graph}
        backgroundColor="#020817"

        warmupTicks={200}
        cooldownTicks={0}
        d3AlphaDecay={0.02}
        d3VelocityDecay={0.35}
        nodeRelSize={6}
        nodeOpacity={0.95}

        nodeVal={(node) => {
          const n = node as GraphNode;

          return hovered === n.id
            ? n.size * 1.7
            : n.size;
        }}

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

        linkWidth={0.4}
        linkOpacity={0.08}
        linkColor={() => "#334155"}
        linkDirectionalParticles={0}
        linkDirectionalParticleSpeed={
          0.002
        }

        showNavInfo={false}

        onNodeHover={(node) =>
          setHovered(
            node
              ? (node as GraphNode).id
              : null
          )
        }

        onNodeClick={(node) =>
          setSelected(
            node as GraphNode
          )
        }
      />

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_70%)]" />

      {/* Selected Memory */}

      {selected && (
        <div
          className="
          absolute
          top-6
          right-6
          max-w-md
          rounded-3xl
          border
          border-cyan-400/20
          bg-black/75
          backdrop-blur-xl
          p-6
          text-white
          shadow-2xl
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
            <p className="mt-3 text-sm text-cyan-300">
              🌍 {selected.region}
            </p>
          )}

          {selected.story && (
            <div className="mt-4 border-t border-white/10 pt-4">
              <h4 className="font-semibold text-cyan-300">
                Story
              </h4>

              <p className="mt-2 text-sm text-white/70 leading-relaxed max-h-48 overflow-y-auto">
                {selected.story}
              </p>
            </div>
          )}

          <button
            onClick={() =>
              setSelected(null)
            }
            className="
              mt-5
              rounded-xl
              bg-cyan-500/20
              px-4
              py-2
              text-cyan-200
              hover:bg-cyan-500/30
              transition
            "
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
