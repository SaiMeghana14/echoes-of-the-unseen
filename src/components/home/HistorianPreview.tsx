import Link from "next/link";
import { Clock3 } from "lucide-react";

export default function HistorianPreview() {
  return (
    <div
      className="
      rounded-3xl
      bg-gradient-to-br
      from-amber-500/10
      to-orange-500/10
      border border-white/10
      backdrop-blur-xl
      p-8
      hover:scale-[1.02]
      transition-all
      "
    >
      <div className="flex items-center gap-3 mb-6">
        <Clock3 className="text-amber-400" />
        <h3 className="text-3xl font-bold">
          Future Historian
        </h3>
      </div>

      <p className="text-white/70">
        Discover how future generations
        will interpret today's memories.
      </p>

      <div className="mt-6 p-5 rounded-2xl bg-black/20">
        "A historian in 2126 would view
        this as evidence of cultural resilience."
      </div>

      <Link href="/future-historian">
        <button
          className="
          mt-6
          w-full
          py-3
          rounded-xl
          bg-amber-400
          text-black
          font-bold
          "
        >
          Open Historian
        </button>
      </Link>
    </div>
  );
}
