import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-accent/30">
      <nav className="absolute top-0 w-full p-6 flex justify-end z-50 max-w-5xl left-1/2 -translate-x-1/2">
        <ThemeToggle />
      </nav>
      
      <div className="pt-12 md:pt-20">
        <Hero />
        <Skills />
        <Experience />
        <Education />
      </div>

      <footer className="py-8 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Hoàng Xuân Trường. All rights reserved.</p>
      </footer>
    </main>
  );
}
