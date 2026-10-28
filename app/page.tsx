import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PersonalProjects } from "@/components/PersonalProjects";
import { LearningMindmap } from "@/components/LearningMindmap";

export default function Home() {
  return (
    <main className="notebook min-h-screen bg-background relative selection:bg-accent/30">
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        <ThemeToggle />
      </div>
      
      <header className="max-w-5xl mx-auto px-6 pt-7">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-border">
          <a href="#" className="font-mono text-xs tracking-widest font-semibold">TRƯỜNG / ENGINEERING</a>
          <nav aria-label="Main navigation" className="flex gap-6 text-xs text-muted-foreground">
            <a href="#projects" className="hover:text-accent">Work</a>
            <a href="#learning" className="hover:text-accent">Learning</a>
            <a href="#experience" className="hover:text-accent">Experience</a>
          </nav>
        </div>
      </header>
      <div>
        <Hero />
        <Skills />
        <PersonalProjects />
        <LearningMindmap />
        <div id="experience"><Experience /></div>
        <Education />
      </div>

      <footer className="py-8 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Hoàng Xuân Trường. All rights reserved.</p>
      </footer>
    </main>
  );
}
