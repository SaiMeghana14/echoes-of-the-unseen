import { NextResponse } from "next/server";
import { generateText } from "@/services/gemini/geminiClient";

export async function POST(req: Request) {
  try {
    const { title } = await req.json();

    const prompt = `
You are an expert cultural heritage researcher.

Return ONLY valid JSON.

Schema:

{
  "title": "string",
  "summary": "string",
  "timeline": [
    "string",
    "string",
    "string",
    "string"
  ],
  "stories": [
    "string",
    "string",
    "string"
  ],
  "preservationPlan": [
    "string",
    "string",
    "string",
    "string"
  ]
}

Generate a complete heritage preservation book for:

"${title}"

Requirements:

- Return ONLY JSON.
- No markdown.
- No code fences.
- Timeline should contain important historical milestones.
- Stories should contain meaningful cultural narratives.
- Preservation Plan should contain practical AI and heritage preservation recommendations.
`;

    const response = await generateText(prompt);

    // Remove markdown fences if Gemini accidentally returns them
    const cleaned = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const book = JSON.parse(cleaned);

    return NextResponse.json(book);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        title: "Unable to Generate Book",
        summary:
          "An error occurred while generating the heritage book.",

        timeline: [],

        stories: [],

        preservationPlan: [],
      },
      {
        status: 500,
      }
    );
  }
}
