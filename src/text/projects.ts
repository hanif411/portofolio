import ecommerce2 from "@/src/public/ecommerce (1).png";
import ecommerce from "@/src/public/ecommerce (2).png";
import ecommerce4 from "@/src/public/ecommerce (3).png";
import ecommerce3 from "@/src/public/ecommerce (4).png";
import circle from "@/src/public/circle (1).png";
import circle2 from "@/src/public/circle (2).png";
import circle3 from "@/src/public/circle (3).png";
import circle4 from "@/src/public/circle (4).png";
import adminai from "@/src/public/adminai (1).png";
import adminai2 from "@/src/public/adminai (2).png";
import adminai3 from "@/src/public/adminai (3).png";
import adminai4 from "@/src/public/adminai (4).png";
import receipt from "@/src/public/receipt (1).png";
import receipt2 from "@/src/public/receipt (2).png";
import receipt3 from "@/src/public/receipt (3).png";
import receipt4 from "@/src/public/receipt (4).png";
import cvku from "@/src/public/cvku (1).png";
import cvku2 from "@/src/public/cvku (2).png";
import cvku3 from "@/src/public/cvku (3).png";
import cvku4 from "@/src/public/cvku (4).png";

export const projects = [
  {
    title: "Admin AI Assistant",
    tag: "AI Automation",
    images: [adminai, adminai2, adminai3, adminai4],
    description:
      "A high-impact automation tool using Gemini AI to digitize manual workflows. It automates data extraction from invoices and synchronizes inventory, reducing manual administrative tasks by up to 80%.",
    tags: ["Gemini AI", "Next.js", "Supabase", "Axios"],
    liveDemo: "https://adminaiassistant.vercel.app/",
    sourceCode: {
      frontEnd: "https://github.com/hanif411/adminaiassistant",
    },
  },
  {
    title: "Circle App",
    tag: "Real-time Social Media",
    images: [circle, circle2, circle3, circle4],
    description:
      "A high-performance social networking platform engineered for speed. Implements Redis for optimized thread caching and Socket.io to deliver zero-latency real-time user interactions.",
    tags: ["Express", "Redis", "Socket.io", "React.js", "Node.js", "Prisma"],
    liveDemo: "https://circle-fe.vercel.app/",
    sourceCode: {
      frontEnd: "https://github.com/hanif411/circle-fe",
      backEnd: "https://github.com/hanif411/be-circle",
    },
  },
  {
    title: "Bolu Delight",
    tag: "E-Commerce Ecosystem",
    images: [ecommerce, ecommerce2, ecommerce3, ecommerce4],
    description:
      "A full-scale food e-commerce platform integrated with Midtrans Payment Gateway. Features automated order status updates via secure Webhooks and a streamlined checkout experience.",
    tags: ["Express", "Midtrans", "Next.js", "MongoDB", "Zustand"],
    liveDemo: "https://ecommerce-food-sigma.vercel.app/",
    sourceCode: {
      frontEnd: "https://github.com/hanif411/Ecommerce-food",
      backEnd: "https://github.com/hanif411/BE-ecommerce",
    },
  },
  {
    title: "Smart Receipt Tracker",
    tag: "Personal Finance",
    images: [receipt, receipt2, receipt3, receipt4],
    description:
      "A comprehensive financial management dashboard designed to track personal expenses through receipt management. It features detailed transaction logs,and spending analytics.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    liveDemo: "https://receipttracker-mu.vercel.app/",
    sourceCode: {
      frontEnd: "https://github.com/hanif411/receipttracker",
    },
  },
  {
    title: "CV-Gen Builder",
    tag: "Productivity Tool",
    images: [cvku, cvku2, cvku3, cvku4],
    description:
      "An interactive CV generator designed to simplify the resume-building process. It features dynamic form handling, real-time preview, and customizable templates to help job seekers create ATS-friendly resumes.",
    tags: ["React.js", "Tailwind CSS", "Lucide Icons", "Framer Motion"],
    liveDemo: "https://cvku-vert.vercel.app/",
    sourceCode: {
      frontEnd: "https://github.com/hanif411/cvku",
    },
  },
];
