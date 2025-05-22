# Forum Implementation Plan

## Existing Technologies & Structure

- **Frontend:** React (TypeScript)
- **Routing:** TanStack Router (`@tanstack/react-router`)
- **Data Fetching/State:** TanStack Query (`@tanstack/react-query`)
- **Backend/Storage:** Firebase (Firestore, Auth, Storage)
- **Styling:** Tailwind CSS (with daisyUI; prioritize daisyUI components over plain Tailwind classes)
- **Component Structure:** Modular, with a `components/` directory
- **Testing:** React Testing Library, custom test utils

---

## Forum Feature Plan

### 1. Data Model (Firestore)

- **Collections:**
  - `forums` (optional, for categories)
  - `threads`
    - Fields: `title`, `createdBy`, `createdAt`, `lastUpdated`, `categoryId` (optional)
  - `posts`
    - Fields: `threadId`, `content`, `createdBy`, `createdAt`, `parentPostId` (for replies)
- **Users:** Use Firebase Auth for user identity.

### 2. Authentication

- Use existing Firebase Auth setup.
- Require login for posting/replying; allow read-only for guests.

### 3. Routes

- `/forum` — Forum index (list threads, "New Thread" button)
- `/forum/thread/:threadId` — Thread view (list posts, reply form)
- **Nested/modal routes:**
  - `/forum/new` — New thread form as a modal or drawer over the thread list (not a standalone page)
  - `/forum/thread/:threadId/reply/:postId?` — Reply form as a modal or inline within the thread view

### 4. Components

- **ForumIndex:** List threads, paginate, link to thread view
- **ThreadView:** Show original post and replies, nested if needed
- **PostForm:** For new threads and replies
- **ThreadListItem, PostItem:** Reusable display components
- **AuthGuard:** Wrapper for protected actions

### 5. Data Fetching

- Use TanStack Query for all Firestore reads/writes (custom hooks)
- Example hooks: `useThreadsQuery`, `useThreadPostsQuery`, `useCreateThreadMutation`, etc.

### 6. UI/UX

- **Mobile-first and fully responsive:** The forum must be designed with a mobile-first approach and ensure a seamless experience across all device sizes.
- **Use modals/drawers for forms:** Thread creation and reply forms should appear as modals or drawers, keeping users in context (thread list or thread view) rather than navigating away.
- **Prioritize daisyUI:** Use daisyUI components for UI elements whenever possible, only using plain Tailwind classes when daisyUI does not provide a suitable component.
- Use Tailwind for styling, match existing design
- Integrate with existing `Navbar` and layout
- Error/loading states using `error-display` and `pending-component`

### 7. Testing

- Add tests for forum components and hooks using existing test utils

---

## Next Steps

1. Set up Firestore collections and security rules (if not already done)
2. Create forum routes in `src/routes/forum/`
3. Build forum components in `src/components/`
4. Implement data fetching/mutation hooks in `src/queries/`
5. Integrate authentication checks for posting
6. Style and test the UI
