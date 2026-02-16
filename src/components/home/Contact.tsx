import React from "react";
import { Button } from "@/src/components/ui/button";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="flex items-center gap-3 mb-12">
        <span className="material-symbols-outlined">rocket_launch</span>
        Let's Connect
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Email Card */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600/20 to-card border border-border p-8 hover:border-red-500/50 transition-all duration-300">
          <div className="relative z-10">
            <h3 className="text-foreground font-black uppercase tracking-tight text-xl mb-2">
              Stay in Touch
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Reach out via email for inquiries or collaborations.
            </p>
            <Button
              asChild
              className="bg-red-500 hover:bg-red-600 font-bold gap-2 rounded-xl">
              <a href="mailto:hanifsholihin884@gmail.com">
                Go to Gmail <Mail className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <Mail className="absolute -right-4 -bottom-4 w-32 h-32 text-red-500/10 group-hover:text-red-500/20 transition-all duration-500 rotate-12" />
        </div>

        {/* LinkedIn Card */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 to-card border border-border p-8 hover:border-blue-500/50 transition-all duration-300">
          <div className="relative z-10">
            <h3 className="text-foreground font-black uppercase tracking-tight text-xl mb-2">
              Let's Connect
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Connect with me professionally on LinkedIn.
            </p>
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 font-bold gap-2 rounded-xl">
              <a
                href="https://www.linkedin.com/in/hanifsholihin411/"
                target="_blank">
                Go to Linkedin <Linkedin className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <Linkedin className="absolute -right-4 -bottom-4 w-32 h-32 text-blue-500/10 group-hover:text-blue-500/20 transition-all duration-500 rotate-12" />
        </div>

        {/* WhatsApp Card */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-600/20 to-card border border-border p-8 hover:border-green-500/50 transition-all duration-300">
          <div className="relative z-10">
            <h3 className="text-foreground font-black uppercase tracking-tight text-xl mb-2">
              Quick Chat
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Chat instantly on WhatsApp for fast response.
            </p>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 font-bold gap-2 rounded-xl">
              <a
                href="https://wa.me/628151624951?text=Hi%20Hanif%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect%21"
                target="_blank">
                Chat on WA <MessageCircle className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <MessageCircle className="absolute -right-4 -bottom-4 w-32 h-32 text-green-500/10 group-hover:text-green-500/20 transition-all duration-500 rotate-12" />
        </div>

        {/* GitHub Card */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-muted/40 to-card border border-border p-8 hover:border-muted-foreground/50 transition-all duration-300">
          <div className="relative z-10">
            <h3 className="text-foreground font-black uppercase tracking-tight text-xl mb-2">
              Explore Code
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Explore my open-source work and projects.
            </p>
            <Button
              asChild
              variant="secondary"
              className="font-bold gap-2 rounded-xl">
              <a href="https://github.com/hanif411" target="_blank">
                Go to Github <Github className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <Github className="absolute -right-4 -bottom-4 w-32 h-32 text-muted-foreground/10 group-hover:text-muted-foreground/20 transition-all duration-500 rotate-12" />
        </div>
      </div>

      <p className="text-center text-muted-foreground mt-20 tracking-[0.4em]">
        Copyright © 2025 Hanif Sholihin. All rights reserved.
      </p>
    </section>
  );
};

export default ContactSection;