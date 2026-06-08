import { NextResponse } from "next/server";
import { saveArtifact } from "@/services/archive/preservationStore";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const result = await saveArtifact(body);

    return NextResponse.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Archive failed" },
      { status: 500 }
    );
  }
}
