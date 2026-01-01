"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Progress } from "@/src/components/ui/progress";
import { Badge } from "@/src/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Button } from "@/src/components/ui/button";

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const frontendSkills = [
    {
      name: "Next.js / React.js (TypeScript)",
      level: 95,
      description: "Modern web applications with server-side rendering",
      icon: "code_blocks",
    },
    {
      name: "Tailwind CSS",
      level: 98,
      description: "Utility-first CSS framework for rapid UI development",
      icon: "palette",
    },
    {
      name: "React Native",
      level: 75,
      description: "Cross-platform mobile applications",
      icon: "phone_iphone",
    },
    {
      name: "Framer Motion",
      level: 80,
      description: "Animation library for React",
      icon: "animation",
    },
  ];

  const backendSkills = [
    {
      name: "Node.js (Express)",
      level: 90,
      description: "Scalable server-side applications and REST APIs",
      icon: "terminal",
    },
    {
      name: "Prisma ORM & PostgreSQL",
      level: 85,
      description: "Type-safe database operations and schema management",
      icon: "database",
    },
    {
      name: "GraphQL",
      level: 75,
      description: "Efficient API queries and real-time subscriptions",
      icon: "hub",
    },
    {
      name: "Socket.io",
      level: 80,
      description: "Real-time bidirectional communication",
      icon: "bolt",
    },
  ];

  const dataSkills = [
    {
      name: "Redis (Caching)",
      level: 80,
      description:
        "In-memory data structure store for caching and real-time analytics",
      icon: "memory",
    },
    {
      name: "Gemini AI API (Integration)",
      level: 85,
      description: "AI-powered solutions and natural language processing",
      icon: "smart_toy",
    },
    {
      name: "Midtrans (Payment Gateway)",
      level: 90,
      description: "Secure payment processing and transaction management",
      icon: "payments",
    },
    {
      name: "Docker",
      level: 75,
      description: "Containerization for consistent development environments",
      icon: "storage",
    },
  ];

  const tools = [
    {
      name: "Git & GitHub",
      level: 90,
      description: "Version control and collaborative development",
      icon: "code",
    },
    {
      name: "VS Code",
      level: 95,
      description: "Primary code editor with extensive extensions",
      icon: "code",
    },
    {
      name: "Figma",
      level: 70,
      description: "UI/UX design and prototyping",
      icon: "design_services",
    },
    {
      name: "Postman",
      level: 85,
      description: "API testing and documentation",
      icon: "api",
    },
    {
      name: "Vercel",
      level: 90,
      description: "Frontend deployment and hosting",
      icon: "cloud",
    },
    {
      name: "Railway",
      level: 80,
      description: "Backend deployment and database hosting",
      icon: "train",
    },
  ];

  const getColorForLevel = (level: number) => {
    if (level >= 90) return "text-emerald-600 dark:text-emerald-400";
    if (level >= 80) return "text-blue-600 dark:text-blue-400";
    if (level >= 70) return "text-amber-600 dark:text-amber-400";
    return "text-gray-600 dark:text-gray-400";
  };

  const getProgressColor = (level: number) => {
    if (level >= 90) return "bg-emerald-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-amber-500";
    return "bg-gray-500";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="material-symbols-outlined text-primary text-4xl">
            code
          </span>
          <h1 className="text-4xl font-bold">Tech Stack & Skills</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Languages, frameworks, and tools I use daily to build amazing products
          and solve complex problems.
        </p>
      </div>

      {/* Skills Tabs */}
      <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="flex flex-wrap h-auto gap-2">
            <TabsTrigger value="all" className="gap-2">
              <span className="material-symbols-outlined">apps</span>
              All Skills
            </TabsTrigger>
            <TabsTrigger value="frontend" className="gap-2">
              <span className="material-symbols-outlined">devices</span>
              Frontend
            </TabsTrigger>
            <TabsTrigger value="backend" className="gap-2">
              <span className="material-symbols-outlined">dns</span>
              Backend
            </TabsTrigger>
            <TabsTrigger value="data" className="gap-2">
              <span className="material-symbols-outlined">storage</span>
              Data & AI
            </TabsTrigger>
            <TabsTrigger value="tools" className="gap-2">
              <span className="material-symbols-outlined">build</span>
              Tools
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[...frontendSkills, ...backendSkills, ...dataSkills, ...tools].map(
              (skill) => (
                <Card
                  key={skill.name}
                  className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">
                          {skill.icon}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-lg">{skill.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {skill.description}
                            </p>
                          </div>
                          <span
                            className={`font-bold text-lg ${getColorForLevel(
                              skill.level
                            )}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <Progress
                          value={skill.level}
                          className="h-2"
                          indicatorClassName={getProgressColor(skill.level)}
                        />
                        <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                          <span>Beginner</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </TabsContent>

        <TabsContent value="frontend" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {frontendSkills.map((skill) => (
              <Card
                key={skill.name}
                className="hover:shadow-lg transition-shadow border-blue-500/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-blue-500">
                        {skill.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg">{skill.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                        <span
                          className={`font-bold text-lg ${getColorForLevel(
                            skill.level
                          )}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2"
                        indicatorClassName={getProgressColor(skill.level)}
                      />
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="backend" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {backendSkills.map((skill) => (
              <Card
                key={skill.name}
                className="hover:shadow-lg transition-shadow border-emerald-500/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-emerald-500">
                        {skill.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg">{skill.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                        <span
                          className={`font-bold text-lg ${getColorForLevel(
                            skill.level
                          )}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2"
                        indicatorClassName={getProgressColor(skill.level)}
                      />
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="data" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dataSkills.map((skill) => (
              <Card
                key={skill.name}
                className="hover:shadow-lg transition-shadow border-purple-500/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-purple-500">
                        {skill.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg">{skill.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                        <span
                          className={`font-bold text-lg ${getColorForLevel(
                            skill.level
                          )}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2"
                        indicatorClassName={getProgressColor(skill.level)}
                      />
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tools" className="mt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {tools.map((skill) => (
              <Card
                key={skill.name}
                className="hover:shadow-lg transition-shadow border-orange-500/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-orange-500">
                        {skill.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-bold text-lg">{skill.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                        <span
                          className={`font-bold text-lg ${getColorForLevel(
                            skill.level
                          )}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2"
                        indicatorClassName={getProgressColor(skill.level)}
                      />
                      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                        <span>Beginner</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Additional Skills Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            category
          </span>
          Additional Skills & Expertise
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {[
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "SASS",
            "REST APIs",
            "WebSockets",
            "JWT Auth",
            "OAuth 2.0",
            "Webhooks",
            "CI/CD",
            "Agile",
            "Scrum",
            "Git Flow",
            "Testing",
            "Debugging",
            "Performance",
            "Security",
            "SEO",
            "Responsive Design",
            "UI/UX",
            "System Design",
            "Microservices",
          ].map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="py-2 px-3 text-center justify-center hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Methodology Card */}
      <Card className="mt-12 bg-gradient-to-br from-card to-card/80">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <span className="material-symbols-outlined text-primary">
              architecture
            </span>
            Development Methodology
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-emerald-500">
                  check_circle
                </span>
              </div>
              <h3 className="font-semibold text-lg">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable, readable, and scalable code following best
                practices and design patterns.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-blue-500">
                  speed
                </span>
              </div>
              <h3 className="font-semibold text-lg">Performance First</h3>
              <p className="text-muted-foreground">
                Optimizing for speed, efficiency, and scalability from database
                queries to frontend rendering.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-purple-500">
                  security
                </span>
              </div>
              <h3 className="font-semibold text-lg">Security Focused</h3>
              <p className="text-muted-foreground">
                Implementing security best practices including input validation,
                authentication, and data protection.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Experience Level */}
      <Card className="mt-12">
        <CardContent className="p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">
                Frontend Mastery
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <div className="text-sm text-muted-foreground">
                Backend Expertise
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">
                AI Integration
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold mb-4">
          Ready to build something amazing?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Let's combine these skills to create innovative solutions for your
          business challenges.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="gap-2">
            <span className="material-symbols-outlined">mail</span>
            Get in Touch
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <span className="material-symbols-outlined">visibility</span>
            View Projects
          </Button>
        </div>
      </div>
    </div>
  );
}
