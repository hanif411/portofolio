import type { StaticImageData } from "next/image";
import circle1 from "@/src/public/circle-1.png";
import circle2 from "@/src/public/circle-2.png";
import circle3 from "@/src/public/circle-3.png";
import circle4 from "@/src/public/circle-4.png";
import educId1 from "@/src/public/educasi-1.png";
import educId2 from "@/src/public/educasi-2.png";
import educId3 from "@/src/public/educasi-3.png";
import homeserver from "@/src/public/homeserver.jpg";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  images: StaticImageData[];
  description: string;
  highlights: string[];
  tech: string[];
  links: ProjectLink[];
}

const GITHUB_PROFILE = "https://github.com/hanif411";

export const projects: Project[] = [
  {
    id: "educasi-id",
    index: "01",
    title: "Educasi.id",
    category: "AI-Powered Learning Platform",
    images: [educId1, educId2, educId3],
    description:
      "An AI learning platform that turns raw learning material into an interactive study experience, with retrieval-augmented generation over YouTube and PDF sources plus real-time live voice interaction.",
    highlights: [
      "Architected a RAG orchestration pipeline that ingests and reasons over YouTube and PDF content.",
      "Built real-time live voice interaction directly into the learning flow.",
      "Delivered a Golang backend and Next.js frontend with integrated payment gateway and automated email notifications.",
    ],
    tech: [
      "Golang",
      "Next.js",
      "RAG",
      "OpenAI / Gemini API",
      "Payment Gateway",
      "Email SMTP",
    ],
    links: [{ label: "Live Site", href: "https://www.educasi.id" }],
  },
  {
    id: "circle-app",
    index: "02",
    title: "Real-time Social Media",
    category: "Circle App",
    images: [circle1, circle2, circle3, circle4],
    description:
      "A high-performance social networking platform built around real-time interaction, where messaging and feed updates land with effectively zero latency.",
    highlights: [
      "Built a real-time social networking platform with live messaging and feed interactions.",
      "Optimized system performance with Redis caching and Socket.io for zero-latency communication.",
      "Modeled the data layer with Prisma ORM over PostgreSQL.",
    ],
    tech: [
      "Express.js",
      "React.js",
      "Socket.io",
      "Redis",
      "Prisma",
      "PostgreSQL",
    ],
    links: [
      { label: "Live Demo", href: "https://circle-fe.vercel.app" },
      { label: "Source Code", href: GITHUB_PROFILE },
    ],
  },
  {
    id: "home-server",
    index: "03",
    title: "Home Server Infrastructure & CI/CD Pipeline",
    category: "DevOps & Infrastructure",
    images: [homeserver],
    description:
      "A personal home lab built on Proxmox VE, running a real production-shaped deployment pipeline: containerised services, automated releases, and TLS-terminated ingress.",
    highlights: [
      "Architected a home lab on Proxmox VE using LXC containers for application hosting with strict service isolation.",
      "Automated deployment workflows with GitHub Actions and Docker Compose, streamlining the CI/CD pipeline.",
      "Configured Nginx reverse proxies to manage SSL/TLS traffic in front of the containerised services.",
    ],
    tech: [
      "Proxmox VE",
      "LXC",
      "Docker Compose",
      "GitHub Actions",
      "Nginx",
      "SSL / TLS",
    ],
    links: [{ label: "Source Code", href: GITHUB_PROFILE }],
  },
];
