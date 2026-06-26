import { NextResponse } from "next/server";
import { saveMemory } from "@/services/firebase/memories";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await saveMemory({
      title: body.title,
      description: body.description,
      region: body.region,
      category: body.category,
      story: body.story,
    });

    return NextResponse.json({
      success: true,
      message: "Memory saved to Firestore",
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error?.message ?? "Unknown error",
      },
      { status: 500 }
    );
  }
}
