import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/home/Header";
import { ThemeProvider } from "@/src/components/ui/theme-provider";
import { profile } from "@/src/data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://www.hanifsholihin.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hanif Sholihin — Full Stack Developer",
    template: "%s — Hanif Sholihin",
  },
  description: profile.summary,
  keywords: [
    "Hanif Sholihin",
    "Full Stack Developer",
    "Golang",
    "Go Developer",
    "Next.js",
    "React",
    "Backend Engineer",
    "DevOps",
    "AI Automation",
    "Bekasi",
    "Indonesia",
  ],
  authors: [{ name: "Hanif Sholihin", url: SITE_URL }],
  creator: "Hanif Sholihin",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Hanif Sholihin",
    title: "Hanif Sholihin — Full Stack Developer",
    description: profile.summary,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Hanif Sholihin — Full Stack Developer",
    description: profile.summary,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hanif Sholihin",
  jobTitle: "Full Stack Developer",
  description: profile.summary,
  url: SITE_URL,
  email: "mailto:hanifsholihin884@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bekasi",
    addressCountry: "ID",
  },
  sameAs: [
    "https://www.linkedin.com/in/hanifsholihin411/",
    "https://github.com/hanif411",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Dumbways Indonesia" },
    { "@type": "CollegeOrUniversity", name: "SMK Negeri 3 Kota Bekasi" },
  ],
  knowsAbout: [
    "Go",
    "Next.js",
    "React",
    "PostgreSQL",
    "Redis",
    "Docker",
    "DevOps",
    "AI Automation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-background font-sans text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
