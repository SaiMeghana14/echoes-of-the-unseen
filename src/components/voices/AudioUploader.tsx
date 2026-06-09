"use client";

import { useState } from "react";

interface AudioUploaderProps {
  onUpload?: (file: File) => Promise<void>;
}

export default function AudioUploader({
  onUpload,
}: AudioUploaderProps) {
  const [file, setFile] =
    useState<File | null>(null);

  const [uploading, setUploading] =
    useState(false);

  const handleUpload = async () => {
    if (!file || !onUpload) return;

    setUploading(true);

    try {
      await onUpload(file);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className="
      border
      border-white/10
      rounded-3xl
      p-8
      bg-white/5
    "
    >
      <h2 className="text-2xl font-bold mb-4">
        🎙 Last Voices
      </h2>

      <p className="text-gray-400 mb-6">
        Upload elder interviews,
        oral histories, folk songs,
        or cultural recordings.
      </p>

      <input
        type="file"
        accept="audio/*"
        onChange={(e) =>
          setFile(
            e.target.files?.[0] || null
          )
        }
      />

      {file && (
        <div className="mt-4">
          <p>{file.name}</p>
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="
          mt-6
          px-6
          py-3
          bg-nebula
          rounded-xl
        "
      >
        {uploading
          ? "Analyzing..."
          : "Analyze Recording"}
      </button>
    </div>
  );
}
