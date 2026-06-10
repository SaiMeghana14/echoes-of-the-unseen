"use client";

import { useState } from "react";

export default function BookGenerator() {
  const [title, setTitle] =
    useState("");

  const [book, setBook] =
    useState<any>(null);

  const generate =
    async () => {
      const res =
        await fetch(
          "/api/book",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({
                title,
              }),
          }
        );

      setBook(
        await res.json()
      );
    };

  return (
    <main className="p-10">

      <h1>
        Heritage Book Generator
      </h1>

      <input
        value={title}
        onChange={(e) =>
          setTitle(
            e.target.value
          )
        }
      />

      <button
        onClick={generate}
      >
        Generate
      </button>

      {book && (
        <pre>
          {JSON.stringify(
            book,
            null,
            2
          )}
        </pre>
      )}

    </main>
  );
}
