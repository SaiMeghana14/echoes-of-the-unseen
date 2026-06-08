import { geminiClient } from "@/services/gemini/geminiClient";

export async function oracleAgent(
  question: string
) {
  const prompt = `
You are Echo Oracle.

Your mission:

Predict cultural losses.

Identify:

- disappearing traditions
- fading knowledge
- endangered languages
- vulnerable communities

Question:

${question}
`;

  const response = await geminiClient.generate(
    prompt
  );

  return {
    prediction: response
  };
}
