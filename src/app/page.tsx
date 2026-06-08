import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-space text-white">
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold mb-6">
          🌌 Echoes of the Unseen
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl text-center">
          What Humanity Forgets, We Remember.
        </p>

        <div className="mt-10 flex gap-4">
          <Link href="/upload">
            <button className="px-6 py-3 rounded-xl bg-nebula">
              Start Preserving
            </button>
          </Link>

          <Link href="/echo-oracle">
            <button className="px-6 py-3 rounded-xl border">
              Open Oracle
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
