import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Factory, Store, Code2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Fullstack Web Developer (Intern)",
      company: "PT Dumbways Indonesia Teknologi",
      period: "December 2025",
      icon: <Code2 className="w-5 h-5" />,
      description:
        ["● Full-Stack Development & Performance: Developed scalable web applications using Go (Golang) and Next.js, implementing Redis caching and Socket.io to ensure high-performance, real-time user experiences", 
        "● System Integration & Database: Architected robust backend systems with PostgreSQL and Prisma ORM, including secure Midtrans payment gateway integration and automated Webhooks for seamless transaction handling.",
        "● Agile Collaboration & Code Quality: Collaborated in a fast-paced Agile/Scrum team, actively participating in sprint planning and code reviews via Git/GitHub to maintain high standards of clean code and system stability."],
      isCurrent: true,
      skills: ["Next.js", "TypeScript", "AI Integration", "PostgreSQL"],
    },
    {
      title: "IT & Digital Operations",
      company: "Toko Imam Syafii",
      period: "January 2024 - August 2025",
      icon: <Store className="w-5 h-5" />,
      description:
        ["● Web & Digital Sales Optimization: Optimized WordPress performance and product catalogs while executing high-impact Digital Ads (Google & Social Media) to drive online sales and ensure end-to-end business growth.",
        "● System Migration & Data Integrity: Led the seamless migration of POS systems from iPos to Azzam POS and Odoo, synchronizing inventory databases to maintain 100% data integrity between stock levels and sales reports.",
        "● Infrastructure & Technical Support: Managed comprehensive network connectivity and hardware maintenance, providing on-site and remote troubleshooting to ensure 100% system uptime for daily operations."
        ],
      isCurrent: false,
      skills: [
        "Inventory Management",
        "Business Logic",
        "Operational Efficiency",
        "Automation Analysis",
      ],
    },
    {
      title: "Production Operator",
      company: "Yamaha Music Manufacturing Asia",
      period: "March 2020 - August 2022",
      icon: <Factory className="w-5 h-5" />,
      description:
        ["● Operational Excellence: Maintained 100% SOP adherence and high precision in Quality Control (QC) processes within a high-pressure environment, ensuring zero-defect production standards."],
      isCurrent: false,
      skills: [
        "Industrial Discipline",
        "Quality Control (QC)",
        "SOP Adherence",
        "Precision Engineering",
      ],
    },
  ];

  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-12">
        <span className="material-symbols-outlined text-primary text-3xl font-bold">
          history_edu
        </span>
        <h2 className="text-3xl font-black uppercase tracking-tighter text-white">
          Journey & Experience
        </h2>
      </div>

      <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Timeline Dot with Icon */}
            <div
              className={`absolute -left-[17px] top-0 p-2 rounded-full border-2 bg-zinc-950 transition-colors duration-500 ${
                exp.isCurrent
                  ? "border-primary text-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                  : "border-zinc-800 text-zinc-500"
              }`}>
              {exp.icon}
            </div>

            <div className="flex flex-col gap-1 mb-2">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3
                  className={`text-xl font-black uppercase tracking-tight ${
                    exp.isCurrent ? "text-primary" : "text-white"
                  }`}>
                  {exp.title}
                </h3>
                <span className="text-xs font-mono font-bold text-zinc-500 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full uppercase tracking-widest">
                  {exp.period}
                </span>
              </div>
              <p className="text-zinc-400 font-bold flex items-center gap-2">
                {exp.company}
              </p>
            </div>

            <Card className="bg-zinc-900/30 border-zinc-800/50 hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-6">
                {exp.description.map((desc)=>(
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-6 italic">
                  {desc}
                </p>
                ))}

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-zinc-950 border-zinc-800 text-[10px] text-zinc-500 uppercase tracking-tighter group-hover:border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {exp.isCurrent && (
                  <div className="mt-6 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-black text-green-500 uppercase tracking-[0.2em]">
                      Currently Active
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
