import fs from "fs";
import path from "path";

import { createEmbedding } from "../src/services/gemini/embeddings";

async function generate() {
  const filePath = path.join(
    process.cwd(),
    "src/data/heritageDataset.json"
  );

  const artifacts = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  for (const artifact of artifacts) {
    const embedding =
      await createEmbedding(
        artifact.title
      );

    console.log(
      artifact.title,
      embedding.length
    );
  }
}

generate();
