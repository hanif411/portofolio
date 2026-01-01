import React from "react";
import { Button } from "@/src/components/ui/button";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 border-t border-zinc-800">
      <div className="flex items-center gap-3 mb-12">
        <span className="material-symbols-outlined">rocket_launch</span>
        Let's Connect
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600/20 to-zinc-900 border border-zinc-800 p-8 hover:border-red-500/50 transition-all duration-300">
          <div className="relative z-10">
            <h3 className="text-white font-black uppercase tracking-tight text-xl mb-2">
              Stay in Touch
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
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

        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 to-zinc-900 border border-zinc-800 p-8 hover:border-blue-500/50 transition-all duration-300">
          <div className="relative z-10">
            <h3 className="text-white font-black uppercase tracking-tight text-xl mb-2">
              Let's Connect
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
              Connect with me professionally on LinkedIn.
            </p>
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 font-bold gap-2 rounded-xl">
              <a
                href="https://www.linkedin.com/in/hanif-sholihin-319301246/"
                target="_blank">
                Go to Linkedin <Linkedin className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <Linkedin className="absolute -right-4 -bottom-4 w-32 h-32 text-blue-500/10 group-hover:text-blue-500/20 transition-all duration-500 rotate-12" />
        </div>

        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-600/20 to-zinc-900 border border-zinc-800 p-8 hover:border-zinc-500/50 transition-all duration-300">
          <div className="relative z-10">
            <h3 className="text-white font-black uppercase tracking-tight text-xl mb-2">
              Explore Code
            </h3>
            <p className="text-zinc-400 text-sm mb-6">
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
          <Github className="absolute -right-4 -bottom-4 w-32 h-32 text-zinc-500/10 group-hover:text-zinc-500/20 transition-all duration-500 rotate-12" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-zinc-900/40 border border-zinc-800 rounded-[2rem] p-8 md:p-12">
        <h3 className="text-white text-center font-black uppercase tracking-tighter text-2xl mb-8 italic">
          Or send me a message
        </h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:border-primary outline-none transition-all"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:border-primary outline-none transition-all"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white focus:border-primary outline-none transition-all md:col-span-2"></textarea>
          <Button className="md:col-span-2 bg-white text-black hover:bg-zinc-200 font-black uppercase tracking-widest py-6 rounded-xl gap-2">
            Send Email <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>

      <p className="text-center text-zinc-300 mt-20 tracking-[0.4em]">
        Copyright © 2025 Hanif Sholihin. All rights reserved.
      </p>
    </section>
  );
};

export default ContactSection;
