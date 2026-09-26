import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/src/data/profile";
import profilePhoto from "@/src/public/profile.jpg";
import StatusBadge from "../shared/StatusBadge";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-16 pt-10 pb-8 lg:grid-cols-12 lg:gap-12 lg:pt-20">
      <div className="lg:col-span-8">
        <div className="label-mono mb-8 flex items-center gap-3">
          <span className="text-primary">{profile.title}</span>
          <span aria-hidden className="h-px w-8 bg-primary" />
          <span className="text-muted-foreground">Bekasi, Indonesia</span>
        </div>

        <h1 className="text-[clamp(2.75rem,11vw,7.5rem)] font-bold leading-[0.92] tracking-[-0.035em] text-foreground">
          Hanif Sholihin
        </h1>

        <p className="mt-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          {profile.summary}
        </p>

        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-border pt-8">
          <a
            href={profile.cvPath}
            download={profile.cvFileName}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
            Download CV
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary">
            View Projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <div className="sm:ml-auto">
            <StatusBadge />
          </div>
        </div>
      </div>

      <div className="lg:col-span-4">
        <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden bg-muted lg:sticky lg:top-28">
          <Image
            src={profilePhoto}
            alt="Hanif Sholihin"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 384px"
            className="object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
