"use client";

import { useState } from "react";

export default function TimeCapsule() {
  const [title, setTitle] =
    useState("");

  const [
    unlockDate,
    setUnlockDate
  ] = useState("");

  const [capsule, setCapsule] =
    useState<any>(null);

  const create =
    async () => {
      const res =
        await fetch(
          "/api/capsule",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body:
              JSON.stringify({
                title,
                unlockDate,
              }),
          }
        );

      setCapsule(
        await res.json()
      );
    };

  return (
    <main className="p-10">

      <h1>
        Time Capsule
      </h1>

      <input
        value={title}
        onChange={(e) =>
          setTitle(
            e.target.value
          )
        }
      />

      <input
        type="date"
        value={unlockDate}
        onChange={(e) =>
          setUnlockDate(
            e.target.value
          )
        }
      />

      <button
        onClick={create}
      >
        Create Capsule
      </button>

      {capsule && (
        <pre>
          {JSON.stringify(
            capsule,
            null,
            2
          )}
        </pre>
      )}

    </main>
  );
}
