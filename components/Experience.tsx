"use client";

import { motion } from "framer-motion";
import { getExperiencesData } from "@/data/experience";
import { Briefcase, ChevronRight, CircleDot } from "lucide-react";
import React from "react";
import { useLocale, useTranslations } from "next-intl";

export function Experience() {
  const locale = useLocale();
  const t = useTranslations("Experience");
  const experiencesData = getExperiencesData(locale);

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 flex items-center gap-4"
      >
        <Briefcase className="w-8 h-8 text-accent" />
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
          <div className="w-12 h-1 bg-accent rounded-full mt-2"></div>
        </div>
      </motion.div>

      <div className="space-y-16">
        {experiencesData.map((exp, index) => (
          <motion.div
            key={exp.company + exp.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline connector */}
            <div className="hidden md:block absolute left-[15px] top-10 bottom-[-4rem] w-[2px] bg-gradient-to-b from-accent/50 to-transparent last:hidden"></div>
            
            <div className="md:grid md:grid-cols-12 md:gap-8 items-start relative">
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-background border-4 border-accent z-10 items-center justify-center shadow-md">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              </div>
              
              {/* Left column: Company info */}
              <div className="mb-6 md:mb-0 md:col-span-4 pt-1 md:pl-12">
                <div className="flex items-center gap-3 md:hidden mb-3">
                  <div className="w-8 h-8 rounded-full bg-background border-4 border-accent shrink-0 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-sm font-semibold px-3 py-1 bg-accent/10 text-accent rounded-full">{exp.period}</span>
                </div>
                <h3 className="font-extrabold text-2xl text-foreground mb-1">{exp.company}</h3>
                <h4 className="text-lg text-muted-foreground font-medium mb-3">{exp.role}</h4>
                <span className="text-sm font-semibold px-3 py-1 bg-accent/10 text-accent rounded-full hidden md:inline-block shadow-sm">{exp.period}</span>
              </div>
              
              {/* Right column: Details */}
              <div className="md:col-span-8 space-y-6">
                {exp.description && (
                  <p className="text-muted-foreground leading-relaxed text-base italic border-l-4 border-accent/30 pl-4 py-1">
                    {exp.description}
                  </p>
                )}
                
                <div className="space-y-6">
                  {exp.projects.map((project, pIdx) => (
                    <motion.div 
                      key={pIdx} 
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
                    >
                      {project.name && (
                        <div className="mb-4">
                          <h5 className="font-bold text-xl text-foreground flex items-center gap-2">
                            <CircleDot className="w-4 h-4 text-accent" />
                            {project.name}
                          </h5>
                          {project.description && (
                            <p className="text-muted-foreground text-sm mt-1 ml-6">
                              {project.description}
                            </p>
                          )}
                        </div>
                      )}
                      
                      <ul className="space-y-3 mb-5">
                        {project.achievements.map((achievement, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                            <ChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {project.technologies && (
                        <div className="mt-6 pt-4 border-t border-border/50">
                          <span className="text-xs font-bold uppercase tracking-wider text-foreground mb-2 block">
                            Tech Stack
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.split('·').map(tech => tech.trim()).filter(Boolean).map((tech, i) => (
                              <span key={i} className="px-2.5 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md border border-border/50">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

