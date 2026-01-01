import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Github, Eye, ChevronDown, Maximize2 } from "lucide-react";
import { projects } from "@/src/text/projects";

const ProjectsShowcase = () => {
  const getImageUrl = (img: any) => {
    if (typeof img === "string") return img;
    return img?.src || "";
  };

  return (
    <section className="py-12">
      <div className="flex items-center gap-3 mb-10">
        <span className="material-symbols-outlined text-primary text-3xl font-bold">
          grid_view
        </span>
        <h2 className="text-3xl font-black uppercase tracking-tighter text-white">
          Selected Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group overflow-hidden bg-zinc-900/40 border-zinc-800 flex flex-col hover:border-primary/50 transition-all duration-300">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative h-56 cursor-zoom-in overflow-hidden bg-zinc-800">
                  {project.images.length >= 4 ? (
                    <div className="grid grid-cols-2 h-full gap-0.5 bg-zinc-800">
                      {project.images.slice(0, 4).map((img, i) => (
                        <img
                          key={i}
                          src={getImageUrl(img)}
                          alt="preview"
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      src={getImageUrl(project.images[0])}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-primary p-2 rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="text-white w-5 h-5" />
                    </div>
                  </div>

                  <Badge className="absolute bottom-4 left-4 bg-primary text-white border-none font-bold">
                    {project.tag}
                  </Badge>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-5xl bg-zinc-950 border-zinc-800 text-white overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-black uppercase tracking-tight text-primary flex items-center gap-2">
                    {project.title}{" "}
                    <span className="text-xs text-zinc-500 font-normal">
                      Project Gallery
                    </span>
                  </DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 gap-4 mt-4">
                  {project.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-zinc-800 overflow-hidden shadow-2xl">
                      <img
                        src={getImageUrl(img)}
                        alt={`Full preview ${idx}`}
                        className="w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>

            <CardHeader className="pb-2">
              <CardTitle className="group-hover:text-primary transition-colors uppercase font-black tracking-tight text-xl text-white">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="text-zinc-400 text-sm mb-6 line-clamp-3 italic leading-relaxed">
                "{project.description}"
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-[10px] uppercase font-bold bg-zinc-800 text-zinc-400 border-zinc-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="grid grid-cols-2 gap-3 pt-6 border-t border-zinc-800/50">
              <Button
                asChild
                className="font-bold gap-2 bg-primary hover:bg-primary/90">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Eye className="w-4 h-4" /> Demo
                </a>
              </Button>

              {project.sourceCode.backEnd ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="font-bold gap-2 border-zinc-700 hover:bg-zinc-800 text-white">
                      <Github className="w-4 h-4" /> Code
                      <ChevronDown className="w-3 h-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-zinc-900 border-zinc-800 text-white">
                    <DropdownMenuItem
                      asChild
                      className="focus:bg-primary focus:text-white cursor-pointer py-2 text-white">
                      <a
                        href={project.sourceCode.frontEnd}
                        target="_blank"
                        className="w-full">
                        Frontend
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      asChild
                      className="focus:bg-primary focus:text-white cursor-pointer py-2 text-white">
                      <a
                        href={project.sourceCode.backEnd}
                        target="_blank"
                        className="w-full">
                        Backend
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  asChild
                  variant="outline"
                  className="font-bold gap-2 border-zinc-700 hover:bg-zinc-800 text-white">
                  <a
                    href={project.sourceCode.frontEnd}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Github className="w-4 h-4" /> Fullstack
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
