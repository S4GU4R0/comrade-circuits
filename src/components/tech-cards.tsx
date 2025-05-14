interface TechCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export function TechCard({ icon, title, description, link }: TechCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-neutral hover:bg-neutral/80 group flex flex-col items-center rounded-lg p-4 transition-all"
    >
      <div className="mb-2 h-12 w-12 transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-neutral-content text-sm">{description}</p>
    </a>
  );
}
