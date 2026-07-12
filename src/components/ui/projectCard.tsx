import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/components/sections/projects/data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, year, description, stack, image, liveUrl, repoUrl } = project;
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={liveUrl ?? repoUrl ?? "#"}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative block w-full max-w-md overflow-hidden rounded-2xl border border-[#2A2A2E] bg-[#17171A] transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8996A]/60"
    >
      {/* Image */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-[#0E0E10]">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-full w-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0E0E10] via-transparent to-transparent opacity-60" />

        {/* Repo icon, top-right */}
        {repoUrl && (
          <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-[#EDEDEC] backdrop-blur-sm transition-colors duration-300 group-hover:border-[#B8996A]/50">
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </span>
        )}
      </div>

      {/* Body */}
      <div className="relative p-6">
        {/* Hairline that draws itself in on hover — the one animated accent */}
        <span
          className={`absolute left-6 top-0 h-px bg-[#B8996A] transition-all duration-500 ease-out ${
            hovered ? "w-10" : "w-0"
          }`}
        />

        <div className="mb-3 flex items-baseline justify-between gap-4">
          <h3 className="font-sans text-[1.35rem] font-medium leading-tight tracking-tight text-[#fffff0]">
            {title}
          </h3>
          <span className="shrink-0 font-mono text-xs tracking-wide text-[#8B8B90]">
            {year}
          </span>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-[#8B8B90]">
          {description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#2A2A2E] px-2.5 py-1 font-mono text-[0.7rem] tracking-wide text-[#B8996A]/90"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-sm text-[#fffff0]">
          <span className="border-b border-transparent transition-colors duration-300 group-hover:border-[#B8996A] group-hover:text-[#B8996A]">
            Lihat proyek
          </span>
          <ArrowUpRight
            size={16}
            strokeWidth={1.5}
            className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#B8996A]"
          />
        </div>
      </div>
    </a>
  );
}
