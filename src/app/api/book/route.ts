import { NextResponse } from "next/server";
import { generateText } from "@/services/gemini/geminiClient";

export async function POST(req: Request) {
  try {
    const { title } = await req.json();

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
      "severity": "High",
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

"${title}"

Instructions:

• Title should be descriptive.

• Summary should be 2-3 paragraphs.

• Cultural Significance should explain:
  - historical importance
  - cultural identity
  - social importance
  - why the heritage should survive

• Timeline should include important historical milestones.

• Stories should contain oral traditions, legends, rituals, customs, or historical narratives.

• Threats should describe current risks like:
  - modernization
  - climate change
  - migration
  - language extinction
  - conflict
  - loss of practitioners

• Preservation Plan should provide actionable recommendations including:
  - documentation
  - digitization
  - AI archiving
  - education
  - community participation
  - government support

• AI Insights should provide observations such as:
  - endangered status
  - preservation priority
  - uniqueness
  - recommended digital technologies

IMPORTANT:

Return ONLY JSON.

Do NOT include markdown.

Do NOT include code fences.

Do NOT explain anything outside the JSON.
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
    console.error("Book Generation Error:", error);

    return NextResponse.json(
      {
        title: "Unable to Generate Book",

        summary:
          "An error occurred while generating the heritage book.",

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
