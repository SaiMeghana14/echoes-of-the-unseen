interface Story {
    title: string;
    type: string;
    content: string;
}

interface StorySectionProps {
  stories?: Story[];
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

              <div className="space-y-3">

                <div className="flex items-center gap-3">
              
                  <h3 className="text-xl font-semibold text-white">
                    {story.title}
                  </h3>
              
                  <span
                    className="
                      text-xs
                      px-3
                      py-1
                      rounded-full
                      bg-memory/20
                      text-memory
                    "
                  >
                    {story.type}
                  </span>
              
                </div>
              
                <p className="text-gray-300 leading-8">
                  {story.content}
                </p>
              
              </div>
            </div>

          ))}

        </div>
      )}

    </section>
  );
}
