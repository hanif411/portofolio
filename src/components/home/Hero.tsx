"use client";

import { Button } from "@/src/components/ui/button";
import StatusBadge from "../shared/StatusBadge";
import profile from "@/src/public/profile.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="flex-1 max-w-2xl">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-foreground">
            Hi, I'm <span className="text-primary">Hanif Sholihin</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-primary my-5">
            Full Stack Developer
          </h2>

          <div className="space-y-4 mb-8">
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              Passionate about building
              <span className="text-primary font-bold">
                {" "}
                Scalable Web Applications{" "}
              </span>
              and robust backend architectures that solve real-world problems.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Full Stack Developer with <span className="text-foreground font-bold">2+ years of experience</span> building high-integrity production systems, from secure <span className="text-primary font-bold">banking APIs (Bank Papua integration)</span> to intelligent <span className="text-foreground font-medium">AI-powered automation tools</span> that reduce manual processing time by 80%.
            </p>
          </div>

          <div className="mb-8">
            <StatusBadge />
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2 bg-primary hover:bg-primary/90 font-bold cursor-pointer">
              <a href="https://drive.google.com/file/d/1MVJlCagGAaiPpA_YzlhADWghTTa9s1x4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <span className="material-symbols-outlined">download</span>
                Download CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 font-bold cursor-pointer"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="material-symbols-outlined">rocket_launch</span>
              View Projects
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-full opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
          <div className="relative rounded-full h-64 w-64 md:h-90 md:w-90 border-8 border-background overflow-hidden bg-card">
            <Image
              src={profile}
              alt="Hanif Sholihin"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
