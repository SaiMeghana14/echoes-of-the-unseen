import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    culture: "Ainu Culture",

    stories: [
      "Bear Legend",
      "Winter Story"
    ],

    beliefs: [
      "Nature Spirits"
    ],

    rituals: [
      "Harvest Festival"
    ],

    knowledge: [
      "Fishing Methods"
    ]
  });
}
