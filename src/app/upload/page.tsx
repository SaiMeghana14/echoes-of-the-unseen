"use client";

import { useState } from "react";

export default function UploadPage() {
  const [title, setTitle] =
    useState("");

  const [description,
    setDescription] =
    useState("");

  const [region, setRegion] =
    useState("");

  const [category,
    setCategory] =
    useState("");

  const [story, setStory] =
    useState("");

  const [status,
    setStatus] =
    useState("");

  async function handleSubmit() {
    setStatus(
      "Preserving memory..."
    );

    const res = await fetch(
      "/api/upload-memory",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          region,
          category,
          story,
        }),
      }
    );

    const data = await res.json();

    console.log("Upload response:", data);
    
    if (data.success) {
      setStatus("✓ Memory Preserved");
    } else {
      setStatus(
        `Upload failed: ${data.error || "Unknown error"}`
      );
    }
  }

  return (
    <main className="max-w-4xl mx-auto p-10 text-white">

      <h1 className="text-5xl font-bold">
        Preserve Memory
      </h1>

      <div className="mt-8 space-y-4">

        <input
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }
          className="w-full p-4 rounded-xl bg-black/30"
        />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="w-full p-4 rounded-xl bg-black/30"
        />

        <input
          placeholder="Region"
          value={region}
          onChange={(e) =>
            setRegion(
              e.target.value
            )
          }
          className="w-full p-4 rounded-xl bg-black/30"
        />

        <input
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
          className="w-full p-4 rounded-xl bg-black/30"
        />

        <textarea
          placeholder="Story"
          value={story}
          onChange={(e) =>
            setStory(
              e.target.value
            )
          }
          className="w-full min-h-[200px] p-4 rounded-xl bg-black/30"
        />

        <button
          onClick={
            handleSubmit
          }
          className="
            px-8
            py-4
            rounded-xl
            bg-indigo-600
          "
        >
          Preserve Memory
        </button>

        <p>
          {status}
        </p>

      </div>
    </main>
  );
}
