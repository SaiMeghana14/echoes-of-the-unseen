import { NextResponse } from "next/server";
import { generateText } from "@/services/gemini/geminiClient";

export async function POST(req: Request) {
  try {
    const { title } = await req.json();

    if (typeof title !== "string" || title.trim() === "") {
      return NextResponse.json(
        {
          error: "A valid heritage title is required.",
        },
        {
          status: 400,
        }
      );
    }

    const normalizedTitle = title.trim();

    const prompt = `
You are an expert anthropologist, UNESCO heritage researcher, historian, linguist, and AI cultural preservation specialist.

Generate a complete digital heritage preservation book.

Return ONLY valid JSON.

The JSON MUST follow this schema EXACTLY:

{
  "title": "string",

  "summary": "string",

  "culturalSignificance": "string",

  "timeline": [
    {
      "year": "string",
      "title": "string",
      "description": "string"
    }
  ],

  "stories": [
    {
      "title": "string",
      "type": "string",
      "content": "string"
    }
  ],

  "threats": [
    {
      "title": "string",
      "severity": "High | Medium | Low",
      "description": "string"
    }
  ],

  "preservationPlan": [
    {
      "step": 1,
      "title": "string",
      "description": "string"
    }
  ],

  "aiInsights": [
    {
      "title": "string",
      "value": "string",
      "description": "string"
    }
  ]
}

Generate the heritage book for:

"${normalizedTitle}"

Instructions:

• Title should be descriptive.

• Summary should be 2–3 rich paragraphs.

• Cultural Significance should explain:
  - historical importance
  - cultural identity
  - social importance
  - why the heritage should survive

• Timeline should contain 5–8 important historical milestones.

• Stories should contain 3–5 oral traditions, legends, rituals, customs, or historical narratives.

• Threats should contain 4–6 current risks such as:
  - modernization
  - climate change
  - migration
  - language extinction
  - conflict
  - loss of practitioners

Severity must be exactly one of:
- High
- Medium
- Low

• Preservation Plan should contain 5–7 actionable recommendations including:
  - documentation
  - digitization
  - AI archiving
  - education
  - community participation
  - government support

• AI Insights should contain 4–6 observations such as:
  - endangered status
  - preservation priority
  - uniqueness
  - recommended digital technologies

IMPORTANT:

Return ONLY valid JSON.

The response MUST begin with {

The response MUST end with }

Do NOT use markdown.

Do NOT wrap the JSON in \`\`\`json.

Do NOT include comments.

Do NOT include explanations.

Every field in the schema must exist.

Arrays must never be omitted.

Return JSON that can be parsed directly using JSON.parse().
`;

    const response = await generateText(prompt);

    const cleaned = response
      .replace(/```json\s*/gi, "")
      .replace(/```\s*/g, "")
      .trim();

    let book: any;
    try {
      book = JSON.parse(cleaned);
    } catch (parseError) {
      console.error("Invalid JSON returned by Gemini:");
      console.error(cleaned);
      console.error(parseError);

      throw new Error("Failed to parse Gemini JSON response.");
    }

    // Ensure required fields always exist
    book.title ??= normalizedTitle;
    book.summary ??= "";
    book.culturalSignificance ??= "";

    book.timeline ??= [];
    book.stories ??= [];
    book.threats ??= [];
    book.preservationPlan ??= [];
    book.aiInsights ??= [];

    return NextResponse.json(book);
  } catch (error) {
    console.error("Book Generation Error:", error);

    return NextResponse.json(
      {
        title: "Unable to Generate Book",

        summary:
          "The AI could not generate the requested heritage book. Please try again with a different title or retry in a few moments.",

        culturalSignificance:
          "No cultural significance information available.",

        timeline: [],

        stories: [],

        threats: [],

        preservationPlan: [],

        aiInsights: [],
      },
      {
        status: 500,
      }
    );
  }
}
