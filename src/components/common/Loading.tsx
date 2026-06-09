export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-16 h-16 rounded-full border-4 border-nebula border-t-transparent animate-spin" />

      <p className="mt-4 text-gray-400">
        Searching Humanity's Memory...
      </p>
    </div>
  );
}
