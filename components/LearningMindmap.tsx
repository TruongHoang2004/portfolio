"use client";

import { useState } from "react";
import { ChevronDown, GitBranch } from "lucide-react";
import { learningBranches, learningUpdatedAt } from "@/data/learning";

export function LearningMindmap() {
  const [expanded, setExpanded] = useState<string[]>([]);
  const allExpanded = expanded.length === learningBranches.length;

  function toggle(id: string) {
    setExpanded((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <section id="learning" aria-labelledby="learning-title" className="py-16 bg-muted/30 border-y border-border/50 scroll-mt-6">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-2">Learning in public · {learningUpdatedAt}</p>
            <h2 id="learning-title" className="text-3xl font-bold tracking-tight">The Learning Notebook</h2>
            <p className="text-sm text-muted-foreground mt-3 max-w-xl leading-relaxed">Questions I’m working through, connected to the things I build. Open a branch for the ideas, practical context, and what comes next.</p>
          </div>
          <button type="button" onClick={() => setExpanded(allExpanded ? [] : learningBranches.map((branch) => branch.id))} className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium hover:border-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4">
            {allExpanded ? "Collapse all" : "Expand all"}
          </button>
        </div>

        <div className="learning-map">
          <div className="learning-root bg-accent text-accent-foreground rounded-2xl p-5 text-center shadow-sm">
            <GitBranch className="w-6 h-6 mx-auto mb-2" aria-hidden="true" />
            <p className="font-bold text-lg">Building better backend systems</p>
            <p className="text-sm mt-1">Go · Architecture · Reliability · AI</p>
          </div>
          <ul className="learning-branches">
            {learningBranches.map((branch, index) => {
              const isOpen = expanded.includes(branch.id);
              return (
                <li key={branch.id} className="learning-branch">
                  <div className="bg-background border border-border rounded-xl overflow-hidden shadow-sm">
                    <h3>
                      <button type="button" aria-expanded={isOpen} aria-controls={`learning-${branch.id}`} onClick={() => toggle(branch.id)} className="w-full text-left p-5 flex items-start gap-3 hover:bg-muted/40 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent">
                        <span className="shrink-0 flex items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold w-7 h-7">{String(index + 1).padStart(2, "0")}</span>
                        <span className="flex-1 min-w-0">
                          <span className="block font-semibold">{branch.title}</span>
                          <span className="block text-xs text-accent mt-1">{branch.stage}</span>
                        </span>
                        <ChevronDown aria-hidden="true" className={`w-4 h-4 shrink-0 mt-1 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </h3>
                    <div id={`learning-${branch.id}`} hidden={!isOpen} className="px-5 pb-5">
                      <p className="text-xs text-muted-foreground border-t border-border pt-4 mb-4"><span className="font-semibold text-foreground">In practice: </span>{branch.context}</p>
                      <ul className="border-l-2 border-accent/25 ml-3 space-y-4">
                        {branch.topics.map((topic) => (
                          <li key={topic.title} className="relative pl-5 before:absolute before:left-0 before:top-2 before:w-3 before:h-px before:bg-accent/40">
                            <h4 className="text-sm font-semibold">{topic.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{topic.detail}</p>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-5 rounded-lg bg-accent/5 p-3 text-sm leading-relaxed text-muted-foreground"><span className="font-semibold text-foreground">Next step: </span>{branch.nextStep}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <p className="text-xs text-muted-foreground mt-6">Learning stages describe current exploration; they are separate from the professional experience listed below.</p>
      </div>
    </section>
  );
}
