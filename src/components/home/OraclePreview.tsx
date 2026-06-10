import Link from "next/link";

export default function OraclePreview() {
  return (
    <section className="py-24 px-6">

      <div className="glass rounded-3xl p-10">

        <h2 className="text-5xl font-bold">
          🔮 Echo Oracle
        </h2>

        <p className="mt-6 text-gray-300">
          Ask:
          "What is humanity forgetting today?"
        </p>

        <div className="mt-8 p-6 rounded-2xl bg-nebula/10 border border-nebula/20">
          Oral agricultural knowledge across Southeast Asia
          is disappearing faster than it is being preserved.
        </div>

        <Link href="/echo-oracle">
          <button className="mt-8 px-6 py-3 bg-nebula rounded-xl">
            Explore Oracle
          </button>
        </Link>

      </div>

    </section>
  );
}
