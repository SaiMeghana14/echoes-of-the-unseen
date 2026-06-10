"use client";

import { useState } from "react";

export default function DigitalFossils() {
  const [url, setUrl] =
    useState("");

  const [data, setData] =
    useState<any>(null);

  const analyze =
    async () => {
      const res =
        await fetch(
          "/api/fossils",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({
                url,
              }),
          }
        );

      setData(
        await res.json()
      );
    };

  return (
    <main className="p-10">

      <h1>
        Digital Fossils
      </h1>

      <input
        value={url}
        onChange={(e) =>
          setUrl(
            e.target.value
          )
        }
      />

      <button
        onClick={analyze}
      >
        Analyze
      </button>

      {data && (
        <pre>
          {JSON.stringify(
            data,
            null,
            2
          )}
        </pre>
      )}

    </main>
  );
}
