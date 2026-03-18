"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import type { Project } from "./ProjectCard";
import Modal from "./Modal";

const featured: Project[] = [
  {
    title: "[Project Alpha]",
    description:
      "[A brief description of a featured project and what problem it solves.]",
    longDescription:
      "[A longer, more detailed description of this project. Explain the motivation, architecture decisions, challenges faced, and outcomes achieved. This is the expanded view shown in the modal.]",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "#",
  },
  {
    title: "[Project Beta]",
    description:
      "[A brief description of another featured project showcasing different skills.]",
    longDescription:
      "[A longer, more detailed description of this project. Cover the tech stack choices, your role, and what you learned from building it.]",
    tags: ["React", "Node.js", "Docker"],
    href: "#",
  },
];

const other: Project[] = [
  {
    title: "[Side Project One]",
    description: "[A short description of a smaller side project.]",
    longDescription:
      "[Extended description with more details about this side project.]",
    tags: ["Python", "FastAPI"],
    href: "#",
  },
  {
    title: "[Side Project Two]",
    description: "[A short description of another side project.]",
    longDescription:
      "[Extended description with more details about this side project.]",
    tags: ["Go", "CLI"],
    href: "#",
  },
  {
    title: "[Side Project Three]",
    description: "[A short description of yet another project.]",
    longDescription:
      "[Extended description with more details about this side project.]",
    tags: ["TypeScript", "Tailwind"],
    href: "#",
  },
  {
    title: "[Side Project Four]",
    description: "[A brief description of one more project.]",
    longDescription:
      "[Extended description with more details about this side project.]",
    tags: ["React", "GraphQL"],
    href: "#",
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Featured</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featured.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {other.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <Modal open={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <div className="space-y-6">
            {selected.image ? (
              <div className="relative aspect-video w-full rounded-md overflow-hidden">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="object-cover"
                  unoptimized={selected.image.endsWith(".gif")}
                />
              </div>
            ) : (
              <div className="aspect-video w-full rounded-md bg-muted flex items-center justify-center text-muted-foreground text-sm">
                [Project Image]
              </div>
            )}

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold tracking-tight">
                {selected.title}
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded bg-muted font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {selected.longDescription || selected.description}
            </p>

            <div className="flex start">
            <a
              href={selected.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Visit
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
