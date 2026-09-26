import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

export interface ContactChannel {
  id: string;
  icon: LucideIcon;
  heading: string;
  blurb: string;
  cta: string;
  href: string;
  external: boolean;
}

export const contactChannels: ContactChannel[] = [
  {
    id: "email",
    icon: Mail,
    heading: "Stay in Touch",
    blurb: "Reach out via email for inquiries or collaborations.",
    cta: "Go to Gmail",
    href: "mailto:hanifsholihin884@gmail.com",
    external: false,
  },
  {
    id: "linkedin",
    icon: Linkedin,
    heading: "Let\u2019s Connect",
    blurb: "Connect with me professionally on LinkedIn.",
    cta: "Go to Linkedin",
    href: "https://www.linkedin.com/in/hanifsholihin411/",
    external: true,
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    heading: "Quick Chat",
    blurb: "Chat instantly on WhatsApp for fast response.",
    cta: "Chat on WA",
    href: "https://wa.me/628151624951?text=Hi%20Hanif%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect%21",
    external: true,
  },
  {
    id: "github",
    icon: Github,
    heading: "Explore Code",
    blurb: "Explore my open-source work and projects.",
    cta: "Go to Github",
    href: "https://github.com/hanif411",
    external: true,
  },
];
