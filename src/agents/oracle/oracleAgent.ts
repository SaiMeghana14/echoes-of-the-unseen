import {
  generateText,
} from "@/services/gemini/geminiClient";

import {
  createEmbedding,
} from "@/services/gemini/embeddings";

import {
  searchSimilar,
} from "@/services/pinecone/vectorStore";

import {
  ORACLE_PROMPT,
} from "@/services/gemini/prompts";

export async function runOracle(
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
          m.metadata?.title ??
          ""
      )
      .join("\n");

  const prompt = `
${ORACLE_PROMPT}

Context:
${context}

Question:
${question}
`;

  const answer =
    await generateText(
      prompt
    );

  return {
    answer,
    context,
  };
}

export const oracleAgent =
 runOracle;
