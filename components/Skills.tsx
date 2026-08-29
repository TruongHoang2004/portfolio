"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    skills: ["Golang", "TypeScript", "JavaScript", "Python", "Java", "C++", "SQL"],
  },
  {
    category: "Technologies & Frameworks",
    skills: ["Node.js", "NestJS", "Express", "Fastify", "GraphQL", "REST API", "gRPC", "React", "Next.js"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "Prisma", "Redis", "Flyway", "Atlas"],
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["Docker", "Kubernetes", "Helm", "ArgoCD", "AWS (EC2, S3, IAM)", "Nginx"],
  },
  {
    category: "Architecture",
    skills: ["Distributed Systems", "Event-driven Architecture", "Microservices", "Message Queues"],
  },
  {
    category: "DevOps & Operations",
    skills: ["GitHub Actions", "Jenkins", "Gitlab CI/CD", "Linux", "Grafana", "Loki", "Promtail", "K8s"],
  },
];

export function Skills() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border/50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold tracking-tight mb-2">Technical Arsenal</h2>
          <div className="w-8 h-1 bg-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-background border border-border rounded-xl p-4 shadow-sm"
            >
              <h3 className="font-semibold text-sm mb-3 text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-muted/50 text-muted-foreground text-xs font-medium rounded-md border border-border/50 hover:bg-muted transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
