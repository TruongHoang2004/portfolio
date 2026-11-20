import { ArrowUpRight, Code2 } from "lucide-react";
import { hexta, personalProjects } from "@/data/projects";

export function PersonalProjects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-16 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Code2 className="w-7 h-7 text-accent" aria-hidden="true" />
        <h2 id="projects-title" className="text-3xl font-bold tracking-tight">Projects</h2>
      </div>

      <div className="rounded-2xl border border-accent/40 bg-muted/40 p-5 md:p-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-6 border-b border-border">
          <div className="max-w-2xl">
            <p className="notebook-label">{hexta.status}</p>
            <h3 className="font-serif text-4xl mt-2">{hexta.name}</h3>
            <p className="text-lg mt-2">{hexta.tagline}</p>
            <p className="text-muted-foreground leading-relaxed mt-2">{hexta.description}</p>
          </div>
          <a href={hexta.url} target="_blank" rel="noreferrer" className="notebook-button shrink-0 self-start md:self-auto">
            hexta.org <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        <ol className="grid md:grid-cols-3 gap-4 mt-6" aria-label={`Applications of ${hexta.name}`}>
          {personalProjects.map((project, index) => (
            <li key={project.name}>
              <article className="h-full rounded-xl border border-border bg-background p-5 flex flex-col">
                <p className="font-mono text-[11px] tracking-widest uppercase text-accent mb-2">
                  {hexta.name} app {String(index + 1).padStart(2, "0")} · {project.category}
                </p>
                <h4 className="text-xl font-bold mb-2">{project.name}</h4>
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
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
