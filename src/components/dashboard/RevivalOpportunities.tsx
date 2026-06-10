"use client";

const opportunities = [
  {
    title:
      "Community Storytelling Programs",
    impact: "High",
  },

  {
    title:
      "Digital Archive Initiative",
    impact: "Very High",
  },

  {
    title:
      "School Curriculum Integration",
    impact: "High",
  },

  {
    title:
      "AI Translation Preservation",
    impact: "Critical",
  },
];

export default function RevivalOpportunities() {
  return (
    <div
      className="
      glass
      rounded-3xl
      p-8
    "
    >
      <h2 className="text-3xl font-bold mb-6">
        🌱 Revival Opportunities
      </h2>

      <div className="space-y-4">

        {opportunities.map(
          (item) => (
            <div
              key={item.title}
              className="
              p-5
              rounded-2xl
              bg-green-500/5
              border
              border-green-500/20
            "
            >
              <div className="font-semibold">
                {item.title}
              </div>

              <div className="text-green-400 text-sm mt-2">
                Impact:
                {" "}
                {item.impact}
              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}
