import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import HomeSection from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <div>
      <HomeSection/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
    </div>
  );
}
