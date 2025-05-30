import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

import { Layout } from "@/components/layout";

import { postsQueryOptions } from "../../queries/fetchPosts";

export const Route = createFileRoute("/forum/")({
  component: ForumIndex,
});

function ForumIndex() {
  const { data, isLoading, isError, error } = useQuery(postsQueryOptions);

  return (
    <Layout>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Forum</h1>
        <Link to="/forum/new">
          <button className="btn btn-primary">New Thread</button>
        </Link>
      </div>
      <div className="flex h-24 w-full items-center justify-center">
        <button className="mr-2 h-16 w-16 cursor-pointer border-[1px] border-blue-400 bg-blue-500 [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841] transition-all duration-150 select-none active:translate-y-2 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]">
          Help
        </button>
        <button
          // onMouseDown={() => {
          //   play();
          // }}
          className="mr-2 h-16 w-16 cursor-pointer border-[1px] border-blue-400 bg-blue-500 [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841] transition-all duration-150 select-none active:translate-y-2 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]"
        >
          Test
        </button>
      </div>
      {/* Thread list - mobile cards */}
      <div className="space-y-4 md:hidden">
        {isLoading && (
          <>
            <div className="skeleton h-16 w-full" />
            <div className="skeleton h-16 w-full" />
            <div className="skeleton h-16 w-full" />
          </>
        )}
        {isError && (
          <div className="alert alert-error">Error: {error.message}</div>
        )}
        {data && data.length === 0 && (
          <div className="alert alert-info">No threads found.</div>
        )}
        {data &&
          data.length > 0 &&
          data.map((thread) => (
            <Link
              key={thread.id}
              to="/forum/thread_$threadId"
              params={{ threadId: String(thread.id) }}
              className="block"
            >
              <div className="card bg-primary text-primary-content hover:bg-base-200 shadow transition">
                <div className="card-body">
                  <h2 className="card-title text-primary-content text-sm">
                    {thread.title}
                  </h2>
                  <div className="mb-1 text-xs font-bold text-black">
                    by User{thread.userId} • Replies:{" "}
                    {Math.floor(Math.random() * 20)}
                  </div>
                  <div className="text-md text-black">
                    Last post: Today by User{thread.userId}
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      {/* Thread list - desktop table */}
      <div className="hidden md:block">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Thread</th>
                <th>Author</th>
                <th>Replies</th>
                <th>Last Post</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan={4}>
                    <div className="skeleton h-8 w-full" />
                  </td>
                </tr>
              )}
              {isError && (
                <tr>
                  <td colSpan={4}>
                    <div className="alert alert-error">
                      Error: {error.message}
                    </div>
                  </td>
                </tr>
              )}
              {data && data.length === 0 && (
                <tr>
                  <td colSpan={4}>
                    <div className="alert alert-info">No threads found.</div>
                  </td>
                </tr>
              )}
              {data &&
                data.length > 0 &&
                data.map((thread) => (
                  <tr key={thread.id} className="hover">
                    <td>
                      <Link
                        to="/forum/thread_$threadId"
                        params={{ threadId: String(thread.id) }}
                        className="link link-hover text-primary"
                      >
                        {thread.title}
                      </Link>
                    </td>
                    <td>User{thread.userId}</td>
                    <td>{Math.floor(Math.random() * 20)}</td>
                    <td>Today by User{thread.userId}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Nested routes (e.g., modal for new thread) */}
      <Outlet />
    </Layout>
  );
}
