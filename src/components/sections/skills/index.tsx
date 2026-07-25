"use client";

import { forwardRef, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skills, type Skill } from "./data";

gsap.registerPlugin(ScrollTrigger);

interface SkillBoxProps {
  name: string;
  iconUrl: string;
}

const SkillBox = forwardRef<HTMLDivElement, SkillBoxProps>(
  ({ name, iconUrl }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-[#fffff0] border border-zinc-800 rounded-xl px-5 py-2 cursor-pointer
                   transition-[transform,border-color] duration-300 ease-out
                   hover:border-zinc-600 hover:scale-110
                   will-change-transform"
      >
        <div className="flex flex-row items-center gap-3">
          <Image
            src={iconUrl}
            alt={name}
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
          <span className="text-[#000000] text-sm font-medium whitespace-nowrap">
            {name}
          </span>
        </div>
      </div>
    );
  },
);

SkillBox.displayName = "SkillBox";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const boxesRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!boxesRef.current.length) return;

      const validEls = boxesRef.current.filter(Boolean) as HTMLDivElement[];

      // set initial state sekali, tanpa reflow berulang
      gsap.set(validEls, { opacity: 0, scale: 0.85, y: 20 });

      ScrollTrigger.batch(validEls, {
        start: "top 70%",
        once: true, // animasi masuk cukup sekali, hindari re-trigger tiap scroll
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
            stagger: 0.03,
            overwrite: "auto",
          });
        },
      });
    },
    { scope: sectionRef },
  );

  const setBoxRef = (i: number) => (el: HTMLDivElement | null) => {
    boxesRef.current[i] = el;
  };

  return (
    <section
      ref={sectionRef}
      id="skills-section"
      className="relative min-h-screen "
    >
      <div className=" relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <h1 className="uppercase font-black text-5xl sm:text-5xl lg:text-4xl text-[#fffff0] mb-20">
          skills & tools
        </h1>
        <div className="max-w-5xl">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <SkillBox
                key={index}
                ref={setBoxRef(index)}
                name={skill.name}
                iconUrl={skill.iconUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
