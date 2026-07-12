import { skills, type Skill } from "./data";

interface SkillBoxProps {
  name: string;
  iconUrl: string;
}

const SkillBox: React.FC<SkillBoxProps> = ({ name, iconUrl }) => {
  return (
    <div className="bg-[#fffff0] border border-zinc-800 rounded-xl px-5 py-2 hover:border-zinc-600 transition-all duration-300 cursor-pointer hover:scale-110">
      <div className="flex flex-row items-center gap-3">
        <img src={iconUrl} alt={name} className="w-6 h-6 object-contain" />
        <span className="text-[#000000] text-sm font-medium whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section className="relative min-h-screen ">
      <div className=" relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <h1 className="uppercase font-black text-5xl sm:text-6xl text-[#fffff0] mb-20">
          skills & tools
        </h1>
        <div className="max-w-5xl">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <SkillBox key={index} name={skill.name} iconUrl={skill.iconUrl} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
