import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { stack } from "@/src/text/techStack";

const TechStack = () => {
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-10">
        <span className="material-symbols-outlined text-primary text-3xl">
          terminal
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          My Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stack.map((group) => (
          <Card
            key={group.category}
            className={`${group.bgColor} border-border shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-border`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg">
                <span
                  className={`material-symbols-outlined ${group.iconColor}`}>
                  {group.icon}
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
