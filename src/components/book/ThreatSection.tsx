interface ThreatSectionProps {
  threats?: string[];
}

export default function ThreatSection({
  threats = [],
}: ThreatSectionProps) {
  return (
    <section className="glass rounded-3xl p-8">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center text-2xl">
          ⚠️
        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Current Threats
          </h2>

          <p className="text-gray-400">
            Challenges affecting this heritage.
          </p>

        </div>

      </div>

      {threats.length === 0 ? (
        <p className="text-gray-500">
          No threats identified.
        </p>
      ) : (
        <div className="space-y-4">

          {threats.map((threat, index) => (

            <div
              key={index}
              className="flex gap-4 rounded-2xl bg-red-500/10 border border-red-500/20 p-5"
            >
              <div className="text-red-400 text-xl">
                ⚠
              </div>

              <p className="text-gray-300 leading-7">
                {threat}
              </p>

            </div>

          ))}

        </div>
      )}

    </section>
  );
}
