import { NextResponse }
  from "next/server";

import {
  getMemories,
} from "@/services/firebase/memories";

export async function GET() {
  const memories =
    await getMemories();

  return NextResponse.json(
    memories
  );
}
