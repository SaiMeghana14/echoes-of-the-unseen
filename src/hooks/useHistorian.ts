"use client";

import { useState } from "react";

interface HistorianReport {
  artifactTitle: string;

  historicalImportance: string;

  futureSignificance: string;

  predictedLoss: string;

  preservationRecommendation: string;

  futureRelevanceScore: number;
}

export function useHistorian() {
  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<HistorianReport | null>(
      null
    );

  const analyze = async (
    content: string
  ) => {
    setLoading(true);

    try {
      const res = await fetch(
        "/api/historian",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            content,
          }),
        }
      );

      const data =
        await res.json();

      setResult(
        data.historianView
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    result,
    analyze,
  };
}
