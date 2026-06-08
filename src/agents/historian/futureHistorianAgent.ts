import { geminiClient } from "@/services/gemini/geminiClient";

export async function futureHistorianAgent(
  content: string
) {
  const prompt = `
You are a historian living in year 2126.

Analyze the following artifact.

Explain:

1. Why future generations care.
2. What it reveals about society.
3. What may have been lost.
4. Why preservation matters.

Artifact:

${content}
`;

  const response = await geminiClient.generate(
    prompt
  );

  return {
    historianView: response
  };
}
