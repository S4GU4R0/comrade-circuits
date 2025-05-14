import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <div className="bg-base-100 flex h-screen w-screen items-center justify-center">
      <div className="bg-base-300 rounded-lg p-8 shadow-2xl">
        <h1 className="text-warning mb-4 text-3xl font-bold">
          404 - Not Found
        </h1>
        <p className="text-base-content mb-6">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="bg-primary text-primary-content hover:bg-primary/80 rounded px-4 py-2 font-bold transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
