import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-7xl font-bold">
        404
      </h1>

      <p className="mt-4">
        This memory has been lost.
      </p>

      <Link
        href="/"
        className="mt-6 underline"
      >
        Return Home
      </Link>
    </main>
  );
}
