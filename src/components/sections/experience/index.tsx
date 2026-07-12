"use client";

import { experience } from "./data";

export default function Experience() {
  return (
    <section className="relative min-h-screen">
      <div className="relative z-10 flex flex-col px-4 py-24 max-w-4xl mx-auto">
        <div className="mb-20">
          <h1 className="uppercase font-black text-5xl text-center sm:text-6xl text-[#fffff0]">
            Experience
          </h1>
        </div>

        <div className="relative">
          <div className="absolute left-0.75 top-2 bottom-2 w-px bg-white/6" />

          <div className="space-y-20">
            {experience.map((item, index) => (
              <div
                key={item.role + item.company}
                className="exp-stagger relative pl-10"
                style={{ animationDelay: `${index * 200}ms` }}
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
            <div className="exp-stagger relative pl-10 opacity-40">
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
      <style>{`
        .exp-stagger {
          opacity: 0;
          animation: expFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes expFade {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
