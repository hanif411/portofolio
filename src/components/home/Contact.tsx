import { ArrowUpRight } from "lucide-react";
import { contactChannels } from "@/src/data/contact";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const ContactSection = () => {
  return (
    <section className="py-20 md:py-28">
      <SectionHeading index="06" title="Let\u2019s Connect" />

      <div className="border-b border-border">
        {contactChannels.map((channel, index) => {
          const Icon = channel.icon;

          return (
            <Reveal key={channel.id} delay={index * 60}>
              <a
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-5 border-t border-border py-8 transition-colors hover:border-primary md:gap-8 md:py-10">
                <Icon className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                    {channel.heading}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {channel.blurb}
                  </p>
                </div>

                <span className="label-mono hidden shrink-0 text-muted-foreground transition-colors group-hover:text-primary sm:block">
                  {channel.cta}
                </span>

                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          );
        })}
      </div>

      <p className="label-mono mt-16 border-t border-border pt-8 normal-case tracking-[0.1em] text-muted-foreground">
        Copyright © 2026 Hanif Sholihin. All rights reserved.
      </p>
    </section>
  );
};

export default ContactSection;
