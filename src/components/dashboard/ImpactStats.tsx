"use client";

export default function ImpactStats() {
  const stats = [
    {
      value: "150+",
      label: "Artifacts",
    },
    {
      value: "38",
      label: "Languages",
    },
    {
      value: "22",
      label: "Traditions",
    },
    {
      value: "9",
      label: "Countries",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-4
        gap-8
      "
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
            rounded-3xl
            p-8
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            text-center
          "
          >
            <div className="text-5xl font-black">
              {stat.value}
            </div>

            <div className="mt-3 text-white/60">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
