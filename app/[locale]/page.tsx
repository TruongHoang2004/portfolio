import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LangToggle } from "@/components/LangToggle";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Footer');

  return (
    <main className="min-h-screen bg-background relative selection:bg-accent/30">
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        <LangToggle />
        <ThemeToggle />
      </div>
      
      <div>
        <Hero />
        <Skills />
        <Experience />
        <Education />
      </div>

      <footer className="py-8 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Hoàng Xuân Trường. {t('rights')}</p>
      </footer>
    </main>
  );
}
