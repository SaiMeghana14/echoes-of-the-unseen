import { NextResponse }
from "next/server";

export async function POST(
  req: Request
) {
  try {
    const body =
      await req.json();

    const transcript = `
My grandmother taught us
to sing before fishing.
`;

    return NextResponse.json({
      transcript,
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "Transcription failed",
      },
      { status: 500 }
    );
  }
}
