import {
  generateText,
} from "@/services/gemini/geminiClient";

import {
  FUTURE_HISTORIAN_PROMPT,
} from "@/services/gemini/prompts";

export async function runFutureHistorian(
  artifact: string
) {
  const prompt = `
${FUTURE_HISTORIAN_PROMPT}

Analyze this cultural artifact as a historian in the year 2126.

Artifact:
${artifact}

Return JSON with:

{
  "historicalImportance":"",
  "futureSignificance":"",
  "predictedLoss":"",
  "preservationRecommendation":"",
  "futureRelevanceScore":0
}
`;

  const response =
    await generateText(
      prompt
    );

  try {
    const parsed =
      JSON.parse(response);

    return {
      artifactTitle: artifact,

      historicalImportance:
        parsed.historicalImportance ??
        "This artifact represents an important cultural memory.",

      futureSignificance:
        parsed.futureSignificance ??
        "Future generations may view this as historically valuable.",

      predictedLoss:
        parsed.predictedLoss ??
        "Loss of cultural identity and knowledge.",

      preservationRecommendation:
        parsed.preservationRecommendation ??
        "Digitally archive and preserve this artifact.",

      futureRelevanceScore:
        Number(
          parsed.futureRelevanceScore
        ) || 75,
    };
  } catch {
    return {
      artifactTitle: artifact,

      historicalImportance:
        response,

      futureSignificance:
        "This artifact provides future generations with insight into cultural traditions and lived experiences.",

      predictedLoss:
        "Unique stories, traditions, and knowledge may disappear if preservation efforts are not undertaken.",

      preservationRecommendation:
        "Archive, document, and share this artifact across digital preservation networks.",

      futureRelevanceScore: 85,
    };
  }
}

export const futureHistorianAgent =
  runFutureHistorian;
