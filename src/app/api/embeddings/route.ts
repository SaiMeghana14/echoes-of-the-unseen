import { NextResponse } from "next/server";
import { createEmbedding } from "@/services/gemini/embeddings";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const embedding = await createEmbedding(
      body.text
    );

    return NextResponse.json({
      embedding
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Embedding failed" },
      { status: 500 }
    );
  }
}
