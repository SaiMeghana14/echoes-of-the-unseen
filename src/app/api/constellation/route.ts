import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    nodes: [
      {
        id: "Ainu Culture",
        group: "culture",
      },

      {
        id: "Stories",
        group: "story",
      },

      {
        id: "Beliefs",
        group: "belief",
      },

      {
        id: "Rituals",
        group: "ritual",
      },

      {
        id: "Knowledge",
        group: "knowledge",
      },

      {
        id: "Bear Legend",
        group: "story",
      },

      {
        id: "Nature Spirits",
        group: "belief",
      },
    ],

    links: [
      {
        source:
          "Ainu Culture",
        target:
          "Stories",
      },

      {
        source:
          "Ainu Culture",
        target:
          "Beliefs",
      },

      {
        source:
          "Ainu Culture",
        target:
          "Rituals",
      },

      {
        source:
          "Ainu Culture",
        target:
          "Knowledge",
      },

      {
        source:
          "Stories",
        target:
          "Bear Legend",
      },

      {
        source:
          "Beliefs",
        target:
          "Nature Spirits",
      },
    ],
  });
}
