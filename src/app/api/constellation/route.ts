import { NextResponse } from "next/server";

import {
  getConnections,
} from "@/services/neo4j/knowledgeGraph";

export async function GET() {
  try {
    const records =
      await getConnections(
        "ainu"
      );

    const nodes = [];
    const links = [];

    for (const record of records) {
      const source =
        record.get("a");

      const target =
        record.get("b");

      nodes.push({
        id: source.properties.name,
      });

      nodes.push({
        id: target.properties.name,
      });

      links.push({
        source:
          source.properties.name,
        target:
          target.properties.name,
      });
    }

    return NextResponse.json({
      nodes,
      links,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed" },
      { status: 500 }
    );
  }
}
