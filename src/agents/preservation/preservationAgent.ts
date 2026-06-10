import {
 generateText
}
from "@/services/gemini/geminiClient";

export async function preservationAgent(
  transcript: string
) {
  const prompt = `
You are the Last Voices Agent.

Analyze this elder interview.

Extract:

1. Stories
2. Traditions
3. Beliefs
4. Wisdom
5. Life Lessons

Return ONLY valid JSON.

{
 "stories":[],
 "traditions":[],
 "beliefs":[],
 "wisdom":[],
 "lifeLessons":[],
 "preservationSummary":""
}

Transcript:

${transcript}
`;

  const response =
    await geminiClient.generate(prompt);

  return JSON.parse(response);
}
