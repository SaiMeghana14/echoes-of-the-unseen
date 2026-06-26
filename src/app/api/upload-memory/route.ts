import { NextResponse } from "next/server";

import { saveMemory } from "@/services/firebase/memories";

import { createEmbedding } from "@/services/gemini/embeddings";

import { upsertEmbedding } from "@/services/pinecone/vectorStore";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // STEP 1: Always save to Firestore
    const memoryId = await saveMemory({
      title: body.title,
      description: body.description,
      region: body.region,
      category: body.category,
      story: body.story,
    });

    // STEP 2: Try to generate embedding + save to Pinecone
    try {
      const embedding =
        await createEmbedding(
          body.story
        );

      await upsertEmbedding(
        memoryId,
        embedding,
        {
          title: body.title,
          description: body.description,
          region: body.region,
          category: body.category,
          content: body.story,
        }
      );

      console.log(
        "Pinecone upload successful"
      );

    } catch (embeddingError) {

      console.error(
        "Embedding/Pinecone Error:",
        embeddingError
      );

      // Don't fail the upload.
      // Firestore already has the memory.
    }

    return NextResponse.json({
      success: true,
    });

  } catch (error: any) {

    console.error(error);

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
