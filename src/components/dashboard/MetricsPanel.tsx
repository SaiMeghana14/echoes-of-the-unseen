export default function MetricsPanel() {
  const metrics = [
    {
      label: "Artifacts Preserved",
      value: 250,
    },

    {
      label: "Communities Tracked",
      value: 73,
    },

    {
      label: "Critical Risks",
      value: 18,
    },

    {
      label: "Oracle Predictions",
      value: 42,
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">

      {metrics.map((item) => (
        <div
          key={item.label}
          className="
          glass
          rounded-3xl
          p-6
        "
        >
          <div className="text-5xl font-bold">
            {item.value}
          </div>

          <div className="text-gray-400 mt-2">
            {item.label}
          </div>

        </div>
      ))}

    </div>
  );
}
