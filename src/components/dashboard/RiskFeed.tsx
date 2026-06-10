const risks = [
  {
    title: "Ainu Language",
    risk: 91,
  },

  {
    title: "Fishing Songs",
    risk: 88,
  },

  {
    title: "Toda Embroidery",
    risk: 82,
  },

  {
    title: "Rice Farming Knowledge",
    risk: 80,
  },
];

export default function RiskFeed() {
  return (
    <div className="glass rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        🚨 Critical Heritage Risks
      </h2>

      <div className="space-y-4">

        {risks.map((risk) => (
          <div
            key={risk.title}
            className="
            p-4
            rounded-2xl
            border
            border-red-500/20
            bg-red-500/5
          "
          >
            <div className="flex justify-between">

              <span>
                {risk.title}
              </span>

              <span className="text-red-400 font-bold">
                {risk.risk}%
              </span>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
