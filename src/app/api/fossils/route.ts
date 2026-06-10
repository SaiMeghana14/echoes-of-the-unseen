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
    url,
  } = await req.json();

  const result =
    await generateText(`
Analyze this website:

${url}

Return:
- Historical significance
- Community impact
- Extinction risk
- Future relevance
`);
  return NextResponse.json({
    analysis: result,
  });
}
