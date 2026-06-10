import { NextResponse }
from "next/server";

export async function POST(
 req: Request
) {
 const body =
  await req.json();

 return NextResponse.json({
  title:
   body.title,

  timeline: [
   "Origin",
   "Growth",
   "Modern Era"
  ],

  summary:
   "Preserved heritage report."
 });
}
