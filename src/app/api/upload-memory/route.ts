import { NextResponse } from "next/server";

import {
  createEmbedding,
} from "@/services/gemini/embeddings";

import {
  upsertEmbedding,
} from "@/services/pinecone/vectorStore";

import {
  saveMemory,
} from "@/services/firebase/memories";

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
    } = await req.json();

    const embedding =
      await createEmbedding(
        story
      );

    const memoryId =
      crypto.randomUUID();

    await saveMemory({
      title,
      description,
      region,
      category,
      story,
    });

    await upsertEmbedding(
      memoryId,
      embedding,
      {
        title,
        description,
        region,
        category,
        content: story,
      }
    );

    return NextResponse.json({
      success: true,
      memoryId,
    });
  } catch (error: any) {
      console.error(
        "UPLOAD_MEMORY_ERROR:",
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
