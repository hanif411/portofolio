export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  periodStart: string;
  periodEnd: string;
  highlights: string[];
  certifications: string[];
}

export const educations: Education[] = [
  {
    id: "dumbways-bootcamp",
    institution: "Dumbways Indonesia",
    degree: "Full Stack Web Development Bootcamp",
    location: "Depok, Indonesia",
    period: "Sep 2025 — Nov 2025",
    periodStart: "2025-09",
    periodEnd: "2025-11",
    highlights: [
      "Architected production-ready, high-concurrency web applications using Go (Golang), Next.js, and Node.js.",
      "Designed and optimized relational and caching data structures with PostgreSQL, MySQL, and Redis.",
      "Applied Agile/Scrum methodologies and clean code practices, executing rigorous code reviews via Git/GitHub.",
    ],
    certifications: [],
  },
  {
    id: "smk-negeri-3-kota-bekasi",
    institution: "SMK Negeri 3 Kota Bekasi",
    degree: "Computer and Network Engineer",
    location: "Bekasi, Indonesia",
    period: "Jul 2017 — Mar 2020",
    periodStart: "2017-07",
    periodEnd: "2020-03",
    highlights: [
      "Built a solid technical foundation in server administration and network infrastructure.",
    ],
    certifications: ["MTCNA — MikroTik Certified Network Associate"],
  },
];
