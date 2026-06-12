"use client";

const stats = [
  { value: "150+", label: "Artifacts" },
  { value: "38", label: "Languages" },
  { value: "22", label: "Traditions" },
  { value: "9", label: "Countries" },
];

export default function ImpactStats() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
            rounded-3xl
            p-8
            text-center
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            hover:border-cyan-400/30
            transition
            "
          >
            <div className="text-6xl font-black text-cyan-400">
              {stat.value}
            </div>

            <div className="mt-3 text-white/70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
