import neo4j from "neo4j-driver";

const driver = neo4j.driver(
  process.env.NEO4J_URI!,
  neo4j.auth.basic(
    process.env.NEO4J_USERNAME!,
    process.env.NEO4J_PASSWORD!
  )
);

export async function addArtifactNode(
  artifact: {
    id: string;
    name: string;
    type: string;
  }
) {
  const session =
    driver.session();

  try {
    await session.run(
      `
      MERGE (a:Artifact {id:$id})

      SET
      a.name=$name,
      a.type=$type
      `,
      artifact
    );
  } finally {
    await session.close();
  }
}

export async function createRelationship(
  sourceId: string,
  targetId: string,
  relationship: string
) {
  const session =
    driver.session();

  try {
    await session.run(
      `
      MATCH (a:Artifact {id:$source})

      MATCH (b:Artifact {id:$target})

      MERGE (a)-[:RELATED_TO {
        relation:$relation
      }]->(b)
      `,
      {
        source: sourceId,
        target: targetId,
        relation: relationship,
      }
    );
  } finally {
    await session.close();
  }
}

export async function getConnections(
  artifactId: string
) {
  const session =
    driver.session();

  try {
    const result =
      await session.run(
        `
        MATCH (a:Artifact {id:$id})
        -[r]->
        (b)

        RETURN a,r,b
        `,
        {
          id: artifactId,
        }
      );

    return result.records;
  } finally {
    await session.close();
  }
}
