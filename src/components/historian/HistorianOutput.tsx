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
  if (!report) {
    return null;
  }

  return (
    <div className="space-y-6 mt-10">
      <div className="rounded-3xl border border-memory/20 bg-memory/5 p-8">
        <h2 className="text-3xl font-bold">
          🕰 Future Historian Report
        </h2>

        <p className="mt-2 text-gray-400">
          Analysis from the year 2126
        </p>
      </div>

      <div className="rounded-3xl border border-nebula/20 bg-nebula/5 p-8">
        <h3 className="text-xl font-bold">
          Future Relevance Score
        </h3>

        <div className="mt-4 text-6xl font-bold text-memory">
          {report.futureRelevanceScore}%
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 p-8">
        <h3 className="mb-3 text-xl font-bold">
          Artifact
        </h3>

        <p>{report.artifactTitle}</p>
      </div>

      <div className="rounded-3xl border border-white/10 p-8">
        <h3 className="mb-3 text-xl font-bold">
          Historical Importance
        </h3>

        <p>{report.historicalImportance}</p>
      </div>

      <div className="rounded-3xl border border-white/10 p-8">
        <h3 className="mb-3 text-xl font-bold">
          Future Significance
        </h3>

        <p>{report.futureSignificance}</p>
      </div>

      <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
        <h3 className="mb-3 text-xl font-bold">
          What Humanity Would Lose
        </h3>

        <p>{report.predictedLoss}</p>
      </div>

      <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-8">
        <h3 className="mb-3 text-xl font-bold">
          Preservation Recommendation
        </h3>

        <p>{report.preservationRecommendation}</p>
      </div>
    </div>
  );
}
