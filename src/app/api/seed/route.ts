import { NextResponse } from "next/server";

import { saveMemory } from "@/services/firebase/memories";
import { createEmbedding } from "@/services/gemini/embeddings";
import { upsertEmbedding } from "@/services/pinecone/vectorStore";
import { saveGraph } from "@/services/neo4j/neo4jService";

import { heritageMemories } from "@/data/heritageMemories";

export async function GET() {
  const results = {
    total: heritageMemories.length,
    firestore: 0,
    pinecone: 0,
    neo4j: 0,
    failed: [] as string[],
  };

  for (const memory of heritageMemories) {
    try {
      // --------------------------
      // Firestore
      // --------------------------
      const id = await saveMemory({
        title: memory.title,
        description: memory.description,
        region: memory.region,
        category: memory.category,
        story: memory.story,
        latitude: memory.latitude,
        longitude: memory.longitude,
      });

      results.firestore++;

      // --------------------------
      // Pinecone
      // --------------------------
      try {
        const embedding = await createEmbedding(memory.story);

        await upsertEmbedding(id, embedding, {
          title: memory.title,
          description: memory.description,
          region: memory.region,
          category: memory.category,
          story: memory.story,
          latitude: memory.latitude,
          longitude: memory.longitude,
        });

        results.pinecone++;
      } catch (error) {
        console.error(
          `Pinecone failed for ${memory.title}`,
          error
        );
      }

      // --------------------------
      // Neo4j
      // --------------------------
      try {
        await saveGraph({
          id,
          title: memory.title,
          description: memory.description,
          region: memory.region,
          category: memory.category,
          story: memory.story,
          latitude: memory.latitude,
          longitude: memory.longitude,
        });

        results.neo4j++;
      } catch (error) {
        console.error(
          `Neo4j failed for ${memory.title}`,
          error
        );
      }

      console.log(`✓ ${memory.title}`);
    } catch (error) {
      console.error(error);

      results.failed.push(memory.title);
    }
  }

  return NextResponse.json({
    success: true,
    message: "Database seeded successfully.",
    ...results,
  });
}
