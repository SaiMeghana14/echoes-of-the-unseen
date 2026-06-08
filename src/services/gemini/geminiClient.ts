import { GoogleGenAI } from "@google/genai";

export const gemini = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export const geminiClient = {
  async generate(prompt: string) {
    const response = await gemini.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
    });

    return response.text ?? "";
  },
};
