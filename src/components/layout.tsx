import { ReactNode } from "react";

import { Navbar } from "@components/Navbar";
export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-screen">{children}</div>
    </>
  );
}
