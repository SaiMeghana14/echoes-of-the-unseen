import { NextResponse } from "next/server";

import { createEmbedding }
  from "@/services/gemini/embeddings";

import { upsertEmbedding }
  from "@/services/pinecone/vectorStore";

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
      await createEmbedding(story);

    const id =
      crypto.randomUUID();

    await upsertEmbedding(
      id,
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
      id,
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
