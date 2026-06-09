export function buildGraph(
  items: string[]
) {
  return {
    nodes: items.map((i) => ({
      id: i,
    })),

    links: [],
  };
}
