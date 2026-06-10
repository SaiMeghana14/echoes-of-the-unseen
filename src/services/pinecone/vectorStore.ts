import { Pinecone } from "@pinecone-database/pinecone";

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

const index = pinecone.index(
  process.env.PINECONE_INDEX!
);

export async function upsertEmbedding(
  id: string,
  values: number[],
  metadata: Record<string, any>
) {
  await index.upsert([
    {
      id,
      values,
      metadata,
    },
  ]);
}

export async function searchSimilar(
  embedding: number[],
  topK = 5
) {
  const result = await index.query({
    vector: embedding,
    topK,
    includeMetadata: true,
  });

  return result.matches ?? [];
}
