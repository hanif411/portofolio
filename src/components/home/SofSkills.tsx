import { Card, CardContent } from "@/src/components/ui/card";
import { Brain, Lightbulb, Users2, ShieldCheck, Zap } from "lucide-react";

const SoftSkills = () => {
  const skills = [
    {
      name: "Problem Solving",
      icon: <Lightbulb className="w-6 h-6 text-orange-500" />,
      bg: "bg-orange-500/10",
      description:
        "A persistent troubleshooter. I thrive on debugging complex issues and breaking down technical challenges until I find the most efficient root-cause solution.",
    },
    {
      name: "Team Collaboration",
      icon: <Users2 className="w-6 h-6 text-green-500" />,
      bg: "bg-green-500/10",
      description:
        "A proactive communicator who values collective growth. I am highly receptive to feedback and always ready to support teammates in overcoming technical roadblocks.",
    },
    {
      name: "Agile Learner",
      icon: <ShieldCheck className="w-6 h-6 text-purple-500" />,
      bg: "bg-purple-500/10",
      description:
        "Driven by curiosity and a growth mindset. I quickly adapt to emerging technologies and thrive in fast-paced, high-demand development environments.",
    },
    {
      name: "Clear Communication",
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      bg: "bg-blue-500/10",
      description:
        "Bridging the gap between technical and non-technical stakeholders. I can simplify complex concepts into actionable insights for any audience.",
    },
  ];

  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-10">
        <span className="material-symbols-outlined text-primary text-3xl font-bold">
          psychology
        </span>
        <h2 className="text-3xl font-black uppercase tracking-tighter text-white">
          Soft Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <Card
            key={skill.name}
            className="group bg-zinc-900/40 border-zinc-800 hover:border-primary/50 transition-all duration-300 overflow-hidden">
            <CardContent className="p-8">
              <div
                className={`w-14 h-14 rounded-2xl ${skill.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight text-white mb-3 leading-tight">
                {skill.name}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SoftSkills;
