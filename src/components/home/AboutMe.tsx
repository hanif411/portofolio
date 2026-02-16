import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Download, CheckCircle2, Zap, LayoutList } from "lucide-react";

function AboutMe() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Story Transition - Left */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-4xl font-bold">
              engineering
            </span>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-foreground">
              Background & Story
            </h2>
          </div>

          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed text-justify">
            <p>
              My journey didn't start behind a monitor. I began my professional
              career at
              <span className="text-foreground font-bold tracking-wide">
                {" "}
                Yamaha Music
              </span>
              , where I learned that{" "}
              <span className="text-primary font-bold">Discipline</span> and
              <span className="text-primary font-bold">
                {" "}
                Product Quality
              </span>{" "}
              are non-negotiable industry standards. In manufacturing, a small
              mistake means a defective product. I carry that exact mindset into
              my code:
              <span className="italic text-muted-foreground">
                {" "}
                there is no "as long as it works"—every line must be understood
                and function optimally.
              </span>
            </p>

            <p>
              Transitioning into{" "}
              <span className="text-foreground font-bold">
                Retail (Admin & Marketing)
              </span>
              , I faced new challenges. I saw firsthand how manual data entry
              and stock reconciliation overwhelmed the team, draining both time
              and accuracy. Instead of accepting the status quo, my instinct was
              clear:
              <span className="text-foreground italic">
                {" "}
                "This needs to be automated."
              </span>
            </p>

            <p>
              That became my "why" for becoming a{" "}
              <span className="text-foreground font-bold underline decoration-primary underline-offset-4">
                Fullstack Developer
              </span>
              . I bridge the gap between factory-grade Quality Control and
              real-world retail experience to build software that solves actual
              business problems. My mission is simple:
              <span className="text-foreground font-bold underline decoration-primary/50">
                {" "}
                Eliminate manual workflows, prevent human error, and engineer
                highly efficient systems.
              </span>
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button className="rounded-xl px-8 h-12 gap-2 bg-primary hover:bg-primary/90 font-black uppercase tracking-wider text-primary-foreground">
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Highlight Stats/Principles - Right */}
        <div className="w-full md:w-[400px] grid grid-cols-1 gap-4">
          <Card className="bg-card/80 border-border border-l-4 border-l-primary shadow-2xl backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <CheckCircle2 className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase text-sm tracking-widest">
                    Discipline & Quality
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Applying industrial-grade standards and rigorous discipline
                    to every line of code.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border border-l-4 border-l-blue-500 shadow-2xl backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <LayoutList className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase text-sm tracking-widest">
                    Retail Logic
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Deep understanding of administrative and marketing workflows
                    for practical field solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 border-border border-l-4 border-l-green-500 shadow-2xl backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Zap className="text-green-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground uppercase text-sm tracking-widest">
                    Automation Focus
                  </h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Converting hours of manual tasks into seconds using
                    AI-powered automation and OCR.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
