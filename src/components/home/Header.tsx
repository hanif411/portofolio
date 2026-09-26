"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/src/components/ui/sheet";
import { Button } from "@/src/components/ui/button";
import { ModeToggle } from "../ui/mode-toggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Experience", path: "#experience" },
  { name: "Education", path: "#education" },
  { name: "Projects", path: "#projects" },
  { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>,
    path: string
  ) => {
    e.preventDefault();
    document.getElementById(path.replace("#", ""))?.scrollIntoView({
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="label-mono flex items-center gap-2.5 text-foreground transition-colors hover:text-primary">
          <span aria-hidden className="text-primary">
            &gt;
          </span>
          Hanif Sholihin
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleScroll(e, item.path)}
                className="label-mono text-muted-foreground transition-colors hover:text-primary">
                {item.name}
              </a>
            ))}
          </nav>

          <ModeToggle />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label={
                  isOpen ? "Close navigation menu" : "Open navigation menu"
                }>
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-border bg-background">
              <nav className="mt-16 flex flex-col gap-6">
                {navItems.map((item, i) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => handleScroll(e, item.path)}
                    className="label-mono flex items-baseline gap-4 text-foreground transition-colors hover:text-primary">
                    <span className="text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
