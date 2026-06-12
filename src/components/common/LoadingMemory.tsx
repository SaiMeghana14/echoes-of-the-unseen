"use client";

export default function LoadingMemory() {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-center
      py-12
    "
    >
      <div
        className="
        h-16
        w-16
        rounded-full
        border-4
        border-cyan-400
        border-t-transparent
        animate-spin
      "
      />

      <p className="mt-4 text-white/70">
        Preserving Memory...
      </p>
    </div>
  );
}
