import { ReactNode } from "react";

import { Navbar } from "./Navbar";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">{children}</div>
    </>
  );
}
