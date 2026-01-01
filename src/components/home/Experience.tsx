import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Factory, Store, Code2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Fullstack Web Developer",
      company: "Freelance & Specialized Projects",
      period: "September 2025 - Present",
      icon: <Code2 className="w-5 h-5" />,
      description:
        "Engineered automated management systems and high-performance web applications. Successfully integrated Gemini AI to streamline data-entry workflows and architected real-time systems utilizing Redis & Socket.io for seamless user experiences.",
      isCurrent: true,
      skills: ["Next.js", "TypeScript", "AI Integration", "PostgreSQL"],
    },
    {
      title: "Retail Admin & Marketing",
      company: "Toko Imam Syafii Bekasi",
      period: "January 2024 - August 2025",
      icon: <Store className="w-5 h-5" />,
      description:
        "Managed inventory operations and sales cycles. This frontline experience directly inspired the creation of 'Admin AI Assistant,' identifying and solving critical human-error risks in manual invoice processing through automation.",
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
        "Executed high-precision production standards within a world-class manufacturing environment. Cultivated a rigorous industrial discipline and Quality Control (QC) mindset that now defines my standard for writing clean, optimized, and bug-free code.",
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
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-6 italic">
                  "{exp.description}"
                </p>

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
