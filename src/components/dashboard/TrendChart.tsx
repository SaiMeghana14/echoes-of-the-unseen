export default function TrendChart() {
  const trends = [
    91,
    88,
    85,
    82,
    79,
    75,
    70,
  ];

  return (
    <div
      className="
      glass
      rounded-3xl
      p-8
    "
    >
      <h2 className="text-3xl font-bold mb-6">
        📈 Extinction Trend
      </h2>

      <div className="flex items-end gap-3 h-56">

        {trends.map(
          (value, index) => (
            <div
              key={index}
              className="
              flex-1
              bg-nebula
              rounded-t-xl
              transition-all
            "
              style={{
                height: `${value}%`,
              }}
            />
          )
        )}

      </div>

      <div className="mt-4 text-gray-400">
        Risk progression over time
      </div>

    </div>
  );
}
