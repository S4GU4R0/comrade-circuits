import { ReactNode } from "react";

import { Navbar } from "@components/Navbar";
import { SoundProvider } from "react-sounds";
export function Layout({ children }: { children: ReactNode }) {
  return (
    <SoundProvider
      // Optional: preload both built-in and custom sounds
      preload={["ui/button_hard", "notification/success"]}
      // Optional: set initial sound enabled state (defaults to true)
      initialEnabled={true}
    >
      <Navbar />
      <div className="container mx-auto px-4">{children}</div>
    </SoundProvider>
  );
}
