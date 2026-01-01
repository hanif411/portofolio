"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Admin AI Assistant",
      tag: "AI Automation / OCR",
      description:
        "An intelligent tool designed to automate tedious manual entries. It extracts data from long, blurred invoices using Gemini 2.5 and integrates with WhatsApp for real-time sales reporting.",
      tags: [
        "AI",
        "OCR",
        "WhatsApp API",
        "Automation",
        "TypeScript",
        "Node.js",
      ],
      category: "ai",
      liveLink: "#",
      sourceLink: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Circle (Social Media Engine)",
      tag: "High-Performance / Real-time",
      description:
        "A social media platform focused on speed. Implemented Redis for low-latency thread caching and WebSockets for real-time interactions.",
      tags: [
        "Redis",
        "WebSockets",
        "Real-time",
        "Next.js",
        "PostgreSQL",
        "TypeScript",
      ],
      category: "web",
      liveLink: "#",
      sourceLink: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Foodies E-commerce",
      tag: "Fintech / Business Logic",
      description:
        "End-to-end food delivery platform featuring Midtrans Payment Gateway integration and automated order status updates via Webhooks.",
      tags: [
        "Midtrans",
        "E-commerce",
        "Webhooks",
        "Payment Gateway",
        "React",
        "Node.js",
      ],
      category: "web",
      liveLink: "#",
      sourceLink: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Inventory Management System",
      tag: "Backend / Database",
      description:
        "Comprehensive inventory tracking system with real-time stock updates and predictive analytics for restocking.",
      tags: ["PostgreSQL", "Prisma", "Express", "Redis", "TypeScript"],
      category: "backend",
      liveLink: "#",
      sourceLink: "#",
      featured: false,
    },
    {
      id: 5,
      title: "API Gateway Service",
      tag: "Microservices / Architecture",
      description:
        "Custom API gateway for handling authentication, rate limiting, and request routing across multiple microservices.",
      tags: ["Node.js", "Docker", "JWT", "Rate Limiting", "Redis"],
      category: "backend",
      liveLink: "#",
      sourceLink: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Dashboard Analytics",
      tag: "Data Visualization / Frontend",
      description:
        "Interactive dashboard for visualizing business metrics with real-time data updates and custom reporting.",
      tags: ["React", "D3.js", "Chart.js", "TypeScript", "Tailwind CSS"],
      category: "frontend",
      liveLink: "#",
      sourceLink: "#",
      featured: false,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Selected Works</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of projects that showcase my skills in solving real-world
          problems with technology.
        </p>
      </div>

      {/* Filter Tabs */}
      <Tabs defaultValue="all" className="mb-12" onValueChange={setFilter}>
        <div className="flex justify-center">
          <TabsList className="mb-8">
            <TabsTrigger value="all" className="gap-2">
              <span className="material-symbols-outlined">apps</span>
              All Projects
            </TabsTrigger>
            <TabsTrigger value="ai" className="gap-2">
              <span className="material-symbols-outlined">smart_toy</span>
              AI & Automation
            </TabsTrigger>
            <TabsTrigger value="web" className="gap-2">
              <span className="material-symbols-outlined">web</span>
              Web Applications
            </TabsTrigger>
            <TabsTrigger value="backend" className="gap-2">
              <span className="material-symbols-outlined">dns</span>
              Backend Systems
            </TabsTrigger>
            <TabsTrigger value="frontend" className="gap-2">
              <span className="material-symbols-outlined">devices</span>
              Frontend
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={filter} className="mt-0">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  project.featured ? "border-primary/30" : ""
                }`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {project.title}
                        {project.featured && (
                          <Badge variant="default" className="bg-primary">
                            <span className="material-symbols-outlined text-xs mr-1">
                              star
                            </span>
                            Featured
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {project.tag}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 4} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="material-symbols-outlined text-xs">
                      category
                    </span>
                    <span className="capitalize">{project.category}</span>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  <Button variant="default" className="flex-1 gap-2" size="sm">
                    <span className="material-symbols-outlined text-sm">
                      visibility
                    </span>
                    Live Demo
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2" size="sm">
                    <span className="material-symbols-outlined text-sm">
                      code
                    </span>
                    Source Code
                  </Button>
                  <Button variant="ghost" size="icon">
                    <span className="material-symbols-outlined text-sm">
                      open_in_new
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Project Stats */}
      <Card className="mt-12">
        <CardContent className="p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">6+</div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">AI Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">
                Problems Solved
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          I'm always excited to work on new and challenging projects. Let's
          discuss how we can bring your ideas to life.
        </p>
        <Button size="lg" className="gap-2">
          <span className="material-symbols-outlined">mail</span>
          Start a Project
        </Button>
      </div>
    </div>
  );
}
