import DNACluster from "./DNACluster";
import DNALegend from "./DNALegend";

interface CulturalDNAProps {
  cultureName?: string;
}

export default function CulturalDNA({
  cultureName = "Ainu Culture",
}: CulturalDNAProps) {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <h2 className="text-6xl font-bold">
            🧬 Cultural DNA
          </h2>

          <p className="text-gray-400 mt-4">
            The genetic blueprint of a culture.
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
            text-2xl
            font-bold
          "
          >
            {cultureName}
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <DNACluster
            title="📖 Stories"
            type="story"
            items={[
              "Creation Myth",
              "Ancestral Legends",
              "Seasonal Tales",
            ]}
          />

          <DNACluster
            title="🙏 Beliefs"
            type="belief"
            items={[
              "Nature Spirits",
              "Community Harmony",
              "Respect for Ancestors",
            ]}
          />

          <DNACluster
            title="🎭 Rituals"
            type="ritual"
            items={[
              "Harvest Ceremony",
              "Coming of Age",
              "Winter Festival",
            ]}
          />

          <DNACluster
            title="📚 Knowledge"
            type="knowledge"
            items={[
              "Traditional Medicine",
              "Navigation",
              "Oral History",
            ]}
          />

        </div>

        <DNALegend />

      </div>

    </section>
  );
}
