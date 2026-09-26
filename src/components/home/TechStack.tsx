import { stack } from "@/src/data/skills";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const TechStack = () => {
  return (
    <section className="py-20 md:py-28">
      <SectionHeading index="04" title="Tech Stack" />

      <div className="border-b border-border">
        {stack.map((group, index) => (
          <Reveal key={group.category} delay={index * 40}>
            <div className="grid grid-cols-1 gap-4 border-t border-border py-8 md:grid-cols-12 md:gap-12">
              <h3 className="text-base font-semibold tracking-tight text-foreground md:col-span-4">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-x-2 gap-y-2 md:col-span-8">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-base leading-relaxed text-muted-foreground">
                    {skill}
                    <span aria-hidden className="mx-2 text-border">
                      /
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
