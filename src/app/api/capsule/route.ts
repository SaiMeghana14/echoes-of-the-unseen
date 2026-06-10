import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  try {
    const body =
      await req.json();

    const title =
      body.title ||
      "Untitled Capsule";

    const unlockDate =
      body.unlockDate ||
      "2035-01-01";

    return NextResponse.json({
      title,

      unlockDate,

      status: "Stored",

      createdAt:
        new Date().toISOString(),

      timeline: [
        {
          date: new Date()
            .toISOString()
            .split("T")[0],

          title:
            "Capsule Created",
        },

        {
          date: unlockDate,

          title:
            "Capsule Opens",
        },
      ],
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Failed to create capsule",
      },
      {
        status: 500,
      }
    );
  }
}
