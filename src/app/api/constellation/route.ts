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

      {
        id: "Fishing Songs",
        group: "story",
      },

      {
        id: "Ancestor Wisdom",
        group: "belief",
      },

      {
        id: "Traditional Medicine",
        group: "knowledge",
      },

      {
        id: "Harvest Festival",
        group: "ritual",
      },

      {
        id: "Toda Embroidery",
        group: "culture",
      },

      {
        id: "Oral Archive",
        group: "story",
      },
    ],

    links: [
      {
        source: "Ainu Culture",
        target: "Stories",
      },

      {
        source: "Ainu Culture",
        target: "Beliefs",
      },

      {
        source: "Ainu Culture",
        target: "Rituals",
      },

      {
        source: "Ainu Culture",
        target: "Knowledge",
      },

      {
        source: "Stories",
        target: "Bear Legend",
      },

      {
        source: "Beliefs",
        target: "Nature Spirits",
      },

      {
        source: "Stories",
        target: "Fishing Songs",
      },

      {
        source: "Beliefs",
        target: "Ancestor Wisdom",
      },

      {
        source: "Knowledge",
        target: "Traditional Medicine",
      },

      {
        source: "Rituals",
        target: "Harvest Festival",
      },

      {
        source: "Ainu Culture",
        target: "Toda Embroidery",
      },

      {
        source: "Stories",
        target: "Oral Archive",
      },
    ],
  });
}
