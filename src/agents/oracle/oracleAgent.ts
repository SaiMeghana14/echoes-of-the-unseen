import { createEmbedding }
from "@/services/gemini/embeddings";

import { searchSimilar }
from "@/services/pinecone/vectorStore";

import { geminiClient }
from "@/services/gemini/geminiClient";

export async function oracleAgent(
  question: string
) {
  const embedding =
    await createEmbedding(
      question
    );

  const matches =
    await searchSimilar(
      embedding
    );

  const context =
    matches
      .map(
        (m) =>
          m.metadata?.title
      )
      .join("\n");

  const prompt = `
You are Echo Oracle.

Context:

${context}

Question:

${question}

Identify:

1. What humanity is overlooking
2. What may disappear
3. Why it matters
4. How to preserve it
`;

  const response =
    await geminiClient.generate(
      prompt
    );

  return response;
}
