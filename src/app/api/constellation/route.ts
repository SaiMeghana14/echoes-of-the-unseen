import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    nodes: [
      { id: "Ainu Culture", group: "culture" },
      { id: "Ainu Language", group: "language" },
      { id: "Fishing Songs", group: "story" },
      { id: "Nature Spirits", group: "belief" },
      { id: "Ancestor Wisdom", group: "knowledge" },
      { id: "Sacred Ritual", group: "ritual" },
    
      { id: "Toda Culture", group: "culture" },
      { id: "Toda Embroidery", group: "ritual" },
      { id: "Harvest Festival", group: "ritual" },
      { id: "Oral History", group: "story" },
    
      { id: "Māori Culture", group: "culture" },
      { id: "Tribal Knowledge", group: "knowledge" },
      { id: "Community Songs", group: "story" },
    
      { id: "Story Archive", group: "archive" },
      { id: "Global Memory Vault", group: "vault" }
    ],
    links: [
      {
        source: "Ainu Culture",
        target: "Ainu Language",
      },
    
      {
        source: "Ainu Culture",
        target: "Fishing Songs",
      },
    
      {
        source: "Ainu Culture",
        target: "Nature Spirits",
      },
    
      {
        source: "Ainu Culture",
        target: "Ancestor Wisdom",
      },
    
      {
        source: "Ainu Culture",
        target: "Sacred Ritual",
      },
    
      {
        source: "Toda Culture",
        target: "Toda Embroidery",
      },
    
      {
        source: "Toda Culture",
        target: "Harvest Festival",
      },
    
      {
        source: "Toda Culture",
        target: "Oral History",
      },
    
      {
        source: "Māori Culture",
        target: "Tribal Knowledge",
      },
    
      {
        source: "Māori Culture",
        target: "Community Songs",
      },
    
      {
        source: "Ainu Language",
        target: "Story Archive",
      },
    
      {
        source: "Oral History",
        target: "Story Archive",
      },
    
      {
        source: "Community Songs",
        target: "Story Archive",
      },
    
      {
        source: "Story Archive",
        target: "Global Memory Vault",
      }
    ]
  });
}
