import fs from "fs";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "src/data/heritageDataset.json"
);

const data = JSON.parse(
  fs.readFileSync(filePath, "utf8")
);

console.log(
  `Imported ${data.length} records`
);
