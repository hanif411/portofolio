export interface SkillGroup {
  category: string;
  skills: string[];
}

export const stack: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Go (Golang)", "TypeScript", "JavaScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "Redux",
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      "Gin",
      "GoFiber",
      "Node.js",
      "Express.js",
      "Socket.io",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
    ],
  },
  {
    category: "DevOps & Infrastructure",
    skills: [
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "Nginx",
      "Linux Server",
      "Proxmox VE",
      "Prometheus",
      "Grafana",
      "Loki",
    ],
  },
  {
    category: "Tools & Practice",
    skills: [
      "Git / GitHub",
      "Postman",
      "Figma",
      "Agile / Scrum",
      "Code Review",
      "Clean Code",
    ],
  },
];

export interface SoftSkill {
  name: string;
  description: string;
}

export const softSkills: SoftSkill[] = [
  {
    name: "Problem Solving",
    description:
      "A persistent troubleshooter. I thrive on debugging complex issues and breaking down technical challenges until I find the most efficient root-cause solution.",
  },
  {
    name: "Team Collaboration",
    description:
      "A proactive communicator who values collective growth. I am highly receptive to feedback and always ready to support teammates in overcoming technical roadblocks.",
  },
  {
    name: "Agile Learner",
    description:
      "Driven by curiosity and a growth mindset. I quickly adapt to emerging technologies and thrive in fast-paced, high-demand development environments.",
  },
  {
    name: "Clear Communication",
    description:
      "Bridging the gap between technical and non-technical stakeholders. I can simplify complex concepts into actionable insights for any audience.",
  },
];
