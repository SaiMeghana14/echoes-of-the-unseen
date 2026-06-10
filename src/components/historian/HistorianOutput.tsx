interface HistorianReport {
  artifactTitle: string;

  historicalImportance: string;

  futureSignificance: string;

  predictedLoss: string;

  preservationRecommendation: string;

  futureRelevanceScore: number;
}

interface Props {
  report: HistorianReport | null;
}

export default function HistorianOutput({
  report,
}: Props) {
  if (!report) return null;

  return (
    <div className="space-y-6 mt-8">

      <div className="rounded-3xl p-8 bg-memory/5 border border-memory/20">
        <h2 className="text-3xl font-bold">
          🕰 Future Historian Report
        </h2>

        <p className="text-gray-400 mt-2">
          Year 2126 Analysis
        </p>
      </div>

      <div className="rounded-3xl p-8 bg-nebula/5 border border-nebula/20">
        <h3 className="font-bold text-xl">
          Future Relevance
        </h3>

        <div className="text-6xl font-bold mt-4 text-memory">
          {report.futureRelevanceScore}%
        </div>
      </div>

      <div className="rounded-3xl p-8 border border-white/10">
        <h3 className="font-bold mb-3">
          Historical Importance
        </h3>

        <p>{report.historicalImportance}</p>
      </div>

      <div className="rounded-3xl p-8 border border-white/10">
        <h3 className="font-bold mb-3">
          Future Significance
        </h3>

        <p>{report.futureSignificance}</p>
      </div>

      <div className="rounded-3xl p-8 border border-red-500/20 bg-red-500/5">
        <h3 className="font-bold mb-3">
          What Humanity Would Lose
        </h3>

        <p>{report.predictedLoss}</p>
      </div>

      <div className="rounded-3xl p-8 border border-green-500/20 bg-green-500/5">
        <h3 className="font-bold mb-3">
          Preservation Recommendation
        </h3>

        <p>{report.preservationRecommendation}</p>
      </div>

    </div>
  );
}
