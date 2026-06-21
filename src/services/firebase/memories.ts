import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firestore";

export async function saveMemory(
  memory: {
    title: string;
    description: string;
    region: string;
    category: string;
    story: string;
  }
) {
  const docRef = await addDoc(
    collection(db, "memories"),
    {
      ...memory,
      createdAt:
        serverTimestamp(),
    }
  );

  return docRef.id;
}

export async function getMemories() {
  const q = query(
    collection(db, "memories")
  );

  const snapshot =
    await getDocs(q);

  return snapshot.docs.map(
    (doc) => ({
      id: doc.id,
      ...doc.data(),
    })
  );
}
