import Link from "next/link";

export default function VoicesPreview() {
  return (
    <section className="py-24 px-6">

      <div className="glass rounded-3xl p-10">

        <h2 className="text-5xl font-bold">
          🎙 Last Voices
        </h2>

        <p className="mt-6 text-gray-300">
          Preserve wisdom before it disappears forever.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mt-8">

          <div className="p-4 rounded-xl bg-white/5">
            Stories Found: 5
          </div>

          <div className="p-4 rounded-xl bg-white/5">
            Traditions: 3
          </div>

          <div className="p-4 rounded-xl bg-white/5">
            Wisdom: 7
          </div>

          <div className="p-4 rounded-xl bg-white/5">
            Life Lessons: 4
          </div>

        </div>

        <Link href="/last-voices">
          <button className="mt-8 px-6 py-3 bg-nebula rounded-xl">
            Explore Last Voices
          </button>
        </Link>

      </div>

    </section>
  );
}
