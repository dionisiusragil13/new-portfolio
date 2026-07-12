"use client";

import ProjectCard from "@/components/ui/projectCard";
import { projects } from "./data";

export default function Projects() {
  return (
    <section className="relative min-h-screen">
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <h1 className="uppercase text-6xl text-[#fffff0] font-black mb-16">
          Projects
        </h1>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
