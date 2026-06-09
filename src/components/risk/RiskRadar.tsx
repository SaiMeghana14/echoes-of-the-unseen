"use client";

interface RiskRadarProps {
  extinctionRisk: number;
  futureRelevance: number;
  preservationScore: number;
  culturalValue: number;
}

export default function RiskRadar({
  extinctionRisk,
  futureRelevance,
  preservationScore,
  culturalValue,
}: RiskRadarProps) {
  return (
    <div
      className="
      grid
      grid-cols-2
      gap-6
      mt-8
    "
    >
      <MetricCard
        label="Extinction Risk"
        value={extinctionRisk}
      />

      <MetricCard
        label="Future Relevance"
        value={futureRelevance}
      />

      <MetricCard
        label="Preservation Score"
        value={preservationScore}
      />

      <MetricCard
        label="Cultural Value"
        value={culturalValue}
      />
    </div>
  );
}

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div
      className="
      p-6
      rounded-3xl
      border
      border-white/10
      bg-white/5
    "
    >
      <h3>{label}</h3>

      <div className="text-4xl font-bold mt-3">
        {value}%
      </div>
    </div>
  );
}
