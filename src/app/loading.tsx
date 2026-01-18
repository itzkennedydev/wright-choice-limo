export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-900" />
        <p className="text-gray-500">Loading...</p>
      </div>
    </div>
  );
}
