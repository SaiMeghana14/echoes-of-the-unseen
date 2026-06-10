"use client";

import { useState } from "react";

import BookPreview from "@/components/book/BookPreview";
import TimelineSection from "@/components/book/TimelineSection";
import StorySection from "@/components/book/StorySection";

export default function BookGeneratorPage() {
  const [title, setTitle] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [book, setBook] =
    useState<any>(null);

  const generateBook =
    async () => {
      if (!title.trim()) return;

      try {
        setLoading(true);

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

        const data =
          await res.json();

        setBook(data);
      } finally {
        setLoading(false);
      }
    };

  return (
    <main className="max-w-7xl mx-auto py-20 px-6">

      <h1 className="text-6xl font-bold">
        📖 Heritage Book Generator
      </h1>

      <p className="text-gray-400 mt-4">
        Turn stories, traditions,
        and memories into a
        preservation book.
      </p>

      <div className="mt-10 flex gap-4">

        <input
          value={title}
          onChange={(e) =>
            setTitle(
              e.target.value
            )
          }
          placeholder="Ainu Heritage Archive"
          className="
          flex-1
          p-4
          rounded-2xl
          bg-black/20
          border
          border-white/10
          "
        />

        <button
          onClick={
            generateBook
          }
          disabled={loading}
          className="
          px-8
          py-4
          rounded-2xl
          bg-memory
          text-black
          font-bold
          "
        >
          {loading
            ? "Generating..."
            : "Generate"}
        </button>

      </div>

      {book && (
        <div className="mt-12 space-y-8">

          <BookPreview
            title={book.title}
            summary={
              book.summary
            }
          />

          <TimelineSection
            timeline={
              book.timeline
            }
          />

          <StorySection
            stories={
              book.stories || []
            }
          />

        </div>
      )}

    </main>
  );
}
