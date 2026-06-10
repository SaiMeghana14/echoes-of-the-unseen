"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">
        Something went wrong
      </h1>

      <p className="mt-4">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="mt-6 px-6 py-3 rounded-xl bg-white text-black"
      >
        Retry
      </button>
    </div>
  );
}
