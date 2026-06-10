"use client";

import DNACluster from "./DNACluster";
import DNALegend from "./DNALegend";

interface Props {
  cultureName: string;

  stories: string[];

  beliefs: string[];

  rituals: string[];

  knowledge: string[];
}

export default function CulturalDNA({
  cultureName,
  stories,
  beliefs,
  rituals,
  knowledge,
}: Props) {
  const totalNodes =
    stories.length +
    beliefs.length +
    rituals.length +
    knowledge.length;

  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-6xl font-bold">
            🧬 Cultural DNA
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Explore the cultural genome of a
            community. Stories, beliefs,
            rituals, and knowledge are mapped
            into a living preservation network.
          </p>

        </div>

        <div className="flex justify-center mb-12">

          <div
            className="
            px-10
            py-5
            rounded-full
            bg-memory
            text-black
            font-bold
            text-2xl
            shadow-xl
          "
          >
            {cultureName}
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <DNACluster
            title="📖 Stories"
            type="story"
            items={stories}
          />

          <DNACluster
            title="🙏 Beliefs"
            type="belief"
            items={beliefs}
          />

          <DNACluster
            title="🎭 Rituals"
            type="ritual"
            items={rituals}
          />

          <DNACluster
            title="📚 Knowledge"
            type="knowledge"
            items={knowledge}
          />

        </div>

        <div
          className="
          mt-10
          grid
          md:grid-cols-4
          gap-6
        "
        >

          <div className="glass p-6 rounded-3xl">
            <div className="text-4xl font-bold">
              {stories.length}
            </div>

            <div className="mt-2 text-gray-400">
              Stories
            </div>
          </div>

          <div className="glass p-6 rounded-3xl">
            <div className="text-4xl font-bold">
              {beliefs.length}
            </div>

            <div className="mt-2 text-gray-400">
              Beliefs
            </div>
          </div>

          <div className="glass p-6 rounded-3xl">
            <div className="text-4xl font-bold">
              {rituals.length}
            </div>

            <div className="mt-2 text-gray-400">
              Rituals
            </div>
          </div>

          <div className="glass p-6 rounded-3xl">
            <div className="text-4xl font-bold">
              {totalNodes}
            </div>

            <div className="mt-2 text-gray-400">
              DNA Nodes
            </div>
          </div>

        </div>

        <DNALegend />

      </div>

    </section>
  );
}
