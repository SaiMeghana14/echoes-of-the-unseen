import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firestore";

export interface Memory {
  title: string;
  description: string;
  region: string;
  category: string;
  story: string;

  latitude: number;
  longitude: number;
}

export async function saveMemory(
  memory: Memory
) {
  const docRef = await addDoc(
    collection(db, "memories"),
    {
      title: memory.title,
      description:
        memory.description,
      region: memory.region,
      category:
        memory.category,
      story: memory.story,

      latitude:
        memory.latitude,
      longitude:
        memory.longitude,

      createdAt:
        serverTimestamp(),
    }
  );

  return docRef.id;
}

export async function getMemories() {
  const q = query(
    collection(db, "memories"),
    orderBy(
      "createdAt",
      "desc"
    )
  );

  const snapshot =
    await getDocs(q);

  return snapshot.docs.map(
    (doc) => ({
      id: doc.id,
      ...(doc.data() as Memory),
    })
  );
}
