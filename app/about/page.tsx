import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import StatusBadge from "@/src/components/shared/StatusBadge";

export default function AboutPage() {
  const softSkills = [
    {
      name: "Problem Solving",
      icon: "lightbulb",
      color: "orange",
      description: "Deep-diving into complex bugs and database deadlocks",
    },
    {
      name: "Leadership",
      icon: "diversity_3",
      color: "green",
      description:
        "Experience as a Peer Mentor, helping others navigate complex API integrations",
    },
    {
      name: "Resilience",
      icon: "rocket_launch",
      color: "purple",
      description:
        "Adaptable to fast-paced environments, from factory floor to coding deadlines",
    },
    {
      name: "Communication",
      icon: "forum",
      color: "blue",
      description:
        "Clear and effective communication across technical and non-technical teams",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="text-center mb-12">
        <div className="relative inline-block mb-6">
          <div className="absolute -inset-1 bg-primary/40 rounded-full blur opacity-40 transition duration-500 hover:opacity-60"></div>
          <div className="relative h-48 w-48 rounded-full border-4 border-background bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-8xl">
              person
            </span>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-2">Hanif Sholihin</h1>
        <p className="text-xl text-primary font-semibold mb-4">
          Fullstack Developer & Technical Troubleshooter
        </p>

        <div className="mb-6">
          <StatusBadge />
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Button variant="outline" size="sm" className="gap-2">
            <span className="material-symbols-outlined">code</span>
            GitHub
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <span className="material-symbols-outlined">work</span>
            LinkedIn
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <span className="material-symbols-outlined">mail</span>
            Email
          </Button>
        </div>
      </div>

      {/* Bio Section */}
      <Card className="mb-12">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">
              person
            </span>
            <h2 className="text-2xl font-bold">About Me & Bio</h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              "With a background in retail and production, I've seen firsthand
              how manual inefficiencies can slow down a business. My journey
              from the production floor at Yamaha to becoming a Fullstack
              Developer has shaped my mindset: Precision, Discipline, and
              Efficiency."
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I don't just write code; I build tools that save time and automate
              the 'boring' stuff so businesses can focus on what matters.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently based in Indonesia, turning complex problems into clean
              code solutions since 2024.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Experience Timeline */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-primary">
            history_edu
          </span>
          <h2 className="text-2xl font-bold">Professional Experience</h2>
        </div>
        <Timeline />
      </div>

      {/* Soft Skills */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="material-symbols-outlined text-primary">
            psychology
          </span>
          <h2 className="text-2xl font-bold">Soft Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {softSkills.map((skill) => (
            <Card
              key={skill.name}
              className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div
                  className={`w-12 h-12 rounded-full bg-${skill.color}-100 dark:bg-${skill.color}-900/30 flex items-center justify-center mx-auto mb-4`}>
                  <span
                    className={`material-symbols-outlined text-${skill.color}-500`}>
                    {skill.icon}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Education */}
      <Card className="mb-12">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">
              school
            </span>
            <h2 className="text-2xl font-bold">Education & Certifications</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">
                  menu_book
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Fullstack Web Development
                </h3>
                <p className="text-muted-foreground mb-2">
                  Intensive Bootcamp Program
                </p>
                <p className="text-sm text-muted-foreground">
                  2024 • Focus: React, Node.js, Database Design
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-green-500">
                  verified
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Database Troubleshooting Certification
                </h3>
                <p className="text-muted-foreground mb-2">
                  Advanced Database Management
                </p>
                <p className="text-sm text-muted-foreground">
                  PostgreSQL, Redis, Query Optimization
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">
          Interested in working together?
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities and interesting
          projects. Let's connect and explore how we can work together.
        </p>
        <div className="flex gap-4 justify-center">
          <Button className="gap-2">
            <span className="material-symbols-outlined">mail</span>
            Contact Me
          </Button>
          <Button variant="outline" className="gap-2">
            <span className="material-symbols-outlined">download</span>
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
