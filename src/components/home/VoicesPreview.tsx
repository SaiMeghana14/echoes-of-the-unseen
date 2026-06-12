import Link from "next/link";
import { Mic } from "lucide-react";

export default function VoicesPreview() {
  return (
    <div
      className="
      rounded-3xl
      bg-gradient-to-br
      from-purple-500/10
      to-pink-500/10
      border border-white/10
      backdrop-blur-xl
      p-8
      hover:scale-[1.02]
      transition-all
      "
    >
      <div className="flex items-center gap-3 mb-6">
        <Mic className="text-purple-400" />
        <h3 className="text-3xl font-bold">
          Last Voices
        </h3>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-black/20 rounded-xl p-4">
          Stories: 5
        </div>

        <div className="bg-black/20 rounded-xl p-4">
          Wisdom: 7
        </div>

        <div className="bg-black/20 rounded-xl p-4">
          Traditions: 3
        </div>

        <div className="bg-black/20 rounded-xl p-4">
          Lessons: 4
        </div>
      </div>

      <Link href="/last-voices">
        <button
          className="
          mt-6
          w-full
          py-3
          rounded-xl
          bg-purple-400
          text-black
          font-bold
          "
        >
          Explore Voices
        </button>
      </Link>
    </div>
  );
}
