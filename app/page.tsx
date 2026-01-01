import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import Hero from "@/src/components/home/Hero";
import TechStack from "@/src/components/home/TechStack";
import Experience from "@/src/components/home/Experience";
import ProjectsShowcase from "@/src/components/home/ProjectsShowcase";
import AboutMe from "@/src/components/home/AboutMe";
import SofSkills from "@/src/components/home/SofSkills";
import ContactSection from "@/src/components/home/Contact";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 flex gap-16 flex-col">
      <section id="home">
        <Hero />
      </section>
      <section id="projects">
        <ProjectsShowcase />
      </section>
      <section id="skills">
        <TechStack />
      </section>
      <section id="experience">
        <Experience />
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
