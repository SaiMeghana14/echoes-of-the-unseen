import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  try {
    const body =
      await req.json();

    const title =
      body.title ||
      "Untitled Heritage";

    return NextResponse.json({
      title,

      summary: `
This heritage archive preserves stories,
traditions, and cultural practices for
future generations.
      `.trim(),

      timeline: [
        "Origins and Early History",
        "Community Development",
        "Cultural Expansion",
        "Modern Challenges",
        "Preservation Era",
      ],

      stories: [
        "Bear Legend",
        "Winter Story",
        "Fishing Tradition",
        "Ancestor Journey",
        "Harvest Celebration",
      ],

      generatedAt:
        new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Failed to generate heritage book",
      },
      {
        status: 500,
      }
    );
  }
}
