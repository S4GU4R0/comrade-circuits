import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/forum/new")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container mx-auto flex justify-center p-4">
      <div className="card bg-base-100 w-full max-w-lg shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4">Create New Thread</h2>
          <form className="space-y-4">
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Thread Title"
              required
            />
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Thread content..."
              required
            />
            <div className="flex justify-end">
              <button type="submit" className="btn btn-primary">
                Post Thread
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
