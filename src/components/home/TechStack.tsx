import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { stack } from "@/src/text/techStack";
import { Terminal, Code, Monitor, Server, Wrench } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  code: <Code className="w-6 h-6" />,
  devices: <Monitor className="w-6 h-6" />,
  dns: <Server className="w-6 h-6" />,
  construction: <Wrench className="w-6 h-6" />,
};

const TechStack = () => {
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-10">
        <Terminal className="text-primary w-7 h-7" />
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          My Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stack.map((group) => (
          <Card
            key={group.category}
            className={`${group.bgColor} border-border shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-border`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <span className={group.iconColor}>
                  {iconMap[group.icon]}
                </span>
                {group.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-muted/80 hover:bg-primary hover:text-primary-foreground text-muted-foreground py-1.5 px-3 border border-border/50 transition-all cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
