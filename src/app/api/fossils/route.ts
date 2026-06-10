import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  try {
    const body =
      await req.json();

    const url =
      body.url ||
      "Unknown Website";

    return NextResponse.json({
      title: url,

      risk: 84,

      significance:
        "Historic internet community archive with cultural and social significance.",

      preservation:
        "Recommended",

      category:
        "Digital Community",

      timeline: [
        {
          year: "2002",
          title:
            "Website Launched",
        },

        {
          year: "2008",
          title:
            "Peak Community Activity",
        },

        {
          year: "2018",
          title:
            "Declining Participation",
        },

        {
          year: "2026",
          title:
            "Preservation Candidate",
        },
      ],

      archiveScore: 91,

      futureRelevance: 88,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "Failed to analyze website",
      },
      {
        status: 500,
      }
    );
  }
}
