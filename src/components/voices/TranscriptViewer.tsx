interface TranscriptViewerProps {
  transcript: string;
}

export default function TranscriptViewer({
  transcript,
}: TranscriptViewerProps) {
  return (
    <div
      className="
      mt-8
      p-8
      rounded-3xl
      bg-white/5
      border
      border-white/10
    "
    >
      <h2 className="text-xl font-bold mb-4">
        Transcript
      </h2>

      <div className="leading-8 text-gray-300">
        {transcript}
      </div>
    </div>
  );
}
