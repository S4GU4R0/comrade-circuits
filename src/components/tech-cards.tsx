import React from "react";

interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export function TechCard({ icon, title, description }: TechCardProps) {
  return (
    <div className="group bg-base border-neutral mr-2 mb-2 flex w-full max-w-[45vw] min-w-64 flex-col items-center border-4 pl-4 md:m-0 md:aspect-square md:w-full md:min-w-0">
      <div className="bg-primary h-full md:min-h-fit md:w-full">
        <div className="bg-secondary h-8 w-8">{icon}</div>
        <h3 className="text-neutral-content bg-secondary md:text-md mb-2 -ml-4 p-2 text-sm md:mb-0 md:w-full md:text-justify">
          {title}
        </h3>
        <p className="bg-base-100 text-base-content ml-6 max-w-48 p-4 text-sm font-bold text-wrap uppercase md:m-0 md:w-full md:max-w-64 md:p-2 md:text-xs md:lowercase">
          {description}
        </p>
      </div>
    </div>
  );
}
