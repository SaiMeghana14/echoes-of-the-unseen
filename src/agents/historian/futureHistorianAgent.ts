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

Artifact:
${artifact}
`;

  const response =
    await generateText(
      prompt
    );

  return {
    artifactTitle: artifact,

    significance:
      response,

    futureImpact:
      "This artifact provides future generations with valuable insight into cultural practices, traditions, and lived experiences that may otherwise disappear.",

    preservationPriority:
      "High",
  };
}

export const futureHistorianAgent =
  runFutureHistorian;
