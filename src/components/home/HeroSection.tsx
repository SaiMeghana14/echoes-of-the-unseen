import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      <div className="max-w-5xl">

        <div className="bg-nebula text-white p-10 rounded-xl mb-10">
          Nebula Test
        </div>

        <h1 className="text-7xl font-bold leading-tight">
          Echoes of the Unseen
        </h1>

        <p className="text-2xl text-memory mt-6">
          What Humanity Forgets, We Remember.
        </p>

        <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-lg">
          Discover, predict, and preserve endangered cultures,
          traditions, languages, stories, communities, and
          digital artifacts before they disappear forever.
        </p>

        <div className="flex justify-center gap-4 mt-10">
          <Link href="/upload">
            <button className="px-8 py-4 rounded-2xl bg-nebula">
              Start Preserving
            </button>
          </Link>

          <Link href="/echo-oracle">
            <button className="px-8 py-4 rounded-2xl border border-white/20 flex items-center gap-2">
              Open Oracle
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
