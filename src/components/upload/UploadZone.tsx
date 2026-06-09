"use client";

import { useState } from "react";

interface UploadZoneProps {
  onFileSelect?: (file: File) => void;
}

export default function UploadZone({
  onFileSelect,
}: UploadZoneProps) {
  const [dragging, setDragging] =
    useState(false);

  const handleFile = (file: File) => {
    onFileSelect?.(file);
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() =>
        setDragging(false)
      }
      onDrop={(e) => {
        e.preventDefault();

        setDragging(false);

        const file =
          e.dataTransfer.files[0];

        if (file) {
          handleFile(file);
        }
      }}
      className={`
        border-2 border-dashed
        rounded-3xl
        p-16
        text-center
        transition-all

        ${
          dragging
            ? "border-nebula bg-nebula/10"
            : "border-gray-600"
        }
      `}
    >
      <div className="space-y-4">
        <div className="text-5xl">
          🌍
        </div>

        <h2 className="text-2xl font-bold">
          Upload an Artifact
        </h2>

        <p className="text-gray-400">
          Photos, Audio, Videos,
          Documents, Stories, Websites
        </p>

        <input
          type="file"
          className="hidden"
          id="artifact-upload"
          onChange={(e) => {
            const file =
              e.target.files?.[0];

            if (file) {
              handleFile(file);
            }
          }}
        />

        <label
          htmlFor="artifact-upload"
          className="
            inline-block
            px-6
            py-3
            bg-nebula
            rounded-xl
            cursor-pointer
          "
        >
          Choose File
        </label>
      </div>
    </div>
  );
}
