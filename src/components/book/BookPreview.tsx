interface BookPreviewProps {
  title: string;
  summary: string;
}

export default function BookPreview({
  title,
  summary,
}: BookPreviewProps) {
  return (
    <div
      className="
      glass
      rounded-3xl
      p-8
    "
    >
      <h1 className="text-4xl font-bold">
        📖 {title}
      </h1>

      <p className="mt-6 text-gray-300">
        {summary}
      </p>
    </div>
  );
}
