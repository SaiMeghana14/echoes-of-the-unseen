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

  return response;
}

export const futureHistorianAgent =
 runFutureHistorian;
