"use client";

import { useRef } from "react";
import ProjectCard from "@/components/ui/projectCard";
import { projects } from "./data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin([useGSAP, ScrollTrigger]);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!cardsRef.current.length) return;

      cardsRef.current.forEach((el, i) => {
        if (!el) return;

        gsap.fromTo(
          el,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: i * 0.1,
          }
        );
      });
    },
    { scope: sectionRef }
  );

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    cardsRef.current[i] = el;
  };

  return (
    <section ref={sectionRef} id="projects-section" className="relative min-h-screen">
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <h1 className="uppercase text-6xl text-[#fffff0] font-black mb-16">
          Projects
        </h1>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div key={project.title} ref={setCardRef(index)}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
