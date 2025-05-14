import { Link } from "@tanstack/react-router";

export function ErrorDisplay({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="bg-base-100 flex h-screen w-screen items-center justify-center">
      <div className="bg-base-300 rounded-lg p-8 shadow-2xl">
        <h1 className="text-error mb-4 text-3xl font-bold">Oops!</h1>
        <p className="text-base-content">An unexpected error occurred:</p>
        <pre className="bg-neutral text-error-content mt-4 rounded-md p-4 font-mono text-sm">
          {error?.message || "Unknown error"}
        </pre>
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => reset()}
            className="bg-primary text-primary-content hover:bg-primary/80 rounded px-4 py-2 font-bold transition-colors"
          >
            Try Again
          </button>
          <Link
            to="/"
            className="bg-neutral text-neutral-content hover:bg-neutral/80 rounded px-4 py-2 font-bold transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
