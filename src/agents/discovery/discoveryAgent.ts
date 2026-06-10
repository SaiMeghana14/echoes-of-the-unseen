import {
 generateText
}
from "@/services/gemini/geminiClient";

export async function discoveryAgent(input: any) {
  const prompt = `
You are the Discovery Agent of Echoes of the Unseen.

Analyze the provided artifact.

Determine:

1. Artifact Type
2. Cultural Significance
3. Historical Importance
4. Community Relevance
5. Preservation Urgency

Return JSON.

Artifact:
${JSON.stringify(input)}
`;

  const response = await generateText.generate(prompt);

  return JSON.parse(response);
}
