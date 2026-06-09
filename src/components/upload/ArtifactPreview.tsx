interface ArtifactPreviewProps {
  name: string;
  size: number;
  type: string;
}

export default function ArtifactPreview({
  name,
  size,
  type,
}: ArtifactPreviewProps) {
  return (
    <div
      className="
      mt-6
      p-6
      rounded-3xl
      bg-white/5
      border
      border-white/10
    "
    >
      <h3 className="font-bold">
        Artifact Preview
      </h3>

      <div className="mt-4 space-y-2">
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>
          Size:
          {" "}
          {(size / 1024).toFixed(2)}
          {" "}
          KB
        </p>
      </div>
    </div>
  );
}
