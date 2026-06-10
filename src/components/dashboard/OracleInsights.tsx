"use client";

const insights = [
  {
    title:
      "Oral Agricultural Knowledge",
    summary:
      "Rapid decline detected across rural APAC communities.",
  },

  {
    title:
      "Community Fishing Traditions",
    summary:
      "High extinction probability within two generations.",
  },

  {
    title:
      "Traditional Textile Knowledge",
    summary:
      "Strong preservation opportunity through digitization.",
  },
];

export default function OracleInsights() {
  return (
    <div
      className="
      glass
      rounded-3xl
      p-8
    "
    >
      <h2 className="text-3xl font-bold mb-6">
        🔮 Oracle Insights
      </h2>

      <div className="space-y-5">

        {insights.map(
          (item) => (
            <div
              key={item.title}
              className="
              p-5
              rounded-2xl
              bg-nebula/5
              border
              border-nebula/20
            "
            >
              <div className="font-semibold">
                {item.title}
              </div>

              <div className="text-gray-400 mt-2">
                {item.summary}
              </div>

            </div>
          )
        )}

      </div>

    </div>
  );
}
