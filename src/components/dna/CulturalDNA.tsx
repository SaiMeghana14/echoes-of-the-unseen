"use client";

import { useEffect, useState } from "react";

import DNACluster from "./DNACluster";
import DNALegend from "./DNALegend";

import DNAGraph from "./DNAGraph";
import DNAStats from "./DNAStats";
import DNAExplorer from "./DNAExplorer";

export default function CulturalDNA() {
  const [dna, setDna] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetch("/api/dna")
      .then((r) => r.json())
      .then((data) => {
        setDna(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-24">
        <h3 className="text-2xl font-bold">
          Interactive Heritage Network
        </h3>
      
        <p className="text-white/60 mt-3">
          Demo Visualization
        </p>
      </div>
    );
  }

  if (!dna) {
    return null;
  }

  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center mb-16">

          <h2 className="text-6xl font-bold">
            🧬 Cultural DNA
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Explore the cultural genome
            of a community through
            stories, rituals, beliefs,
            and inherited knowledge.
          </p>

        </div>

        {/* Culture Core */}

        <div className="flex justify-center mb-16">

          <div
            className="
            px-10
            py-5
            rounded-full
            bg-memory
            text-black
            text-2xl
            font-bold
          "
          >
            {dna.culture}
          </div>

        </div>

        {/* Stats */}

        <DNAStats
          stories={dna.stories}
          beliefs={dna.beliefs}
          rituals={dna.rituals}
          knowledge={dna.knowledge}
        />

        {/* Graph */}

        <div className="mt-12">

          <DNAGraph
            cultureName={
              dna.culture
            }
            stories={
              dna.stories
            }
            beliefs={
              dna.beliefs
            }
            rituals={
              dna.rituals
            }
            knowledge={
              dna.knowledge
            }
          />

        </div>

        {/* Explorer */}

        <div className="mt-12">

          <DNAExplorer
            stories={
              dna.stories
            }
            beliefs={
              dna.beliefs
            }
            rituals={
              dna.rituals
            }
            knowledge={
              dna.knowledge
            }
          />

        </div>

        {/* Original Clusters */}

        <div className="grid lg:grid-cols-2 gap-8 mt-12">

          <DNACluster
            title="📖 Stories"
            type="story"
            items={dna.stories}
          />

          <DNACluster
            title="🙏 Beliefs"
            type="belief"
            items={dna.beliefs}
          />

          <DNACluster
            title="🎭 Rituals"
            type="ritual"
            items={dna.rituals}
          />

          <DNACluster
            title="📚 Knowledge"
            type="knowledge"
            items={dna.knowledge}
          />

        </div>

        <DNALegend />

      </div>

    </section>
  );
}
