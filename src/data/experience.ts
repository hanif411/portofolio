export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  periodStart: string;
  periodEnd: string;
  isCurrent: boolean;
  location: string;
  highlights: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "digi-sistem-solusindo",
    title: "Software Engineer",
    company: "PT Digi Sistem Solusindo",
    period: "Feb 2026 — Present",
    periodStart: "2026-02",
    periodEnd: "Present",
    isCurrent: true,
    location: "Jakarta, Indonesia",
    highlights: [
      "Engineered and enhanced backend APIs using Golang for seamless integration with a banking partner, ensuring secure, stable, and high-integrity financial transactions.",
      "Optimized system performance through Redis caching and complex PostgreSQL query tuning, reducing API response times, and streamlined SMTP server notifications.",
      "Maintained system reliability by managing Linux deployments and monitoring real-time metrics via Prometheus, Grafana, and Loki.",
      "Acted as a liaison between project stakeholders and the development team, collaborating with Project Managers, Team Leads, and Frontend Engineers.",
    ],
    skills: [
      "Go (Golang)",
      "Redis",
      "PostgreSQL",
      "Prometheus",
      "Grafana",
      "Loki",
      "Linux",
      "SMTP",
    ],
  },
  {
    id: "dumbways",
    title: "Full Stack Developer (Internship)",
    company: "PT Dumbways Indonesia Teknologi",
    period: "Dec 2025 — Jan 2026",
    periodStart: "2025-12",
    periodEnd: "2026-01",
    isCurrent: false,
    location: "Tangerang, Indonesia",
    highlights: [
      "Developed scalable web applications using Go (Golang) and Next.js, implementing Redis caching and Socket.io to deliver high-performance, real-time user experiences with minimal latency.",
      "Architected backend systems with PostgreSQL and Prisma ORM, integrating a payment gateway and automated webhooks for secure, seamless transaction handling.",
      "Collaborated within a fast-paced Agile team, participating in sprint planning and rigorous code reviews via Git/GitHub to maintain strict clean code standards and system stability.",
    ],
    skills: [
      "Go (Golang)",
      "Next.js",
      "Socket.io",
      "Redis",
      "PostgreSQL",
      "Prisma",
      "Payment Gateway",
      "Agile / Scrum",
    ],
  },
  {
    id: "toko-imam-syafii",
    title: "IT & Digital Operations",
    company: "Toko Imam Syafii",
    period: "Jan 2024 — Aug 2025",
    periodStart: "2024-01",
    periodEnd: "2025-08",
    isCurrent: false,
    location: "Bekasi, Indonesia",
    highlights: [
      "Led the migration of legacy POS systems to Odoo ERP, synchronizing complex inventory databases to maintain data integrity between stock levels and sales reports.",
      "Optimized WordPress performance and digital catalogs, and executed digital campaigns to support end-to-end business growth.",
      "Managed network infrastructure and hardware systems, providing remote and on-site troubleshooting to guarantee system uptime for daily operations.",
    ],
    skills: [
      "Odoo ERP",
      "POS Migration",
      "WordPress",
      "Network Infrastructure",
      "Database Synchronization",
    ],
  },
];
