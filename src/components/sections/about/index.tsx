"use client";
import { Canvas } from "@react-three/fiber";
import Scene from "./scene";

export default function About() {
  return (
    <section className="relative min-h-screen">
      <div className="hero-scene pointer-events-none absolute inset-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <Scene />
        </Canvas>
      </div>
      <div className="about-description relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center gap-12 w-full max-w-2xl mx-auto">
          <div className="text-center">
            <h1 className="uppercase font-black text-6xl sm:text-7xl text-[#fffff0]">
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

          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex gap-4">
              <a
                href="https://github.com/dionisiusragil13"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="GitHub"
              >
                <img
                  src="github_light.svg"
                  alt="GitHub"
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
                <img src="linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/ragildinho_?igsh=Yzh5c3pjaWJ4bW0y"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <img
                  src="instagram-icon.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="mailto:dionisiusragil48@gmail.com?subject=Halo%20Ragil%2C%20Saya%20Tertarik%20Kerjasama"
                className="opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Email"
              >
                <img src="gmail.svg" alt="Gmail" className="w-6 h-6" />
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
