import { ai } from "./geminiClient";

export async function createEmbedding(
  text: string
): Promise<number[]> {
  try {
    const result =
      await ai.models.embedContent({
        model:
          "text-embedding-004",

        contents: text,
      });

    const embedding =
      result.embeddings?.[0]
        ?.values;

    if (!embedding) {
      throw new Error(
        "Embedding generation failed"
      );
    }

    return embedding;
  } catch (error) {
    console.error(
      "Embedding Error:",
      error
    );

    throw error;
  }
}
