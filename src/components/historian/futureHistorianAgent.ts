import { geminiClient } from "@/services/gemini/geminiClient";

export async function futureHistorianAgent(
  artifact: string
) {
  const prompt = `
You are a historian from the year 2126.

Analyze the following cultural artifact.

Return ONLY valid JSON.

{
  "artifactTitle":"",
  "historicalImportance":"",
  "futureSignificance":"",
  "predictedLoss":"",
  "preservationRecommendation":"",
  "futureRelevanceScore":0
}

Artifact:

${artifact}
`;

  const response =
    await geminiClient.generate(prompt);

  try {
    return JSON.parse(response);
  } catch {
    return {
      artifactTitle: "Unknown Artifact",

      historicalImportance: response,

      futureSignificance: "",

      predictedLoss: "",

      preservationRecommendation: "",

      futureRelevanceScore: 75,
    };
  }
}
