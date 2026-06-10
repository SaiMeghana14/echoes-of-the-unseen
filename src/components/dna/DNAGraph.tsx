"use client";

import dynamic from "next/dynamic";

const ForceGraph3D = dynamic(
  () => import("react-force-graph-3d"),
  {
    ssr: false,
  }
);

interface DNAGraphProps {
  cultureName: string;

  stories: string[];

  beliefs: string[];

  rituals: string[];

  knowledge: string[];
}

export default function DNAGraph({
  cultureName,
  stories,
  beliefs,
  rituals,
  knowledge,
}: DNAGraphProps) {
  const nodes: any[] = [
    {
      id: cultureName,
      group: "culture",
    },
  ];

  const links: any[] = [];

  const addGroup = (
    items: string[],
    group: string
  ) => {
    items.forEach((item) => {
      nodes.push({
        id: item,
        group,
      });

      links.push({
        source: cultureName,
        target: item,
      });
    });
  };

  addGroup(stories, "story");
  addGroup(beliefs, "belief");
  addGroup(rituals, "ritual");
  addGroup(
    knowledge,
    "knowledge"
  );

  const graphData = {
    nodes,
    links,
  };

  return (
    <div
      className="
      h-[650px]
      rounded-3xl
      overflow-hidden
      border
      border-white/10
      "
    >
      <ForceGraph3D
        graphData={graphData}
        nodeLabel="id"
        nodeAutoColorBy="group"
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={
          0.003
        }
        backgroundColor="#060B17"
      />
    </div>
  );
}
