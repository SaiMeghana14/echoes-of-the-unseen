export default function LastVoicesPage() {
  return (
    <main className="p-10 text-white">
      <h1 className="text-4xl font-bold">
        🎙 Last Voices
      </h1>

      <p className="mt-4">
        Upload elder recordings and preserve wisdom.
      </p>

      <input
        type="file"
        accept="audio/*"
        className="mt-6"
      />
    </main>
  );
}
