interface CulturalSignificanceProps {
  culturalSignificance?: string;
}

export default function CulturalSignificance({
  culturalSignificance,
}: CulturalSignificanceProps) {
  return (
    <section className="glass rounded-3xl p-8">

      <div className="flex items-center gap-3 mb-8">

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-amber-500/20
            flex
            items-center
            justify-center
            text-2xl
          "
        >
          🌍
        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Cultural Significance
          </h2>

          <p className="text-gray-400">
            Why this heritage matters to humanity.
          </p>

        </div>

      </div>

      <div
        className="
          rounded-2xl
          bg-white/5
          border
          border-white/10
          p-6
        "
      >
        {culturalSignificance ? (
          <p className="text-gray-300 leading-8 whitespace-pre-line">
            {culturalSignificance}
          </p>
        ) : (
          <p className="text-gray-500">
            No cultural significance information available.
          </p>
        )}
      </div>

    </section>
  );
}
