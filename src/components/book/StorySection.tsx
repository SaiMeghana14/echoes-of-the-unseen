interface StorySectionProps {
  stories: string[];
}

export default function StorySection({
  stories,
}: StorySectionProps) {
  return (
    <div className="glass rounded-3xl p-8">

      <h2 className="text-3xl font-bold mb-8">
        📚 Stories
      </h2>

      <div className="space-y-5">

        {stories.map((story) => (
          <div
            key={story}
            className="
            p-5
            rounded-xl
            bg-white/5
          "
          >
            {story}
          </div>
        ))}

      </div>

    </div>
  );
}
