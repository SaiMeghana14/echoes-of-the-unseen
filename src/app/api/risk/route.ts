import { NextResponse } from "next/server";
import { riskAgent } from "@/agents/risk/riskAgent";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await riskAgent(body);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Risk analysis failed" },
      { status: 500 }
    );
  }
}
