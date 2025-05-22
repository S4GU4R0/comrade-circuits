interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  link,
}: FeatureCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card bg-neutral group shadow transition-all hover:shadow-lg"
    >
      <div className="card-body flex flex-col items-center p-4">
        <div className="mb-2 h-12 w-12 transition-transform group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-neutral-content mb-2 text-xl font-semibold">
          {title}
        </h3>
        <p className="text-neutral-content text-center text-sm">
          {description}
        </p>
      </div>
    </a>
  );
}
