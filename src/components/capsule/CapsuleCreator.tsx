"use client";

import { useState } from "react";

interface CapsuleCreatorProps {
  onCreate: (
    title: string,
    description: string,
    unlockDate: string
  ) => void;
}

export default function CapsuleCreator({
  onCreate,
}: CapsuleCreatorProps) {
  const [title, setTitle] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [
    unlockDate,
    setUnlockDate,
  ] = useState("");

  return (
    <div className="glass rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        ⏳ Create Time Capsule
      </h2>

      <input
        placeholder="Capsule Title"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="w-full p-4 rounded-xl bg-black/20 mb-4"
      />

      <textarea
        placeholder="Message for the future..."
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
        className="w-full min-h-[180px] p-4 rounded-xl bg-black/20 mb-4"
      />

      <input
        type="date"
        value={unlockDate}
        onChange={(e) =>
          setUnlockDate(
            e.target.value
          )
        }
        className="w-full p-4 rounded-xl bg-black/20"
      />

      <button
        onClick={() =>
          onCreate(
            title,
            description,
            unlockDate
          )
        }
        className="mt-6 px-6 py-3 bg-nebula rounded-xl"
      >
        Create Capsule
      </button>

    </div>
  );
}
