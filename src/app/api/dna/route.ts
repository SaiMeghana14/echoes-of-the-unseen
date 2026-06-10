import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    culture:
      "Ainu Culture",

    stories: [
      "Bear Legend",
      "Winter Story",
      "Ancestor Journey",
      "River Spirits",
    ],

    beliefs: [
      "Nature Spirits",
      "Respect for Ancestors",
      "Community Harmony",
    ],

    rituals: [
      "Harvest Festival",
      "Coming of Age Ceremony",
      "Seasonal Gathering",
    ],

    knowledge: [
      "Fishing Methods",
      "Traditional Medicine",
      "Oral History",
      "Forest Navigation",
    ],
  });
}
