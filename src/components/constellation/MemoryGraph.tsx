"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
  ssr: false,
});

const COLORS: Record<string, string> = {
  core: "#FFD54A",
  region: "#38BDF8",
  language: "#3B82F6",
  tradition: "#10B981",
  folklore: "#C084FC",
  artifact: "#FF8C42",
  story: "#93C5FD",
  craft: "#FBBF24",
  festival: "#4ADE80",
  music: "#FF77C8",
  default: "#A855F7",
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

interface Props {
  searchTerm?: string;
  selectedCategory?: string;
}

export default function MemoryGraph({
  searchTerm = "",
  selectedCategory = "All",
}: Props) {
  const fgRef = useRef<any>(null);

  const [graph, setGraph] = useState<GraphData>({
    nodes: [],
    links: [],
  });

  const [selected, setSelected] = useState<GraphNode | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/memory-atlas");
      const memories = await res.json();

      const filtered = memories.filter((m: any) => {
        const q = searchTerm.toLowerCase();

        const okSearch =
          m.title?.toLowerCase().includes(q) ||
          m.region?.toLowerCase().includes(q) ||
          m.category?.toLowerCase().includes(q);

        const okCategory =
          selectedCategory === "All" ||
          m.category?.toLowerCase() === selectedCategory;

        return okSearch && okCategory;
      });

      const nodes: GraphNode[] = [];
      const links: GraphLink[] = [];
      const ids = new Set<string>();

      function add(node: GraphNode) {
        if (!ids.has(node.id)) {
          ids.add(node.id);
          nodes.push(node);
        }
      }

      add({
        id: "Human Memory",
        group: "core",
        size: 8,
        description: "Collective cultural memory",
      });

      filtered.forEach((m: any) => {
        const region = m.region || "Unknown";
        const memoryId = m.id || m.title;

        add({
          id: memoryId,
          label: m.title,
          group: m.category?.toLowerCase() || "default",
          size: 1.2,
          description: m.description,
          region,
          story: m.story,
        });

        links.push({
          source: "Human Memory",
          target: memoryId,
        });
      });

      setGraph({ nodes, links });
    }

    load();
  }, [searchTerm, selectedCategory]);

  useEffect(() => {
    if (!graph.nodes.length) return;

    const t = setTimeout(() => {
      fgRef.current?.zoomToFit(1200, 80);
      fgRef.current?.cameraPosition(
        { x: 0, y: 0, z: 50 },
        undefined,
        1200
      );

      const charge = fgRef.current?.d3Force("charge");
      charge?.strength(-70);

      const link = fgRef.current?.d3Force("link");
      link?.distance(25);
    }, 500);

    return () => clearTimeout(t);
  }, [graph]);

  return (
    <div className="relative h-[700px] overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-b from-[#020817] to-[#081326]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at center, rgba(56,189,248,0.12), transparent 55%),
            radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "100% 100%, 80px 80px",
          opacity: 0.22,
        }}
      />

      <ForceGraph3D
        ref={fgRef}
        graphData={graph}
        backgroundColor="#020817"
        nodeRelSize={1.4}
        nodeOpacity={0.95}
        linkWidth={0.22}
        linkOpacity={0.18}
        linkColor={(link: any) => {
          const source =
            typeof link.source === "object"
              ? link.source.id
              : link.source;
        
          const target =
            typeof link.target === "object"
              ? link.target.id
              : link.target;
        
          if (
            hovered &&
            (source === hovered || target === hovered)
          ) {
            return "rgba(56,189,248,0.9)";
          }
        
          return "rgba(148,163,184,0.18)";
        }}
        linkDirectionalParticles={0}
        d3AlphaDecay={0.04}
        d3VelocityDecay={0.55}
        cooldownTicks={500}
        showNavInfo={false}
        nodeColor={(node: any) => {
          return COLORS[node.group] || COLORS.default;
        }}
        
        nodeVal={(node:any)=>
          hovered===node.id
            ? node.size*1.35
            : node.size
        }
        onNodeHover={(n:any)=>setHovered(n?n.id:null)}
        onNodeClick={(n:any)=>setSelected(n)}
      />

      {selected && (
        <div className="absolute top-6 right-6 w-80 rounded-3xl border border-cyan-400/20 bg-black/70 backdrop-blur-xl p-6 text-white">
          <h2 className="text-2xl font-bold">
            {selected.label || selected.id}
          </h2>

          <p className="mt-3 text-white/70">
            {selected.description}
          </p>

          {selected.region && (
            <p className="mt-3 text-cyan-300">
              🌍 {selected.region}
            </p>
          )}

          {selected.story && (
            <>
              <h3 className="mt-5 font-semibold text-cyan-300">
                Story
              </h3>

              <p className="mt-2 max-h-48 overflow-y-auto text-sm text-white/70">
                {selected.story}
              </p>
            </>
          )}

          <button
            onClick={() => setSelected(null)}
            className="mt-5 rounded-xl bg-cyan-500/20 px-4 py-2"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
