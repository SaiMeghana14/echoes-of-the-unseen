import { NextResponse } from "next/server";

import {
  getMemories,
} from "@/services/firebase/memories";

export async function GET() {
  try {

    const memories =
      await getMemories();

    return NextResponse.json(
      memories
    );

  } catch (error: any) {

    console.error(
      "MEMORY_ATLAS_ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          error?.message ??
          "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}
