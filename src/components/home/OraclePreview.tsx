import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function OraclePreview() {
  return (
    <div
      className="
      rounded-3xl
      bg-gradient-to-br
      from-indigo-500/10
      to-cyan-500/10
      border border-white/10
      backdrop-blur-xl
      p-8
      hover:scale-[1.02]
      transition-all
      duration-300
      "
    >
      <div className="flex items-center gap-3 mb-6">
        <Sparkles className="text-cyan-400" />
        <h3 className="text-3xl font-bold">
          Echo Oracle
        </h3>
      </div>

      <p className="text-white/70">
        Ask what humanity is forgetting today.
      </p>

      <div className="mt-6 p-5 rounded-2xl bg-black/20">
        Oral agricultural knowledge across
        Southeast Asia is disappearing faster
        than it is being preserved.
      </div>

      <Link href="/echo-oracle">
        <button
          className="
          mt-6
          w-full
          py-3
          rounded-xl
          bg-cyan-400
          text-black
          font-bold
          "
        >
          Explore Oracle
        </button>
      </Link>
    </div>
  );
}
