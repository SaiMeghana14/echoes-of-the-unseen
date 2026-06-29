import driver from "./driver";

export async function saveGraph(
  memory: {
    id: string;
    title: string;
    description: string;
    region: string;
    category: string;
    story: string;
    latitude: number;
    longitude: number;
  }
) {
  const session =
    driver.session();

  try {
    await session.run(
      `
      MERGE (r:Region {
        name: $region
      })

      MERGE (c:Category {
        name: $category
      })

      MERGE (m:Memory {
        id: $id
      })

      SET
        m.title = $title,
        m.description = $description,
        m.story = $story,
        m.latitude = $latitude,
        m.longitude = $longitude

      MERGE (r)-[:HAS_CATEGORY]->(c)

      MERGE (c)-[:HAS_MEMORY]->(m)
      `,
      memory
    );
  } finally {
    await session.close();
  }
}
