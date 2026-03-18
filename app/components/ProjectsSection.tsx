"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import type { Project } from "./ProjectCard";
import Modal from "./Modal";

const latest: Project[] = [
  {
    title: "Command Doctrine",
    description:
      "Wargame utilizing LLMs to interpret natural language orders and generate custom scenarios.",
    longDescription:
      "After playing textual wargame simulations with ChatGPT, I was inspired to create Command Doctrine. Command Doctrine is a cross platform wargame that uses LLMs to interpret natural language orders and generate custom scenarios. It is built with React and TypeScript for the frontend, Konva.js for the canvas and Fastify for the backend. This project allowed me to explore the integration of AI into applications and developing cross platform applications.",
    tags: ["AI Integration", "Game", "Cross-platform"],
    href: "https://www.command-doctrine.com/",
  },
  {
    title: "LeerMatch",
    description:
      "Web application that matches students with tutors based on their learning preferences.",
    longDescription:
      "LeerMatch is a team built software project developed during a university semester. The platform is designed to safely connect students (and parents) with qualified teachers for academic support. The core focus of the system is child safety, role-based access control, and matching between learners and educators.",
    tags: ["Web Application", "Deployment"],
    href: "#",
  },
];

const other: Project[] = [
  {
    title: "AutoMagic",
    description: "Smart plug mobile application integrating sensor data.",
    longDescription:
      "The AutoMagic smartplug controller app was developed to manage and interact with smartplugs. This was developed as a team project for a mobile development semester. It is an Android application made with Kotlin. It utilizes Bluetooth and QR code scanning to connect and configure new plug nodes and sensors.",
    tags: ["Mobile Application"],
    href: "#",
  },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section className="space-y-10">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Latest</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {latest.map((project) => (
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
