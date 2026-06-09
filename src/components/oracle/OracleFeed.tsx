interface OracleFeedItem {
  title: string;
  prediction: string;
  risk: number;
}

interface OracleFeedProps {
  insights: OracleFeedItem[];
}

export default function OracleFeed({
  insights,
}: OracleFeedProps) {
  return (
    <div className="space-y-6 mt-8">
      {insights.map(
        (insight, index) => (
          <div
            key={index}
            className="
            p-6
            rounded-3xl
            border
            border-nebula/20
            bg-nebula/5
          "
          >
            <div className="flex justify-between">
              <h2 className="font-bold">
                {insight.title}
              </h2>

              <span className="text-red-400">
                Risk {insight.risk}%
              </span>
            </div>

            <p className="mt-4 text-gray-300">
              {insight.prediction}
            </p>
          </div>
        )
      )}
    </div>
  );
}
