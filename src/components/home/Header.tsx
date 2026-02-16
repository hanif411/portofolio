"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet";
import { ModeToggle } from "../ui/mode-toggle";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Contact", path: "#contact" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => {
    e.preventDefault();
    const targetId = path.replace("#", "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="flex items-center gap-2 font-bold text-xl group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-primary-foreground font-bold">
              terminal
            </span>
          </div>
          <span className="text-foreground">Hanif Sholihin</span>
          <div>
            <ModeToggle/>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleScroll(e, item.path)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {item.name}
            </a>
          ))}
          <Button
            onClick={(e: any) => handleScroll(e, "#contact")}
            className="gap-2 font-bold uppercase tracking-tighter">
            <span className="material-symbols-outlined text-sm">
              rocket_launch
            </span>
            Let's Connect
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden">
              <span className="material-symbols-outlined">
                {isOpen ? "close" : "menu"}
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-background border-border">
            <div className="flex flex-col gap-4 mt-12">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleScroll(e, item.path)}
                  className="text-2xl font-black uppercase tracking-tighter hover:text-primary transition-colors">
                  {item.name}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;