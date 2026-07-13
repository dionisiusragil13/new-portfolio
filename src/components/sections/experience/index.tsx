"use client";

import { useRef } from "react";
import { experience } from "./data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin([useGSAP, ScrollTrigger]);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!itemsRef.current.length) return;

      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
      });

      itemsRef.current.forEach((el, i) => {
        if (!el) return;

        gsap.fromTo(
          el,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: i * 0.15,
          }
        );
      });

      return () => {
        trigger.kill();
      };
    },
    { scope: sectionRef }
  );

  const setItemRef = (i: number) => (el: HTMLDivElement | null) => {
    itemsRef.current[i] = el;
  };

  return (
    <section ref={sectionRef} id="experience-section" className="relative min-h-screen">
      <div className="relative z-10 flex flex-col px-4 py-24 max-w-4xl mx-auto">
        <div className="mb-20">
          <h1 className="uppercase font-black text-5xl text-center sm:text-6xl text-[#fffff0]">
            Experience
          </h1>
        </div>

        <div className="relative">
          <div className="absolute left-0.75 top-2 bottom-2 w-px bg-white/6" />

          <div className="experience-card space-y-20">
            {experience.map((item, index) => (
              <div
                key={item.role + item.company}
                ref={setItemRef(index)}
                className="exp-stagger relative pl-10"
              >
                <div className="absolute left-0 top-1.5 w-1.75 h-1.75 rounded-full bg-white/20" />

                <span className="text-[#fffff0] text-sm font-mono tracking-wide">
                  {item.period}
                </span>
                <h3 className="text-[#fffff0] text-xl font-semibold mt-1.5">
                  {item.role}
                </h3>
                <p className="text-[#fffff0] text-sm mt-0.5">{item.company}</p>

                <ul className="mt-5 space-y-3">
                  {item.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 text-[#fffff0] text-sm leading-relaxed"
                    >
                      <span className="mt-2 block w-0.75 h-0.75 rounded-full bg-white/25 shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div ref={setItemRef(experience.length)} className="exp-stagger relative pl-10 opacity-40">
              <div className="absolute left-0 top-1.5 w-1.75 h-1.75 rounded-full border border-white/30 bg-transparent" />
              <span className="text-[#fffff0] text-sm font-mono tracking-wide">
                Coming Soon
              </span>
              <h3 className="text-[#fffff0] text-xl font-semibold mt-1.5">
                Next Chapter
              </h3>
              <p className="text-[#fffff0] text-sm mt-0.5">
                Something exciting is in the works
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
