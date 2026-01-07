import { Button } from "@/src/components/ui/button";
import StatusBadge from "../shared/StatusBadge";
import profile from "@/src/public/profile.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="flex-1 max-w-2xl">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
            Hi, I'm <span className="text-primary">Hanif Sholihin</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-primary my-5">
            Fullstack Developer
          </h2>

          <div className="space-y-4 mb-8">
            <p className="text-xl text-zinc-300 leading-relaxed font-medium">
              Passionate about building
              <span className="text-primary font-bold">
                {" "}
                Scalable Web Applications{" "}
              </span>
              and system architectures that streamline business operations.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              From engineering real-time social media platforms to integrating
              e-commerce with payment gateways. I enjoy turning complex business
              logic into clean code, often leveraging
              <span className="text-zinc-100 font-medium"> AI automation </span>
              to eliminate repetitive manual processes.
            </p>
          </div>

          <div className="mb-8">
            <StatusBadge />
          </div>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gap-2">
              <span className="material-symbols-outlined">rocket_launch</span>
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <span className="material-symbols-outlined">mail</span>
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-full opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
          <div className="relative rounded-full h-64 w-64 md:h-90 md:w-90 border-8 border-background overflow-hidden bg-zinc-900">
            <img
              src={profile as unknown as string}
              alt="Hanif Sholihin"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
