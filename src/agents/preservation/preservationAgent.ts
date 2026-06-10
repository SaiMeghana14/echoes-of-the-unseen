import {
  generateText,
} from "@/services/gemini/geminiClient";

export async function preservationAgent(
  transcript: string
) {
  const prompt = `
Analyze the following heritage transcript.

Extract:

- stories
- traditions
- beliefs
- lifeLessons
- preservationSummary

Return JSON only.

Transcript:
${transcript}
`;

  const response =
    await generateText(
      prompt
    );

  return JSON.parse(
    response
  );
}
