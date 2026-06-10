import Link from "next/link";

export default function HistorianPreview() {
  return (
    <section className="py-24 px-6">

      <div className="memory-card p-10">

        <h2 className="text-5xl font-bold">
          🕰 Future Historian
        </h2>

        <p className="mt-6 text-gray-300">
          Upload a recipe, tradition, website, or story.
        </p>

        <div className="mt-8 p-6 rounded-2xl bg-white/5">
          "A historian in 2126 would consider this significant
          because it reveals how communities preserved identity
          during rapid technological change."
        </div>

        <Link href="/future-historian">
          <button className="mt-8 px-6 py-3 bg-memory text-black rounded-xl">
            Open Historian
          </button>
        </Link>

      </div>

    </section>
  );
}
