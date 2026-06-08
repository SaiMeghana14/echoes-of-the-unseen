"use client";

import { useState } from "react";

export default function OraclePage() {
  const [question, setQuestion] = useState("");

  return (
    <main className="p-10 text-white">
      <h1 className="text-4xl font-bold">
        🌌 Echo Oracle
      </h1>

      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full mt-6 p-4 rounded bg-black"
        placeholder="What is humanity forgetting today?"
      />

      <button
        className="mt-4 px-6 py-3 bg-nebula rounded"
      >
        Predict
      </button>
    </main>
  );
}
