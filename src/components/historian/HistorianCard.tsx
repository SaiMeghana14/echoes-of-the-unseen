interface Props {
  title: string;
  content: string;
}

export default function HistorianCard({
  title,
  content,
}: Props) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-memory/30
      bg-memory/5
      p-8
    "
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">
          🔮
        </span>

        <h2 className="text-xl font-bold">
          {title}
        </h2>
      </div>

      <p className="text-gray-300 leading-8">
        {content}
      </p>
    </div>
  );
}
