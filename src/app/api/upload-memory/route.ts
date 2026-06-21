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
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
