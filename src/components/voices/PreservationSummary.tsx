interface Props {
  summary: string;
}

export default function PreservationSummary({
  summary,
}: Props) {
  return (
    <div
      className="
      mt-8
      p-8
      rounded-3xl
      bg-nebula/5
      border
      border-nebula/20
    "
    >
      <h2 className="text-2xl font-bold mb-4">
        🌍 Preservation Summary
      </h2>

      <p className="leading-8">
        {summary}
      </p>
    </div>
  );
}
