import Link from "next/link";

export default function ConstellationPreview() {
  return (
    <section className="py-24 px-6">

      <div className="glass rounded-3xl p-10">

        <h2 className="text-5xl font-bold">
          🌠 Memory Constellation
        </h2>

        <p className="mt-6 text-gray-300">
          Every memory becomes a star.
          Every story becomes a constellation.
        </p>

        <div className="h-[300px] mt-10 rounded-3xl border border-white/10 flex items-center justify-center">
          🌌 Interactive Heritage Galaxy Preview
        </div>

        <Link href="/constellation">
          <button className="mt-8 px-6 py-3 bg-nebula rounded-xl">
            Explore Galaxy
          </button>
        </Link>

      </div>

    </section>
  );
}
