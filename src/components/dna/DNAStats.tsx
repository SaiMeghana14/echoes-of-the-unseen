interface DNAStatsProps {
  stories: string[];

  beliefs: string[];

  rituals: string[];

  knowledge: string[];
}

export default function DNAStats({
  stories,
  beliefs,
  rituals,
  knowledge,
}: DNAStatsProps) {
  const total =
    stories.length +
    beliefs.length +
    rituals.length +
    knowledge.length;

  const stats = [
    {
      label: "Stories",
      value: stories.length,
    },

    {
      label: "Beliefs",
      value: beliefs.length,
    },

    {
      label: "Rituals",
      value: rituals.length,
    },

    {
      label: "Knowledge",
      value: knowledge.length,
    },

    {
      label: "DNA Nodes",
      value: total,
    },
  ];

  return (
    <div className="grid md:grid-cols-5 gap-6">

      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
          glass
          rounded-3xl
          p-6
          text-center
        "
        >
          <div className="text-4xl font-bold">
            {stat.value}
          </div>

          <div className="text-gray-400 mt-2">
            {stat.label}
          </div>
        </div>
      ))}

    </div>
  );
}
