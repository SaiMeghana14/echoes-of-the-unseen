interface AIInsight {
  title: string;
  value: string;
  description: string;
}

interface AIInsightsProps {
  aiInsights?: AIInsight[];
}

export default function AIInsights({
  aiInsights = [],
}: AIInsightsProps) {
  return (
    <section className="glass rounded-3xl p-8">

      <div className="flex items-center gap-4 mb-8">

        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-cyan-500/20
            flex
            items-center
            justify-center
            text-2xl
          "
        >
          🤖
        </div>

        <div>

          <h2 className="text-3xl font-bold">
            AI Insights
          </h2>

          <p className="text-gray-400">
            AI-generated observations and preservation intelligence.
          </p>

        </div>

      </div>

      {aiInsights.length === 0 ? (
        <p className="text-gray-500">
          No AI insights generated.
        </p>
      ) : (
        <div className="grid gap-5">

          {aiInsights.map((insight, index) => (

            <div
              key={`${insight.title}-${index}`}
              className="
                rounded-2xl
                border
                border-cyan-500/20
                bg-cyan-500/5
                p-6
                transition-all
                hover:bg-cyan-500/10
              "
            >

              <div className="flex items-start justify-between gap-4 mb-4">

                <div>

                  <h3 className="text-xl font-semibold text-white">
                    {insight.title}
                  </h3>

                  <p className="text-sm text-cyan-300 mt-1">
                    AI Observation
                  </p>

                </div>

                <div
                  className="
                    px-4
                    py-2
                    rounded-xl
                    bg-cyan-500/20
                    text-cyan-300
                    font-semibold
                  "
                >
                  {insight.value}
                </div>

              </div>

              <p className="text-gray-300 leading-8">
                {insight.description}
              </p>

            </div>

          ))}

        </div>
      )}

    </section>
  );
}
