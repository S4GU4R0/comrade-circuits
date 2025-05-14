export function PendingComponent() {
  return (
    <div className="bg-base-100 flex h-screen w-screen items-center justify-center">
      <div className="bg-base-300 rounded-lg p-8 shadow-2xl">
        <div className="flex flex-col items-center">
          {/* Loading spinner */}
          <div className="border-primary mb-4 h-12 w-12 animate-spin rounded-full border-4 border-t-transparent" />

          {/* Pulsing text */}
          <h2 className="text-primary mb-4 animate-pulse text-2xl font-bold">
            Loading...
          </h2>

          {/* Loading description */}
          <p className="text-base-content mb-6 text-center">
            Please wait while we fetch your data.
          </p>
        </div>
      </div>
    </div>
  );
}
