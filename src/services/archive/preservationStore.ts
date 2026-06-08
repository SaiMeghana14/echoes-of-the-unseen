import {
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";

import { db } from "../firebase/firestore";

export async function saveArtifact(
  artifact: any
) {
  const docRef = await addDoc(
    collection(db, "artifacts"),
    {
      ...artifact,
      createdAt: Timestamp.now(),
    }
  );

  return {
    id: docRef.id,
  };
}
