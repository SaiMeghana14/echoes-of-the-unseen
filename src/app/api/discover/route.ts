import { NextResponse } from "next/server";
import { discoveryAgent } from "@/agents/discovery/discoveryAgent";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await discoveryAgent(body);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Discovery failed" },
      { status: 500 }
    );
  }
}
