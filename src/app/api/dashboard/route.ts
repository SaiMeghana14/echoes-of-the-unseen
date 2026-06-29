import { NextResponse } from "next/server";

import {
  getMemories,
} from "@/services/firebase/memories";

export async function GET() {
  try {
    const memories =
      await getMemories();

    const regions =
      new Set<string>();

    const categories =
      new Set<string>();

    const countries =
      new Set<string>();

    const languages =
      new Set<string>();

    memories.forEach(
      (memory: any) => {
        if (memory.region)
          regions.add(
            memory.region
          );

        if (memory.category)
          categories.add(
            memory.category
          );

        // Currently using region as country.
        // Later you can add a dedicated country field.
        if (memory.region)
          countries.add(
            memory.region
          );

        // Optional future field.
        if (memory.language)
          languages.add(
            memory.language
          );
      }
    );

    return NextResponse.json({
      success: true,

      memories:
        memories.length,

      regions:
        regions.size,

      categories:
        categories.size,

      countries:
        countries.size,

      languages:
        languages.size,

      latestMemory:
        memories.length > 0
          ? memories[0]
          : null,
    });

  } catch (error) {
    console.error(
      "Dashboard API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Failed to load dashboard statistics.",

        memories: 0,
        regions: 0,
        categories: 0,
        countries: 0,
        languages: 0,
        latestMemory: null,
      },
      {
        status: 500,
      }
    );
  }
}
