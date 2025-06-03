import Themed3DButton from "@components/Themed3DButton";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

import { Layout } from "@/components/layout";

import { postsQueryOptions } from "../../queries/fetchPosts";

export const Route = createFileRoute("/forum/")({
  component: ForumIndex,
});

function ForumLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary/30 border-neutral container mx-auto rounded-t-4xl border-t-2 border-r-1 border-l-1 px-4 pt-8">
      {children}
    </div>
  );
}

function ForumHeader() {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Forum</h1>
      <Link to="/forum/new">
        <Themed3DButton
          color="neutral"
          className="font-heading text-neutral-content text-xs uppercase"
        >
          New Thread
        </Themed3DButton>
      </Link>
    </div>
  );
}

function ForumActions() {
  // TODO: add functionality to these category buttons. it should preferably be a subroute to the forum route.
  return (
    <div className="flex h-24 w-full items-center justify-center">
      <div className="mr-2 font-bold">Categories</div>
      <Themed3DButton
        color="secondary"
        className="text-secondary-content h-10 w-1/2 text-xs font-bold uppercase"
      >
        HELP
      </Themed3DButton>
      <Themed3DButton
        color="accent"
        className="text-secondary-content h-10 w-1/2 text-xs font-bold uppercase"
      >
        FVCK ZVCK
      </Themed3DButton>
    </div>
  );
}

import type { Post } from "../../queries/fetchPosts";

type ThreadListProps = {
  data: Post[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
};

function ForumThreadListMobile({
  data,
  isLoading,
  isError,
  error,
}: ThreadListProps) {
  return (
    <div className="space-y-4 md:hidden">
      {isLoading && (
        <>
          <div className="skeleton h-16 w-full" />
          <div className="skeleton h-16 w-full" />
          <div className="skeleton h-16 w-full" />
        </>
      )}
      {isError && (
        <div className="alert alert-error">
          Error: {error instanceof Error ? error.message : String(error)}
        </div>
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
            <div className="card bg-primary text-primary-content hover:bg-base-200 border-neutral border-2 shadow transition">
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
  );
}

function ForumThreadListDesktop({
  data,
  isLoading,
  isError,
  error,
}: ThreadListProps) {
  return (
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
                    Error:{" "}
                    {error instanceof Error ? error.message : String(error)}
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
  );
}

function ForumIndex() {
  const { data, isLoading, isError, error } = useQuery(postsQueryOptions);

  return (
    <Layout>
      <ForumLayout>
        <ForumHeader />
        <ForumActions />
        <ForumThreadListMobile
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
        <ForumThreadListDesktop
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
        <Outlet />
      </ForumLayout>
    </Layout>
  );
}
