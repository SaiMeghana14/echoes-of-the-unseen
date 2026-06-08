import { NextResponse } from "next/server";
import { preservationAgent } from "@/agents/preservation/preservationAgent";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await preservationAgent(
      body.transcript
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Voice analysis failed" },
      { status: 500 }
    );
  }
}
