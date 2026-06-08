import { gemini } from "./geminiClient";

export async function createEmbedding(
  text: string
) {
  const result =
    await gemini.models.embedContent({
      model: "text-embedding-004",
      contents: text,
    });

  return result.embeddings?.[0]?.values ?? [];
}
