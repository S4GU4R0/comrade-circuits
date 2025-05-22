import { useState } from "react";

import {
  createFileRoute,
  useNavigate,
  useParams,
} from "@tanstack/react-router";

export const Route = createFileRoute("/forum/thread_$threadId/reply")({
  component: ReplyModal,
});

function ReplyModal() {
  const navigate = useNavigate();
  const { threadId } = useParams({ from: "/forum/thread_$threadId/reply" });
  const [content, setContent] = useState("");

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="mb-4 text-lg font-bold">Reply to Thread</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: Connect this to Firebase/Firestore to save the reply
            // Example: await addReplyToThread(threadId, content)
            // TODO: Show a success message and handle errors
            // Simple demo: just close the modal and go back to the thread
            navigate({
              to: "/forum/thread_$threadId",
              params: { threadId: String(threadId) },
            });
          }}
          className="space-y-4"
        >
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Your reply..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <div className="modal-action">
            <button
              type="button"
              className="btn"
              onClick={() =>
                navigate({
                  to: "/forum/thread_$threadId",
                  params: { threadId: String(threadId) },
                })
              }
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Post Reply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
