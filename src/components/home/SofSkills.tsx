import { Lightbulb, Users2, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import { softSkills } from "@/src/data/skills";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const icons: LucideIcon[] = [Lightbulb, Users2, ShieldCheck, Zap];

const SofSkills = () => {
  return (
    <section className="py-20 md:py-28">
      <SectionHeading index="05" title="Soft Skills" />

      <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2">
        {softSkills.map((skill, index) => {
          const Icon = icons[index % icons.length];

          return (
            <Reveal key={skill.name} delay={index * 60}>
              <div className="flex h-full flex-col border-t border-border py-8">
                <div className="flex items-center gap-3">
                  <Icon className="h-4 w-4 shrink-0 text-primary" />
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {skill.name}
                  </h3>
                </div>
                <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

export default SofSkills;
