import { NextResponse } from "next/server";

import {
  getMemories,
} from "@/services/firebase/memories";

export async function GET() {

  const memories =
    await getMemories();

  const regions =
    new Set(
      memories.map(
        (m: any) => m.region
      )
    );

  const categories =
    new Set(
      memories.map(
        (m: any) => m.category
      )
    );

  const countries =
    new Set(
      memories.map(
        (m: any) => m.region
      )
    );

  return NextResponse.json({

    memories:
      memories.length,

    regions:
      regions.size,

    categories:
      categories.size,

    countries:
      countries.size,

  });

}
