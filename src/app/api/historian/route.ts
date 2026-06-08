import { NextResponse } from "next/server";
import { futureHistorianAgent } from "@/agents/historian/futureHistorianAgent";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await futureHistorianAgent(
      body.content
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Historian failed" },
      { status: 500 }
    );
  }
}
