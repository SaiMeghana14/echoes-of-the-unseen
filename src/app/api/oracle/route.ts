import { NextResponse } from "next/server";
import { oracleAgent } from "@/agents/oracle/oracleAgent";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const question =
      body?.question?.trim?.() ?? "";

    if (!question) {
      return NextResponse.json(
        {
          success: false,
          error: "Question is required.",
        },
        {
          status: 400,
        }
      );
    }

    const result = await oracleAgent(
      question
    );

    const prediction =
      typeof result === "string"
        ? result
        : result?.prediction ||
          result?.answer ||
          result?.response ||
          "The Oracle could not find an answer.";

    return NextResponse.json({
      success: true,
      question,
      prediction,
      timestamp:
        new Date().toISOString(),
    });
  } catch (error) {
    console.error(
      "[ECHO_ORACLE_ERROR]",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "The Oracle could not access humanity's memory at this time.",
        prediction:
          "An unexpected error occurred while consulting the archive.",
      },
      {
        status: 500,
      }
    );
  }
}
