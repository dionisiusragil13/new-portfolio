"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "./scene";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin([useGSAP, ScrollTrigger]);

export default function About() {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl;
  });

  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!contentRef.current) return;

      const heading = contentRef.current.querySelector(".about-heading");
      const paragraphs = contentRef.current.querySelectorAll("p");
      const socials = contentRef.current.querySelector(".about-socials");

      if (heading) {
        gsap.fromTo(
          heading,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
              toggleActions: "play none none none",
              once: false,
            },
          },
        );
      }

      paragraphs.forEach((p, i) => {
        gsap.fromTo(
          p,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: p,
              start: "top 80%",
              toggleActions: "play none none none",
              once: false,
            },
            delay: i * 0.1,
          },
        );
      });

      if (socials) {
        gsap.fromTo(
          socials,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: socials,
              start: "top 80%",
              toggleActions: "play none none none",
              once: false,
            },
          },
        );
      }
    },
    { scope: contentRef },
  );

  return (
    <section id="about-section" className="relative min-h-screen">
      <div className="hero-scene pointer-events-none absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Scene />
        </Canvas>
      </div>
      <div
        ref={contentRef}
        className="about-description relative z-10 flex min-h-screen flex-col items-center justify-center px-4"
      >
        <div className="flex flex-col items-center gap-12 w-full max-w-2xl mx-auto">
          <div className="text-center">
            <h1 className="about-heading uppercase font-black text-6xl sm:text-7xl text-[#fffff0]">
              About Me
            </h1>
          </div>

          <div className=" flex flex-col gap-5 text-center sm:text-left font-roboto bg-black">
            <p className="trigger-1 text-white/90 text-base sm:text-lg leading-relaxed">
              I&apos;m a self-taught developer passionate about building
              software that is intuitive, user-centered, and reliable. I enjoy
              creating solutions that are performant and maintainable, with a
              strong focus on clean code and long-term usability. I also value
              working in agile teams, where collaboration and continuous
              learning are key to developing software that truly serves its
              users.
            </p>

            <p className="trigger-2 text-white/90 text-base sm:text-lg leading-relaxed">
              I am currently seeking an internship or entry-level opportunity
              where I can apply my technical skills and contribute to meaningful
              projects. I am eager to bring my enthusiasm and dedication to a
              dynamic team. If you&rsquo;re interested in collaborating or have
              a position in mind, I&rsquo;d love to connect!
            </p>
          </div>

          <div className="about-socials flex flex-wrap items-center justify-center gap-6">
            <div className="flex gap-4">
              <a
                href="https://github.com/dionisiusragil13"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="GitHub"
              >
                <Image
                  src="/github_light.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                  className="w-6 h-6 invert"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/ragil-gigih-utomo"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.instagram.com/ragildinho_?igsh=Yzh5c3pjaWJ4bW0y"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <Image
                  src="/instagram-icon.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a
                href="mailto:dionisiusragil48@gmail.com?subject=Halo%20Ragil%2C%20Saya%20Tertarik%20Kerjasama"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Email"
              >
                <Image
                  src="/gmail.svg"
                  alt="Gmail"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}