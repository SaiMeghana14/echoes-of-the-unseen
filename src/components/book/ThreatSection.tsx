interface Threat {
  title: string;
  severity: "High" | "Medium" | "Low";
  description: string;
}

interface ThreatSectionProps {
  threats?: Threat[];
}

export default function ThreatSection({
  threats = [],
}: ThreatSectionProps) {
  return (
    <section className="glass rounded-3xl p-8">

      <div className="flex items-center gap-4 mb-8">

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-red-500/20
            flex
            items-center
            justify-center
            text-2xl
          "
        >
          ⚠️
        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Current Threats
          </h2>

          <p className="text-gray-400">
            Challenges currently affecting this cultural heritage.
          </p>

        </div>

      </div>

      {threats.length === 0 ? (
        <p className="text-gray-500">
          No threats identified.
        </p>
      ) : (
        <div className="space-y-5">

          {threats.map((threat, index) => {

            const severity =
              threat.severity.toLowerCase();

            const badgeColor =
              severity === "high"
                ? "bg-red-500/20 text-red-300"
                : severity === "medium"
                ? "bg-yellow-500/20 text-yellow-300"
                : "bg-green-500/20 text-green-300";

            return (

              <div
                key={`${threat.title}-${index}`}
                className="
                  rounded-2xl
                  border
                  border-red-500/20
                  bg-red-500/5
                  p-6
                  transition-all
                  hover:bg-red-500/10
                "
              >

                <div className="flex gap-5">

                  <div className="text-2xl shrink-0">
                    ⚠️
                  </div>

                  <div className="flex-1">

                    <div className="flex items-center justify-between gap-4 flex-wrap mb-4">

                      <h3 className="text-xl font-semibold text-white">
                        {threat.title}
                      </h3>

                      <span
                        className={`
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-semibold
                          ${badgeColor}
                        `}
                      >
                        {threat.severity}
                      </span>

                    </div>

                    <p className="text-gray-300 leading-8">
                      {threat.description}
                    </p>

                  </div>

                </div>

              </div>

            );
          })}

        </div>
      )}

    </section>
  );
}
