import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PersonalProjects } from "@/components/PersonalProjects";
import { LearningMindmap } from "@/components/LearningMindmap";
import { Download } from "lucide-react";
import { CV_PDF_PATH } from "@/data/cv";

export default function Home() {
  return (
    <main className="notebook min-h-screen bg-background relative selection:bg-accent/30">
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        <ThemeToggle />
      </div>
      
      <header className="max-w-5xl mx-auto px-6 pt-7">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-border">
          <a href="#" className="font-mono text-xs tracking-widest font-semibold">TRƯỜNG / ENGINEERING</a>
          <nav aria-label="Main navigation" className="flex items-center gap-6 text-xs text-muted-foreground">
            <a href="#projects" className="hover:text-accent">Work</a>
            <a href="#learning" className="hover:text-accent">Learning</a>
            <a href="#experience" className="hover:text-accent">Experience</a>
            <a href="/cv" className="hover:text-accent">CV</a>
            <a href={CV_PDF_PATH} download className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-accent text-accent rounded hover:bg-accent hover:text-accent-foreground transition-colors">
              <Download className="w-3.5 h-3.5" aria-hidden="true" />Download CV
            </a>
          </nav>
        </div>
      </header>
      <div>
        <Hero />
        <Skills />
        <LearningMindmap />
        <div id="experience"><Experience /></div>
        <Education />
        <PersonalProjects />
      </div>

      <footer className="py-8 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Hoàng Xuân Trường. All rights reserved.</p>
      </footer>
    </main>
  );
}
