"use client";

import { useState } from "react";

export default function UploadPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [region, setRegion] =
    useState("");
  const [category, setCategory] =
    useState("");
  const [story, setStory] =
    useState("");

  const [latitude, setLatitude] =
    useState("");

  const [longitude, setLongitude] =
    useState("");

  const [status, setStatus] =
    useState("");

  async function handleSubmit() {
    if (
      !title ||
      !description ||
      !region ||
      !category ||
      !story ||
      !latitude ||
      !longitude
    ) {
      setStatus(
        "Please fill all fields."
      );
      return;
    }

    setStatus("Preserving memory...");

    try {
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
            latitude:
              Number(latitude),
            longitude:
              Number(longitude),
          }),
        }
      );

      const data =
        await res.json();

      console.log(
        "Upload Response:",
        data
      );

      if (data.success) {
        setStatus(
          "✓ Memory Preserved Successfully!"
        );

        setTitle("");
        setDescription("");
        setRegion("");
        setCategory("");
        setStory("");
        setLatitude("");
        setLongitude("");
      } else {
        setStatus(
          `Upload Failed: ${
            data.error ??
            "Unknown error"
          }`
        );
      }
    } catch (err) {
      console.error(err);

      setStatus(
        "Upload Failed. Please try again."
      );
    }
  }

  return (
    <main className="max-w-5xl mx-auto p-10 text-white">

      <h1 className="text-5xl font-bold">
        🌍 Preserve Human Memory
      </h1>

      <p className="mt-3 text-white/60">
        Document endangered cultures,
        traditions, stories and artifacts
        before they disappear forever.
      </p>

      <div className="mt-10 space-y-5">

        <input
          placeholder="Memory Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full rounded-xl bg-black/30 border border-white/10 p-4"
        />

        <input
          placeholder="Short Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="w-full rounded-xl bg-black/30 border border-white/10 p-4"
        />

        <input
          placeholder="Region / Country"
          value={region}
          onChange={(e) =>
            setRegion(
              e.target.value
            )
          }
          className="w-full rounded-xl bg-black/30 border border-white/10 p-4"
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
          className="w-full rounded-xl bg-black/30 border border-white/10 p-4"
        >
          <option value="">
            Select Category
          </option>

          <option value="artifact">
            Artifact
          </option>

          <option value="language">
            Language
          </option>

          <option value="tradition">
            Tradition
          </option>

          <option value="festival">
            Festival
          </option>

          <option value="story">
            Story
          </option>

          <option value="craft">
            Craft
          </option>

          <option value="music">
            Music
          </option>

          <option value="folklore">
            Folklore
          </option>
        </select>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            type="number"
            step="any"
            placeholder="Latitude"
            value={latitude}
            onChange={(e) =>
              setLatitude(
                e.target.value
              )
            }
            className="rounded-xl bg-black/30 border border-white/10 p-4"
          />

          <input
            type="number"
            step="any"
            placeholder="Longitude"
            value={longitude}
            onChange={(e) =>
              setLongitude(
                e.target.value
              )
            }
            className="rounded-xl bg-black/30 border border-white/10 p-4"
          />

        </div>

        <textarea
          placeholder="Write the cultural story here..."
          value={story}
          onChange={(e) =>
            setStory(
              e.target.value
            )
          }
          className="w-full min-h-[220px] rounded-xl bg-black/30 border border-white/10 p-4"
        />

        <button
          onClick={handleSubmit}
          className="w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 transition py-4 font-semibold"
        >
          Preserve Memory
        </button>

        {status && (
          <div className="rounded-xl bg-black/30 border border-white/10 p-4 text-center">
            {status}
          </div>
        )}

      </div>
    </main>
  );
}
