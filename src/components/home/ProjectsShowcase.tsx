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
        <h2 className="text-3xl font-black uppercase tracking-tighter text-foreground">
          Selected Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="group overflow-hidden bg-card border-border flex flex-col hover:border-primary/50 transition-all duration-300">
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative h-56 cursor-zoom-in overflow-hidden bg-muted">
                  {project.images.length >= 4 ? (
                    <div className="grid grid-cols-2 h-full gap-0.5 bg-muted">
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

                  <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-primary p-2 rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 className="text-primary-foreground w-5 h-5" />
                    </div>
                  </div>

                  <Badge className="absolute bottom-4 left-4 bg-primary text-primary-foreground border-none font-bold">
                    {project.tag}
                  </Badge>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-[95vw] lg:max-w-[80vw] xl:max-w-[1200px] bg-background/95 border-border text-foreground overflow-y-auto max-h-[95vh] p-0 md:p-6 backdrop-blur-xl">
                <DialogHeader className="p-6 pb-0 md:p-0 mb-4">
                  <DialogTitle className="text-2xl md:text-3xl font-black uppercase tracking-tight text-primary flex items-center gap-3">
                    {project.title}
                    <Badge
                      variant="outline"
                      className="text-muted-foreground font-mono text-[10px]">
                      Gallery View
                    </Badge>
                  </DialogTitle>
                </DialogHeader>

                {/* Container Gambar */}
                <div className="flex flex-col gap-8 p-4 md:p-0">
                  {project.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative group rounded-2xl border border-border overflow-hidden bg-card">
                      <img
                        src={getImageUrl(img)}
                        alt={`Full preview ${idx}`}
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      {/* Subtle Overlay buat penanda urutan gambar */}
                      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full font-bold border border-white/10">
                        IMAGE {idx + 1} / {project.images.length}
                      </div>
                    </div>
                  ))}
                  <div className="my-4 mx-4">
                    {project.description}
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <CardHeader className="pb-2">
              <CardTitle className="group-hover:text-primary transition-colors uppercase font-black tracking-tight text-xl text-foreground">
                {project.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm mb-6 line-clamp-3 italic leading-relaxed">
                "{project.description}"
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-[10px] uppercase font-bold bg-muted text-muted-foreground border-border">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="grid grid-cols-2 gap-3 pt-6 border-t border-border/50">
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
                      className="font-bold gap-2 border-border hover:bg-muted text-foreground">
                      <Github className="w-4 h-4" /> Code
                      <ChevronDown className="w-3 h-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="bg-card border-border text-foreground">
                    <DropdownMenuItem
                      asChild
                      className="focus:bg-primary focus:text-primary-foreground cursor-pointer py-2">
                      <a
                        href={project.sourceCode.frontEnd}
                        target="_blank"
                        className="w-full">
                        Frontend
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      asChild
                      className="focus:bg-primary focus:text-primary-foreground cursor-pointer py-2">
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
                  className="font-bold gap-2 border-border hover:bg-muted text-foreground">
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
