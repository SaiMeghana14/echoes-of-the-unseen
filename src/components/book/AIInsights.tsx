interface AIInsightsProps {
  aiInsights?: string[];
}

export default function AIInsights({
  aiInsights = [],
}: AIInsightsProps) {
  return (
    <section className="glass rounded-3xl p-8">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-2xl">
          🤖
        </div>

        <div>

          <h2 className="text-3xl font-bold">
            AI Insights
          </h2>

          <p className="text-gray-400">
            AI-generated observations and recommendations.
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
              key={index}
              className="
                rounded-2xl
                bg-cyan-500/10
                border
                border-cyan-500/20
                p-6
              "
            >

              <div className="flex items-center gap-3 mb-3">

                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-black font-bold">
                  AI
                </div>

                <h3 className="font-semibold text-cyan-300">
                  Insight {index + 1}
                </h3>

              </div>

              <p className="text-gray-300 leading-7">
                {insight}
              </p>

            </div>

          ))}

        </div>
      )}

    </section>
  );
}
