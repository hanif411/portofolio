import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Store, Code2, Terminal } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "PT Digi Sistem Solusindo",
      period: "February 2026 - Present",
      icon: <Terminal className="w-5 h-5" />,
      description: [
        "● Backend API Engineering: Engineered and enhanced backend APIs using Golang for seamless integration with Bank Papua, ensuring secure, stable, and high-integrity financial transactions.",
        "● Performance & Notifications: Optimized application performance by implementing Redis Caching and streamlined system notifications through a robust SMTP Server integration.",
        "● PostgreSQL Optimization: Managed and optimized complex PostgreSQL queries, implementing efficient data searching techniques to handle large-scale banking data synchronization."
      ],
      isCurrent: true,
      skills: ["Go (Golang)", "Redis", "PostgreSQL", "API Integration", "SMTP Server"],
    },
    {
      title: "Full Stack Developer (Internship)",
      company: "PT Dumbways Indonesia Teknologi",
      period: "October 2025 – January 2026",
      icon: <Code2 className="w-5 h-5" />,
      description: [
        "● Full-Stack Development: Developed high-performance web applications using Golang and Next.js, implementing Redis caching to speed up API response times and user data retrieval.",
        "● Payment Integration & Webhooks: Integrated Midtrans Payment Gateway and configured automated Webhooks with PostgreSQL, ensuring secure and automated order status synchronization.",
        "● Agile Collaboration: Collaborated within an Agile/Scrum environment, participating in code reviews via Git/GitHub to maintain high-quality code and system stability."
      ],
      isCurrent: false,
      skills: ["Go (Golang)", "Next.js", "Redis", "PostgreSQL", "Midtrans", "Agile/Scrum"],
    },
    {
      title: "IT & Digital Operations",
      company: "Toko Imam Syafii",
      period: "January 2024 – August 2025",
      icon: <Store className="w-5 h-5" />,
      description: [
        "● POS & Database Migration: Led the migration of POS systems from iPos to Azzam POS and Odoo, synchronizing inventory databases to maintain 100% data integrity between stock levels and sales reports.",
        "● Infrastructure & Network Management: Managed network infrastructure and hardware maintenance, delivering on-site and remote troubleshooting to ensure 100% system uptime for daily business operations."
      ],
      isCurrent: false,
      skills: [
        "POS Migration",
        "Odoo",
        "Database Synchronization",
        "Network Infrastructure",
        "System Uptime",
      ],
    },
  ];

  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-12">
        <span className="text-primary text-3xl font-bold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        </span>
        <h2 className="text-3xl font-black uppercase tracking-tighter text-foreground">
          Journey & Experience
        </h2>
      </div>

      <div className="relative border-l-2 border-border ml-4 md:ml-6 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Timeline Dot with Icon */}
            <div
              className={`absolute -left-[17px] top-0 p-2 rounded-full border-2 bg-background transition-colors duration-500 ${
                exp.isCurrent
                  ? "border-primary text-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]"
                  : "border-border text-muted-foreground"
              }`}>
              {exp.icon}
            </div>

            <div className="flex flex-col gap-1 mb-2">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3
                  className={`text-xl font-black uppercase tracking-tight ${
                    exp.isCurrent ? "text-primary" : "text-foreground"
                  }`}>
                  {exp.title}
                </h3>
                <span className="text-xs font-mono font-bold text-muted-foreground bg-muted border border-border px-3 py-1 rounded-full uppercase tracking-widest">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground font-bold flex items-center gap-2">
                {exp.company}
              </p>
            </div>

            <Card className="bg-card/80 border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-6">
                {exp.description.map((desc)=>(
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-6 italic">
                  {desc}
                </p>
                ))}

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-background border-border text-[10px] text-muted-foreground uppercase tracking-tighter group-hover:border-primary/20">
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
                    <span className="text-[10px] font-black text-green-700 dark:text-green-400 uppercase tracking-[0.2em]">
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
