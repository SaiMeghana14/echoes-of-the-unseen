import { GoogleGenAI } from "@google/genai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error(
    "Missing GEMINI_API_KEY"
  );
}

export const ai =
  new GoogleGenAI({
    apiKey:
      process.env.GEMINI_API_KEY,
  });

export async function generateText(
  prompt: string
) {
  try {
    const response =
      await ai.models.generateContent({
        model:
          "gemini-2.5-flash",

        contents: prompt,
      });

    return (
      response.text ||
      "No response generated."
    );
  } catch (error) {
    console.error(
      "Gemini Error:",
      error
    );

    throw error;
  }
}
