import { geminiClient } from "@/services/gemini/geminiClient";

export async function preservationAgent(
  transcript: string
) {
  const prompt = `
You are the Last Voices Agent.

Extract:

1. Stories
2. Wisdom
3. Traditions
4. Beliefs
5. Life Lessons

Transcript:

${transcript}

Return JSON.
`;

  const response = await geminiClient.generate(
    prompt
  );

  return JSON.parse(response);
}
