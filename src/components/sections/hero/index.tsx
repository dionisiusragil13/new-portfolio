"use client";

import { Canvas } from "@react-three/fiber";
import Scene from "./scene";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ArrowDownToLine } from "lucide-react";

gsap.registerPlugin([useGSAP, SplitText]);

export default function HomeSection() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion:no-preference)", () => {
      const split = SplitText.create(".hero-heading", {
        type: "chars.lines",
        mask: "lines",
        linesClass: "line++",
      });
      const tl = gsap.timeline({ delay: 0.7 });
      tl.from(split.chars, {
        opacity: 0,
        y: -120,
        ease: "back",
        duration: 0.7,
        stagger: 0.07,
      }).to(".hero-body", { opacity: 1, duration: 0.6, ease: "power2.out" });
    });
  });
  return (
    <section className="min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Canvas shadows="soft">
          <Scene />
        </Canvas>
      </div>
      <div className=" relative z-10 text-center text-[#fffff0]  pt-20">
        <h1 className="hero-heading uppercase font-black text-6xl max-w-md mx-auto">
          Web <br /> developer
        </h1>
        <h2 className="hero-body opacity-0 mt-3 font-roboto">
          Constantly evolving self-taught developer, passionate about building
          impactful applications, and always ready to embrace emerging
          technologies.
        </h2>
      </div>
      <div className="hero-body opacity-0 text-center mx-auto max-w-md mt-50 text-[#fffff0]">
        <h1 className="uppercase font-black-slanted text-3xl">
          ragil gigih utomo
        </h1>
        <a
          href="/cv2.pdf"
          download
          className="inline-flex items-center gap-2 px-4 py-2.5 mt-5 rounded-lg bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-300"
        >
          <ArrowDownToLine
            color="black"
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          />
          <span className="text-black text-sm font-bold-slanted">
            Download CV
          </span>
        </a>
      </div>
    </section>
  );
}
