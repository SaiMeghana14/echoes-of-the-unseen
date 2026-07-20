interface StorySectionProps {
  stories?: string[];
}

export default function StorySection({
  stories = [],
}: StorySectionProps) {
  return (
    <section className="glass rounded-3xl p-8">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-12 h-12 rounded-2xl bg-memory/20 flex items-center justify-center text-2xl">
          📚
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            Stories & Oral Traditions
          </h2>

          <p className="text-gray-400">
            Narratives passed through generations.
          </p>
        </div>

      </div>

      {stories.length === 0 ? (
        <p className="text-gray-500">
          No stories available.
        </p>
      ) : (
        <div className="space-y-5">

          {stories.map((story, index) => (

            <div
              key={index}
              className="rounded-2xl bg-white/5 border border-white/10 p-6"
            >
              <h3 className="font-semibold text-memory mb-3">
                Story {index + 1}
              </h3>

              <p className="text-gray-300 leading-8">
                {story}
              </p>
            </div>

          ))}

        </div>
      )}

    </section>
  );
}
