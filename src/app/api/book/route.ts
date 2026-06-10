import {
  NextResponse,
} from "next/server";

import {
  generateText,
} from "@/services/gemini/geminiClient";

export async function POST(
  req: Request
) {
  const {
    title,
  } = await req.json();

  const result =
    await generateText(`
Create a heritage book.

Title:
${title}

Generate:
- Summary
- Timeline
- Stories
- Preservation Plan
`);

  return NextResponse.json({
    content: result,
  });
}
