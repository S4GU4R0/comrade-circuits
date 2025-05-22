import { useState } from "react";

import {
  createFileRoute,
  Link,
  Outlet,
  useParams,
} from "@tanstack/react-router";

export const Route = createFileRoute("/forum/thread_$threadId")({
  component: ThreadView,
});

function ReactionButtons({
  reactions,
  onReact,
  onAddReaction,
  allowedReactions,
  userVote,
  onVote,
}: {
  reactions: Record<string, number>;
  onReact: (type: string) => void;
  onAddReaction: (type: string) => void;
  allowedReactions?: string[];
  userVote?: "upvote" | "downvote" | null;
  onVote?: (type: "upvote" | "downvote" | null) => void;
}) {
  // TODO: Connect reactions to Firebase and associate with the user's account
  // When a reaction is added or removed, update the backend and user data accordingly
  const allReactionTypes = [
    { type: "upvote", label: "👍" },
    { type: "downvote", label: "👎" },
    { type: "markAsSolution", label: "✅" },
    { type: "thankYou", label: "🙏" },
  ];
  const reactionTypes = allowedReactions
    ? allReactionTypes.filter((r) => allowedReactions.includes(r.type))
    : allReactionTypes;
  const usedReactions = reactionTypes.filter(
    (r) => reactions[r.type] && reactions[r.type] > 0,
  );
  const unusedReactions = reactionTypes.filter(
    (r) => !reactions[r.type] || reactions[r.type] === 0,
  );
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="mt-2 flex items-center gap-2">
      {usedReactions.map((r) => (
        <button
          key={r.type}
          className={`btn btn-xs btn-ghost${
            (r.type === "upvote" && userVote === "upvote") ||
            (r.type === "downvote" && userVote === "downvote")
              ? "btn-active"
              : ""
          }`}
          type="button"
          onClick={() => {
            if ((r.type === "upvote" || r.type === "downvote") && onVote) {
              if (userVote === r.type) {
                onVote(null);
              } else {
                onVote(r.type as "upvote" | "downvote");
              }
            } else {
              onReact(r.type);
            }
          }}
        >
          {r.label} {reactions[r.type]}
        </button>
      ))}
      {unusedReactions.length > 0 && (
        <div className="relative">
          <button
            className="btn btn-xs btn-ghost"
            type="button"
            onClick={() => setShowMenu((v) => !v)}
          >
            +
          </button>
          {showMenu && (
            <div className="bg-base-100 absolute z-10 mt-1 flex flex-col rounded border p-1 shadow">
              {unusedReactions.map((r) => (
                <button
                  key={r.type}
                  className="btn btn-xs btn-ghost justify-start"
                  type="button"
                  onClick={() => {
                    if (
                      (r.type === "upvote" || r.type === "downvote") &&
                      onVote
                    ) {
                      onVote(r.type as "upvote" | "downvote");
                    } else {
                      onAddReaction(r.type);
                    }
                    setShowMenu(false);
                  }}
                >
                  {r.label} {r.type}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ThreadView() {
  const { threadId } = useParams({ from: "/forum/thread_$threadId" });
  // TODO: Fetch and update reactions from Firebase for this thread and its replies
  // TODO: Use the authenticated user's account to track their reactions
  // Demo state for reactions
  // const userId = 1; // hardcoded demo user
  const [thread /*, setThread */] = useState({
    author: "ThreadAuthor",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toLocaleString(), // 2 hours ago
    title: "Thread Title Placeholder",
    content: "Thread content placeholder for thread ID: " + threadId,
    reactions: {} as Record<string, number>,
  });
  const [threadReactions, setThreadReactions] = useState<
    Record<string, number>
  >({});
  const [threadUserVote, setThreadUserVote] = useState<
    "upvote" | "downvote" | null
  >(null);
  const [replies, setReplies] = useState([
    {
      id: 1,
      author: "User1",
      createdAt: new Date(Date.now() - 1000 * 60 * 60).toLocaleString(), // 1 hour ago
      content: "Reply 1 placeholder",
      reactions: {} as Record<string, number>,
      userVote: null as "upvote" | "downvote" | null,
    },
    {
      id: 2,
      author: "User2",
      createdAt: new Date(Date.now() - 1000 * 60 * 30).toLocaleString(), // 30 min ago
      content: "Reply 2 placeholder",
      reactions: {} as Record<string, number>,
      userVote: null as "upvote" | "downvote" | null,
    },
  ]);

  const handleThreadVote = (type: "upvote" | "downvote" | null) => {
    // TODO: Update thread vote in Firebase and associate with the user's account
    setThreadReactions((prev) => {
      const next = { ...prev };
      if (threadUserVote) {
        next[threadUserVote] = Math.max((next[threadUserVote] || 1) - 1, 0);
      }
      if (type) {
        next[type] = (next[type] || 0) + 1;
      }
      return next;
    });
    setThreadUserVote(type);
  };

  const handleThreadReact = (type: string) => {
    // TODO: Remove thread reaction in Firebase and associate with the user's account
    setThreadReactions((prev) => {
      const next = { ...prev };
      next[type] = Math.max((next[type] || 1) - 1, 0);
      return next;
    });
  };

  const handleThreadAddReaction = (type: string) => {
    setThreadReactions((prev) => ({ ...prev, [type]: 1 }));
  };

  const handleReplyVote = (
    replyId: number,
    type: "upvote" | "downvote" | null,
  ) => {
    // TODO: Update reply vote in Firebase and associate with the user's account
    setReplies((prev) =>
      prev.map((reply) => {
        if (reply.id !== replyId) return reply;
        const nextReactions = { ...reply.reactions };
        if (reply.userVote) {
          nextReactions[reply.userVote] = Math.max(
            (nextReactions[reply.userVote] || 1) - 1,
            0,
          );
        }
        if (type) {
          nextReactions[type] = (nextReactions[type] || 0) + 1;
        }
        return { ...reply, reactions: nextReactions, userVote: type };
      }),
    );
  };

  const handleReplyReact = (replyId: number, type: string) => {
    // TODO: Remove reply reaction in Firebase and associate with the user's account
    setReplies((prev) =>
      prev.map((reply) =>
        reply.id === replyId
          ? {
              ...reply,
              reactions: {
                ...reply.reactions,
                [type]: Math.max((reply.reactions[type] || 1) - 1, 0),
              },
            }
          : reply,
      ),
    );
  };

  const handleReplyAddReaction = (replyId: number, type: string) => {
    setReplies((prev) =>
      prev.map((reply) =>
        reply.id === replyId
          ? {
              ...reply,
              reactions: {
                ...reply.reactions,
                [type]: 1,
              },
            }
          : reply,
      ),
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-base-100 mb-4 shadow">
        <div className="card-body">
          <div className="text-base-content/70 mb-1 text-xs">
            {thread.author} • {thread.createdAt}
          </div>
          <h2 className="card-title text-primary-content">{thread.title}</h2>
          <p className="text-base-content mb-2">{thread.content}</p>
          <ReactionButtons
            reactions={threadReactions}
            onReact={handleThreadReact}
            onAddReaction={handleThreadAddReaction}
            allowedReactions={["upvote", "downvote", "thankYou"]}
            userVote={threadUserVote}
            onVote={handleThreadVote}
          />
        </div>
      </div>
      <div className="mb-4 flex justify-end">
        <Link to="/forum/thread_$threadId/reply" params={{ threadId }}>
          <button className="btn btn-secondary">Reply</button>
        </Link>
      </div>
      <div className="space-y-4">
        {/* Replies placeholder */}
        {replies.map((reply) => (
          <div className="card bg-base-200 shadow" key={reply.id}>
            <div className="card-body">
              <div className="text-base-content/70 mb-1 text-xs">
                {reply.author} • {reply.createdAt}
              </div>
              <p className="text-base-content mb-2">{reply.content}</p>
              <ReactionButtons
                reactions={reply.reactions}
                onReact={(type) => handleReplyReact(reply.id, type)}
                onAddReaction={(type) => handleReplyAddReaction(reply.id, type)}
                allowedReactions={[
                  "upvote",
                  "downvote",
                  "markAsSolution",
                  "thankYou",
                ]}
                userVote={reply.userVote}
                onVote={(type) => handleReplyVote(reply.id, type)}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Nested routes (e.g., modal for reply) */}
      <Outlet />
    </div>
  );
}
