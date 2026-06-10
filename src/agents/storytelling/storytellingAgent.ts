import {
  generateText,
} from "@/services/gemini/geminiClient";

export async function storytellingAgent(
  artifact: string
) {
  const prompt = `
Create a powerful narrative.

Transform the artifact into:

- Documentary style story
- Emotional narrative
- Historical timeline

Artifact:

${artifact}
`;

  const response =
    await generateText(
      prompt
    );

  return {
    story: response,
  };
}
