"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight, Images, X } from "lucide-react";
import { projects, type Project } from "@/src/data/projects";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const ProjectRow = ({ project }: { project: Project }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const hasGallery = project.images.length > 0;

  const close = () => {
    setOpen(false);
    setActive(0);
  };

  return (
    <Reveal>
      <article className="border-t border-border py-10 md:py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            {hasGallery ? (
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label={`Open gallery for ${project.title}`}
                className="group relative block aspect-[16/10] w-full overflow-hidden bg-muted text-left">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-0 ring-1 ring-inset ring-border" />
                <span className="label-mono absolute bottom-3 left-3 inline-flex items-center gap-2 bg-background/90 px-2.5 py-2 text-foreground backdrop-blur-sm">
                  <Images className="h-3.5 w-3.5" />
                  {project.images.length} screens
                </span>
              </button>
            ) : (
              <div className="flex aspect-[16/10] w-full items-center justify-center border border-dashed border-border bg-muted/40">
                <span className="label-mono text-muted-foreground">
                  Screenshots coming soon
                </span>
              </div>
            )}
          </div>

          <div className="md:col-span-8">
            <div className="flex items-baseline gap-4">
              <span className="label-mono tabular-nums text-muted-foreground">
                {project.index}
              </span>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-base text-muted-foreground">
                  {project.category}
                </p>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {project.description}
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-4 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden className="mt-3 h-px w-5 shrink-0 bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="text-base leading-relaxed text-muted-foreground">
                    {tech}
                    <span aria-hidden className="mx-2 text-border">
                      /
                    </span>
                  </li>
                ))}
              </ul>

              <ul className="flex shrink-0 flex-wrap gap-6">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary">
                      {link.label}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {hasGallery ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} gallery`}
            className={`fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm transition-opacity duration-300 ${
              open ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="absolute top-6 right-6 label-mono inline-flex items-center gap-2 border border-border px-3 py-2 text-foreground transition-colors hover:border-primary">
              <X className="h-4 w-4" />
              Close
            </button>

            <div
              className="relative h-[70vh] w-full max-w-5xl px-4 md:px-10"
              onClick={(event) => event.stopPropagation()}>
              <Image
                key={project.images[active].src}
                src={project.images[active]}
                alt={`${project.title} screenshot ${active + 1}`}
                fill
                sizes="100vw"
                className="animate-in fade-in-0 zoom-in-95 object-contain duration-300"
              />
            </div>

            <div
              className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-1"
              onClick={(event) => event.stopPropagation()}>
              {project.images.map((image: StaticImageData, i) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`View screenshot ${i + 1}`}
                  aria-current={i === active}
                  className={`h-1.5 transition-all ${
                    i === active
                      ? "w-8 bg-primary"
                      : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : null}
      </article>
    </Reveal>
  );
};

const ProjectsShowcase = () => {
  return (
    <section className="py-20 md:py-28">
      <SectionHeading index="03" title="Selected Projects" />

      <div className="border-b border-border">
        {projects.map((project) => (
          <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
