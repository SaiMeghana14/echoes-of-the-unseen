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
    matches.length > 0
      ? matches
          .slice(0, 8)
          .map((match, index) => {
            const metadata =
              match.metadata || {};

            return `
Memory ${index + 1}

Title:
${metadata.title ?? "Unknown"}

Description:
${metadata.description ?? ""}

Content:
${metadata.content ?? ""}

Region:
${metadata.region ?? ""}

Tags:
${Array.isArray(metadata.tags)
  ? metadata.tags.join(", ")
  : metadata.tags ?? ""}
`;
          })
          .join("\n\n---\n\n")
      : "No relevant memories were found in the archive.";

  const prompt = `
${ORACLE_PROMPT}

You are Echo Oracle, the guardian of humanity's forgotten memories, endangered traditions, oral histories, and cultural heritage.

Instructions:
- Answer the user's question directly.
- Use the retrieved memories whenever relevant.
- If evidence is weak, say so.
- Do not invent historical facts.
- Highlight cultural significance when possible.
- If the archive lacks information, provide a thoughtful answer based on heritage preservation knowledge.
- Write in a clear and engaging style.

ARCHIVE MEMORIES

${context}

USER QUESTION

${question}

ORACLE RESPONSE
`;

  const answer =
    await generateText(
      prompt
    );

  return {
    prediction: answer,
    answer,
    question,
    context,
    memoriesFound:
      matches.length,
  };
}

export const oracleAgent =
  runOracle;
