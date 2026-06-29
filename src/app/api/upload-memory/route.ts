import { NextResponse } from "next/server";

import { saveMemory } from "@/services/firebase/memories";

import { createEmbedding } from "@/services/gemini/embeddings";

import { upsertEmbedding } from "@/services/pinecone/vectorStore";

import { saveGraph } from "@/services/neo4j/neo4jService";

export async function POST(
  req: Request
) {
  try {
    const {
      title,
      description,
      region,
      category,
      story,
      latitude,
      longitude,
    } = await req.json();

    // ============================
    // STEP 1
    // Save metadata to Firestore
    // ============================

    const memoryId =
      await saveMemory({
        title,
        description,
        region,
        category,
        story,
        latitude,
        longitude,
      });

    // ============================
    // STEP 2
    // Generate embedding
    // ============================

    try {
      const embedding =
        await createEmbedding(
          story
        );

      // ============================
      // STEP 3
      // Save embedding to Pinecone
      // ============================

      await upsertEmbedding(
        memoryId,
        embedding,
        {
          title,
          description,
          region,
          category,
          story,
          latitude,
          longitude,
        }
      );

      console.log(
        "✓ Pinecone upload successful"
      );
    } catch (error) {
      console.error(
        "Pinecone Error:",
        error
      );
    }

    // ============================
    // STEP 4
    // Save relationships to Neo4j
    // ============================

    try {
      await saveGraph({
        id: memoryId,
        title,
        description,
        region,
        category,
        story,
        latitude,
        longitude,
      });

      console.log(
        "✓ Neo4j graph updated"
      );
    } catch (error) {
      console.error(
        "Neo4j Error:",
        error
      );
    }

    return NextResponse.json({
      success: true,
      id: memoryId,
    });

  } catch (error: any) {

    console.error(
      "UPLOAD ERROR:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          error?.message ??
          "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}
