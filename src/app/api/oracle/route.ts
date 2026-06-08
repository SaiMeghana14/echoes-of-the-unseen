import { NextResponse } from "next/server";
import { oracleAgent } from "@/agents/oracle/oracleAgent";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await oracleAgent(
      body.question
    );

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Oracle failed" },
      { status: 500 }
    );
  }
}
