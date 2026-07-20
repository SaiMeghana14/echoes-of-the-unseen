import { GoogleGenAI } from "@google/genai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("Missing GEMINI_API_KEY");
}

export const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function generateText(
  prompt: string
): Promise<string> {
  try {
    const response =
      await ai.models.generateContent({
        model: "gemini-2.5-flash",

        contents: prompt,

        config: {
          temperature: 0.3,
          topP: 0.9,
          maxOutputTokens: 8192,
        },
      });

    if (!response.text) {
      throw new Error("Gemini returned an empty response.");
    }

    return response.text;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Gemini Error:", error.message);
    } else {
      console.error("Gemini Error:", error);
    }

    throw error;
  }
}
