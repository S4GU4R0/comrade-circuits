import { useSuspenseQuery } from "@tanstack/react-query";
import { createLazyFileRoute, Link } from "@tanstack/react-router";

import { postsQueryOptions } from "@/queries/fetchPosts";

export const Route = createLazyFileRoute("/demo")({
  component: TanStackDemo,
});

function TanStackDemo() {
  const { data } = useSuspenseQuery(postsQueryOptions);

  return (
    <div className="flex h-fit flex-col items-center justify-center">
      <h1 className="text-primary mb-8 text-4xl font-extrabold">
        TanStack Router & Query Demo
      </h1>
      <p className="mb-4 text-lg">
        This page demonstrates the power of TanStack Router and Query.
      </p>
      <div className="mb-8">
        <Link
          to="/"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
      <h2 className="text-primary mb-4 text-2xl font-bold">Posts:</h2>
      <ul className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3 lg:px-8 xl:grid-cols-4 xl:px-16 2xl:grid-cols-4 2xl:gap-8 2xl:px-36">
        {data?.map((post) => (
          <li
            key={post.id}
            className="bg-base-300 mb-2 rounded-md p-4 shadow-md"
          >
            <h3 className="text-primary text-xl font-semibold">{post.title}</h3>
            <p className="text-base-content">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
