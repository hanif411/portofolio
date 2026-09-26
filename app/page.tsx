import Hero from "@/src/components/home/Hero";
import Experience from "@/src/components/home/Experience";
import Education from "@/src/components/home/Education";
import ProjectsShowcase from "@/src/components/home/ProjectsShowcase";
import TechStack from "@/src/components/home/TechStack";
import SofSkills from "@/src/components/home/SofSkills";
import ContactSection from "@/src/components/home/Contact";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col px-4 md:px-8">
      <section id="home">
        <Hero />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <ProjectsShowcase />
      </section>
      <section id="skills">
        <TechStack />
      </section>
      <section id="soft-skills">
        <SofSkills />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}
