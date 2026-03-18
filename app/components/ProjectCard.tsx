import Image from "next/image";

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  href: string;
  image?: string;
}

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  const { title, description, tags, image } = project;

  return (
    <button
      onClick={onClick}
      className="group block w-full text-left rounded-lg border border-border bg-card p-4 transition-all hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5 cursor-pointer"
    >
      {image ? (
        <div className="relative aspect-video w-full rounded-md overflow-hidden mb-4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            unoptimized={image.endsWith(".gif")}
          />
        </div>
      ) : (
        <div className="aspect-video w-full rounded-md bg-muted mb-4 flex items-center justify-center text-muted-foreground text-sm">
          [Project Image]
        </div>
      )}
      <h3 className="font-medium group-hover:underline mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary font-mono"
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}
