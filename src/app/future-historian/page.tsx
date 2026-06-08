"use client";

import { useState } from "react";

export default function FutureHistorianPage() {
  const [result, setResult] = useState("");

  return (
    <main className="p-10 text-white">
      <h1 className="text-4xl font-bold">
        🔮 Future Historian
      </h1>

      <textarea
        className="w-full mt-6 p-4 rounded bg-black"
        placeholder="Paste a story or tradition..."
      />

      <button
        className="mt-4 px-6 py-3 bg-nebula rounded"
      >
        Analyze
      </button>

      {result && (
        <div className="mt-8">
          {result}
        </div>
      )}
    </main>
  );
}
