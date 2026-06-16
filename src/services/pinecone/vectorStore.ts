import { Pinecone } from "@pinecone-database/pinecone";

if (!process.env.PINECONE_API_KEY) {
  throw new Error(
    "PINECONE_API_KEY is not configured."
  );
}

if (!process.env.PINECONE_INDEX) {
  throw new Error(
    "PINECONE_INDEX is not configured."
  );
}

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const index = pinecone.index(
  process.env.PINECONE_INDEX
);

export interface MemoryMetadata {
  title?: string;
  description?: string;
  content?: string;
  region?: string;
  country?: string;
  category?: string;
  tags?: string[];
  source?: string;
  createdAt?: string;

  [key: string]: any;
}

export async function upsertEmbedding(
  id: string,
  values: number[],
  metadata: MemoryMetadata
) {
  try {
    await index.upsert([
      {
        id,
        values,
        metadata: {
          title:
            metadata.title ?? "",

          description:
            metadata.description ?? "",

          content:
            metadata.content ?? "",

          region:
            metadata.region ?? "",

          country:
            metadata.country ?? "",

          category:
            metadata.category ?? "",

          tags:
            metadata.tags ?? [],

          source:
            metadata.source ?? "",

          createdAt:
            metadata.createdAt ??
            new Date().toISOString(),

          ...metadata,
        },
      },
    ]);

    return true;
  } catch (error) {
    console.error(
      "[PINECONE_UPSERT_ERROR]",
      error
    );

    throw error;
  }
}

export async function searchSimilar(
  embedding: number[],
  topK = 8,
  minScore = 0.65
) {
  try {
    const result =
      await index.query({
        vector: embedding,
        topK,
        includeMetadata: true,
      });

    const matches =
      result.matches ?? [];

    return matches
      .filter(
        (match) =>
          (match.score ?? 0) >=
          minScore
      )
      .sort(
        (a, b) =>
          (b.score ?? 0) -
          (a.score ?? 0)
      );
  } catch (error) {
    console.error(
      "[PINECONE_SEARCH_ERROR]",
      error
    );

    return [];
  }
}
