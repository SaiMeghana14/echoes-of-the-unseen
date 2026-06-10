import { addDoc, collection } from "firebase/firestore";
import { db } from "../src/services/firebase/firestore";

async function seed() {
  const artifacts = [
    {
      title: "Ainu Language",
      country: "Japan",
      risk: 91,
      type: "Language",
    },

    {
      title: "Toda Embroidery",
      country: "India",
      risk: 82,
      type: "Craft",
    },

    {
      title: "Fishing Songs",
      country: "Philippines",
      risk: 88,
      type: "Tradition",
    },
  ];

  for (const artifact of artifacts) {
    await addDoc(
      collection(db, "artifacts"),
      artifact
    );
  }

  console.log("Seed complete");
}

seed();
