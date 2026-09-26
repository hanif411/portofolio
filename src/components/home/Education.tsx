import { Award } from "lucide-react";
import { educations } from "@/src/data/education";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const Education = () => {
  return (
    <section className="py-20 md:py-28">
      <SectionHeading index="02" title="Education" />

      <div className="border-b border-border">
        {educations.map((edu, index) => (
          <Reveal key={edu.id} delay={index * 60}>
            <article className="grid grid-cols-1 gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-12 md:py-14">
              <div className="md:col-span-3">
                <p className="text-sm tabular-nums text-muted-foreground md:sticky md:top-28">
                  {edu.period}
                </p>
              </div>

              <div className="md:col-span-9">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {edu.degree}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {edu.institution}
                  <span className="mx-2 text-border">/</span>
                  <span className="text-sm">{edu.location}</span>
                </p>

                <ul className="mt-8 flex flex-col gap-4">
                  {edu.highlights.map((highlight) => (
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

                {edu.certifications.length > 0 ? (
                  <ul className="mt-8 flex flex-wrap gap-3">
                    {edu.certifications.map((cert) => (
                      <li
                        key={cert}
                        className="label-mono inline-flex items-center gap-2 border border-border px-3 py-2 text-foreground">
                        <Award className="h-3.5 w-3.5 text-primary" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Education;
