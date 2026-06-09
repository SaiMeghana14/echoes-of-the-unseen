interface Props {
  response: string;
}

export default function OracleResponse({
  response,
}: Props) {
  if (!response) return null;

  return (
    <div
      className="
      mt-8
      rounded-3xl
      p-8
      border
      border-nebula/40
      bg-nebula/5
    "
    >
      <h2 className="text-xl font-bold mb-4">
        🌌 Oracle Prediction
      </h2>

      <p className="leading-8 text-gray-200">
        {response}
      </p>
    </div>
  );
}
