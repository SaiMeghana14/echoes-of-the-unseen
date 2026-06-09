interface UploadProgressProps {
  progress: number;
}

export default function UploadProgress({
  progress,
}: UploadProgressProps) {
  return (
    <div className="mt-6">
      <div
        className="
        h-4
        bg-white/10
        rounded-full
        overflow-hidden
      "
      >
        <div
          style={{
            width: `${progress}%`,
          }}
          className="
          h-full
          bg-nebula
          transition-all
        "
        />
      </div>

      <p className="mt-2 text-sm">
        {progress}% uploaded
      </p>
    </div>
  );
}
