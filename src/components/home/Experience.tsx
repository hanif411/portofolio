import { experiences } from "@/src/data/experience";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const Experience = () => {
  return (
    <section className="py-20 md:py-28">
      <SectionHeading index="01" title="Experience" />

      <div className="border-b border-border">
        {experiences.map((exp, index) => (
          <Reveal key={exp.id} delay={index * 60}>
            <article className="grid grid-cols-1 gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-12 md:py-14">
              <div className="md:col-span-3">
                <div className="md:sticky md:top-28">
                  <p className="text-sm tabular-nums text-muted-foreground">
                    {exp.period}
                  </p>
                  {exp.isCurrent ? (
                    <p className="label-mono mt-3 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </span>
                      Current
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {exp.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {exp.company}
                  <span className="mx-2 text-border">/</span>
                  <span className="text-sm">{exp.location}</span>
                </p>

                <ul className="mt-8 flex flex-col gap-4">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-4 text-base leading-relaxed text-muted-foreground">
                      <span
                        aria-hidden
                        className="mt-3 h-px w-5 shrink-0 bg-primary"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-8 flex flex-wrap gap-x-2 gap-y-2">
                  {exp.skills.map((skill) => (
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
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
