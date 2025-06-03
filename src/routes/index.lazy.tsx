import { createLazyFileRoute } from "@tanstack/react-router";

import { Layout } from "@/components/layout";
import { TechCard } from "@/components/tech-cards";

import {
  CallMeIcon,
  ChatIcon,
  FilingIcon,
  SailboatIcon,
  VoteIcon,
} from "../components/icons";

export const Route = createLazyFileRoute("/")({
  component: WelcomeComponent,
});

function WelcomeComponent() {
  return (
    <Layout>
      <section className="bg-base-200 md:mt-0 md:flex md:items-start md:justify-between">
        <div className="hero mx-0 flex min-h-[85vh] w-full flex-col items-center justify-center md:mt-0 md:w-1/2">
          <div className="my-auto -ml-5 flex w-[80%] flex-col justify-center md:my-0">
            <div className="border-box text-primary font-heading border-neutral shadow-4xl mb-8 box-content h-80 w-full border-t-12 border-r-6 border-b-24 border-l-18 uppercase shadow-black md:w-96">
              <h1 className="flex flex-nowrap pl-4 text-8xl md:text-8xl">
                {"Comr".split("").map((character, index) => (
                  <span
                    className="text-primary -ml-5 inline-block"
                    style={{ zIndex: ("Comrade".length - index) * 10 }}
                    key={character + index + "--comr"}
                  >
                    {character}
                  </span>
                ))}
              </h1>
              <h1 className="flex flex-nowrap pl-4 text-8xl md:text-8xl">
                {"ade".split("").map((character, index) => (
                  <span
                    className="text-primary -ml-5 inline-block"
                    style={{ zIndex: ("Comrade".length - index) * 10 }}
                    key={character + index + "--ade"}
                  >
                    {character}
                  </span>
                ))}
                <span className="inline-block text-7xl md:text-6xl">✊</span>
              </h1>
              <h1 className="flex flex-nowrap pl-4 text-8xl md:text-8xl">
                {"Circ".split("").map((character, index) => (
                  <span
                    className="text-secondary -ml-5 inline-block"
                    style={{ zIndex: ("Comrade".length - index) * 10 }}
                    key={character + index + "--circ"}
                  >
                    {character}
                  </span>
                ))}
              </h1>
              <h1 className="flex flex-nowrap pl-4 text-8xl md:text-8xl">
                {"uits".split("").map((character, index) => (
                  <span
                    className="text-secondary -ml-5 inline-block"
                    style={{ zIndex: ("Comrade".length - index) * 10 }}
                    key={character + index + "--uits"}
                  >
                    {character}
                  </span>
                ))}
              </h1>
            </div>
          </div>
        </div>

        <section className="bg-base-100 mx-auto mt-24 flex w-full flex-col justify-center px-4 md:mt-0 md:w-1/2">
          <div className="flex flex-wrap items-center justify-center md:mx-auto md:grid md:grid-cols-2 md:grid-rows-3 md:items-start md:gap-2 md:p-0">
            <h2 className="text-neutral font-heading bg-primary border-b-neutral border-l-primary mb-8 border-b-4 pt-2 pl-2 text-3xl font-bold wrap-break-word uppercase md:aspect-square md:text-4xl">
              Member Benefits
            </h2>
            <TechCard
              icon={<CallMeIcon />}
              title="Live Support"
              description="6 help sessions each year for generalized troubleshooting"
              link="https://react.dev/"
            />
            <TechCard
              icon={<FilingIcon />}
              title="Resource Library"
              description="Database of resources tailored to the working class."
              link="https://www.typescriptlang.org/"
            />
            <TechCard
              icon={<ChatIcon />}
              title="Community Forum"
              description="For when you have a question but don't need an appointment"
              link="https://vitejs.dev/"
            />
            <TechCard
              icon={<VoteIcon />}
              title="Member Voting"
              description="Have a say in future offerings and improvements"
              link="https://tailwindcss.com/"
            />
            <TechCard
              icon={<SailboatIcon />}
              title="Member Sales"
              description="Members-only freebies and discounts"
              link="https://tanstack.com/router/v1"
            />
          </div>
        </section>
      </section>
    </Layout>
  );
}
