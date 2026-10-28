import { ArrowUpRight, Code2 } from "lucide-react";
import { personalProjects } from "@/data/projects";

export function PersonalProjects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-16 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-3">
        <Code2 className="w-7 h-7 text-accent" aria-hidden="true" />
        <h2 id="projects-title" className="text-3xl font-bold tracking-tight">Selected Work</h2>
      </div>
      <p className="text-muted-foreground mb-8 max-w-2xl">Products I’m building and engineering problems I’m working on. Each is a place to put ideas into practice.</p>
      <div className="grid md:grid-cols-2 gap-5">
        {personalProjects.map((project) => (
          <article key={project.name} className="rounded-2xl border border-border bg-background p-6 shadow-sm flex flex-col">
            <p className="text-xs font-medium text-accent mb-3">{project.category}</p>
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
            <ul className="list-disc pl-4 space-y-2 text-sm text-muted-foreground leading-relaxed mb-5">
              {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
            <div className="mt-auto pt-4 border-t border-border/60">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.split(" · ").map((tech) => <span key={tech} className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">{tech}</span>)}
              </div>
              {project.url && <a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-accent underline underline-offset-4">Repository <span className="sr-only">for {project.name}</span><ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
