import { NextResponse }
from "next/server";

export async function POST(
 req: Request
) {
 const body =
  await req.json();

 return NextResponse.json({
  title:
   body.url,

  risk: 84,

  significance:
   "Early internet community archive",

  preservation:
   "Recommended"
 });
}
