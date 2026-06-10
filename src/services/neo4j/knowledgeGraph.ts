import neo4j from "neo4j-driver";

const driver = neo4j.driver(
  process.env.NEO4J_URI!,
  neo4j.auth.basic(
    process.env.NEO4J_USER!,
    process.env.NEO4J_PASSWORD!
  )
);

export async function createCultureGraph(
  culture: string,
  stories: string[],
  beliefs: string[],
  rituals: string[],
  knowledge: string[]
) {
  const session =
    driver.session();

  try {
    await session.run(
      `
      MERGE (c:Culture {name:$culture})
      `,
      { culture }
    );

    for (const story of stories) {
      await session.run(
        `
        MATCH (c:Culture {name:$culture})
        MERGE (s:Story {name:$story})
        MERGE (c)-[:HAS_STORY]->(s)
        `,
        {
          culture,
          story,
        }
      );
    }

    for (const belief of beliefs) {
      await session.run(
        `
        MATCH (c:Culture {name:$culture})
        MERGE (b:Belief {name:$belief})
        MERGE (c)-[:HAS_BELIEF]->(b)
        `,
        {
          culture,
          belief,
        }
      );
    }

    for (const ritual of rituals) {
      await session.run(
        `
        MATCH (c:Culture {name:$culture})
        MERGE (r:Ritual {name:$ritual})
        MERGE (c)-[:HAS_RITUAL]->(r)
        `,
        {
          culture,
          ritual,
        }
      );
    }

    for (const item of knowledge) {
      await session.run(
        `
        MATCH (c:Culture {name:$culture})
        MERGE (k:Knowledge {name:$item})
        MERGE (c)-[:HAS_KNOWLEDGE]->(k)
        `,
        {
          culture,
          item,
        }
      );
    }
  } finally {
    await session.close();
  }
}

export async function getCultureGraph(
  culture: string
) {
  const session =
    driver.session();

  try {
    const result =
      await session.run(
        `
        MATCH (c:Culture {name:$culture})-[r]->(n)
        RETURN c,r,n
        `,
        { culture }
      );

    return result.records;
  } finally {
    await session.close();
  }
}
