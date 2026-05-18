import adminai from "@/src/public/adminai (1).png";
import adminai2 from "@/src/public/adminai (2).png";
import adminai3 from "@/src/public/adminai (3).png";
import adminai4 from "@/src/public/adminai (4).png";
import studyfi from "@/src/public/studyfi.png";
import homeserver from "@/src/public/homeserver.png";

export interface ProjectData {
  title: string;
  tag: string;
  images: any[];
  description: string;
  tags: string[];
  liveDemo: string;
  sourceCode: {
    frontEnd: string;
    backEnd?: string;
  };
}

export const projects: ProjectData[] = [
  {
    title: "Studyfi (AI-Powered Learning Platform)",
    tag: "AI-Powered SaaS",
    images: [studyfi],
    description:
      "A commercial SaaS utilizing Generative AI to instantly transform complex materials into interactive quiz-based learning tools, optimizing user study efficiency.",
    tags: ["Generative AI", "Next.js", "TypeScript", "Tailwind CSS"],
    liveDemo: "https://www.studyfi.my.id/",
    sourceCode: {
      frontEnd: "https://github.com/hanif411",
    },
  },
  {
    title: "AI Automation (Admin Automation Tool)",
    tag: "AI Automation",
    images: [adminai, adminai2, adminai3, adminai4],
    description:
      "A Gemini AI automation tool that digitizes manual invoice extraction and synchronizes inventory databases, reducing manual processing time and human error by 80%.",
    tags: ["Gemini AI", "Next.js", "Supabase", "TypeScript", "Vercel"],
    liveDemo: "https://adminaiassistant.vercel.app/",
    sourceCode: {
      frontEnd: "https://github.com/hanif411/adminaiassistant",
    },
  },
  {
    title: "Home Server Infrastructure & CI/CD Pipeline",
    tag: "DevOps & Infrastructure",
    images: [homeserver],
    description:
      "Architected a personal home lab using Proxmox and Linux for efficient service isolation, automating deployments via GitHub Actions and Docker Compose with Nginx SSL.",
    tags: ["Proxmox VE", "Linux Admin", "Docker Compose", "GitHub Actions", "Nginx SSL"],
    liveDemo: "https://github.com/hanif411",
    sourceCode: {
      frontEnd: "https://github.com/hanif411",
    },
  },
];
