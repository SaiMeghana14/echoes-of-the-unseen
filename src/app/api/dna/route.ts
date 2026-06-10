import {
  NextResponse,
} from "next/server";

import {
  getCultureGraph,
} from "@/services/neo4j/knowledgeGraph";

export async function POST(
  req: Request
) {
  const {
    culture,
  } = await req.json();

  const graph =
    await getCultureGraph(
      culture
    );

  return NextResponse.json({
    graph,
  });
}
