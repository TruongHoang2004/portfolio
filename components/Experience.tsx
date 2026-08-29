"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "SETA International",
    role: "Software Engineer",
    period: "Sep 2025 – Present",
    description: "Contributed to multiple enterprise projects, spanning platform engineering, full-stack development, and cloud infrastructure.",
    projects: [
      {
        name: "Veritone (aiWARE Processing)",
        description: "Distributed AI Processing & Workflow Automation Platform",
        achievements: [
          "Upgraded the Node.js workflow execution runtime to v4.1.8+, validating plugin, expression, and parsing compatibility while addressing vulnerabilities inherited from the previous major version.",
          "Designed and implemented immutable, commit-based Docker image versioning across 7+ repositories and 3 release channels, integrating changes across CI/CD, Helm, GitOps, Go control-plane, and GraphQL workflows to ensure reproducible deployments and prevent stale runtime images.",
          "Improved runtime observability by exposing build metadata through Prometheus metrics, enabling QA, support, and engineering teams to verify deployed runtime versions without direct Kubernetes access.",
          "Identified and analyzed a critical SQL injection vulnerability, tracing the attack path from authenticated input to dynamically constructed SQL and defining the required remediation scope.",
          "Remediated 22 Critical, 55 High severity container CVEs, and 8 dependency vulnerabilities, while defining a standardized non-root container pattern to improve platform security.",
          "Resolved a frontend framework migration regression across 15 administration pages and fixed CI/CD failures caused by Node.js runtime and package-manager incompatibilities.",
          "Improved distributed job diagnostics and reliability by propagating accurate engine failure reasons into task records and investigating multi-hour job-status synchronization delays between edge clusters and the central API."
        ],
        technologies: "Go · Node.js · React · GraphQL · PostgreSQL · Docker · Kubernetes · Helm · Argo CD · Jenkins · Prometheus · GitOps"
      },
      {
        name: "Veritone (aiWARE Core)",
        description: "Multi-tenant AI Platform",
        achievements: [
          "Migrated the public GraphQL API from Apollo/Express to GraphQL Yoga + Envelop on Fastify and upgraded to GraphQL v16, modernizing the API foundation with no test regressions.",
          "Designed and implemented a typed sorting API for application-package listings, supporting 5 sortable fields and configurable direction while preserving existing filtering and pagination.",
          "Added batch retrieval by ID list to the applications API, replacing N per-application round trips with a single request and reducing client-side API overhead.",
          "Implemented role-to-application authorization validation in user creation and update flows, preventing invalid role assignments that could silently strip permissions under object-level access control.",
          "Resolved cross-cluster application packaging failures by exposing a missing entity-type field in the GraphQL API, fixing enum validation errors in the package export/import CLI.",
          "Root-caused a high-priority production outage following a content-hierarchy schema migration, identifying 169 corrupted records (151 root folders) out of 363,515 through SQL analysis and driving a preventative migration design.",
          "Diagnosed and remediated additional migration defects, including a type-mapping mismatch that emptied a downstream analytics API and a null-handling bug, restoring affected organizations' data.",
          "Remediated all Critical and High container CVEs to zero remaining Trivy findings and improved CI reliability by refactoring integration tests that blocked pull-request verification."
        ],
        technologies: "Node.js · GraphQL · GraphQL Yoga · Fastify · PostgreSQL · SQL · Docker · Kubernetes · Helm · Argo CD · CI/CD · RBAC · Object-level Authorization · Data Migrations"
      },
      {
        name: "Edu Vengy",
        description: "AI-Powered E-Learning & Training Management Platform",
        achievements: [
          "Authored the initial infrastructure sizing and operating-cost proposal (CPU/RAM/storage/network per module, third-party AI API and hosting costs by phase), forming the technical basis of the client-facing solution proposal.",
          "Bootstrapped core infrastructure from zero — provisioned the server, configured public IP/DNS/firewall, and built a GitHub Actions CI/CD pipeline (lint, unit tests, Dockerize, auto-deploy to Dev on merge to develop) with secrets managed via Actions.",
          "Designed and implemented a PostgreSQL backup and disaster-recovery runbook (full + continuous WAL archiving, automated failure alerting via Slack/Telegram/Email), meeting RPO < 1 hour and RTO < 30 minutes targets.",
          "Migrated platform file storage from MinIO to AWS S3 and built a scheduled, automated S3 backup system with status logging and restore capability.",
          "Eliminated all mock/hardcoded data from the backend and refactored duplicated media-browser logic (search, prefix navigation, thumbnail selection) across two separate admin/editor surfaces into a single shared useMediaBrowser hook, as part of a broader backend API code-quality standardization.",
          "Built a system-wide audit log capturing CREATE/UPDATE/DELETE actions with before/after diffs, actor, and timestamp, exposed via a paginated, filterable, permission-gated API.",
          "Designed and shipped a learning-material embedding system enabling instructors to reuse library content across lessons without file duplication, backed by server-side permission validation.",
          "Extended the quiz engine with 4 new auto-graded question types (true/false, fill-in-the-blank, matching, ordering) and implemented source-linking from quiz questions back to their originating Course → Chapter → Lesson for post-exam review navigation.",
          "Led an application-wide UX standardization pass — unsaved-changes warnings, localized toast messaging, and simplified delete confirmations — reducing accidental data loss and inconsistent user feedback."
        ],
        technologies: "TypeScript · React · Vite · Node.js · PostgreSQL · MinIO · AWS S3 · Docker · GitHub Actions"
      },
      {
        name: "EMS (Employee Management System)",
        description: "Enterprise HR & Resource Management Platform",
        achievements: [
          "Built the EMS platform from the ground up, developing end-to-end features across the backend, frontend, authentication, authorization, and deployment configuration.",
          "Designed and implemented the IAM system, including project-based RBAC, JWT authentication with database-backed sessions, and Microsoft OAuth/SSO.",
          "Built core HR workflows and integrations, including employee lifecycle management, Draft Profile approval, webhook APIs, MinIO document storage, Microsoft Teams integration, and AI-powered resume processing.",
          "Developed the frontend application with employee profile management, advanced search/filtering, project-aware navigation, PDF CV import/export, image cropping, i18n, and Dark Mode.",
          "Set up Staging/Non-prod environments, configuring service boundaries, environment variables, encryption keys, MinIO storage, and CI/CD deployment configurations."
        ],
        technologies: "TypeScript · React · Backend APIs · MinIO · Microsoft OAuth · JWT · Git · CI/CD"
      }
    ]
  },
  {
    company: "Tiên Phong Telecom Ecommerce",
    role: "Tech Lead / Backend Engineer (Freelancer)",
    period: "Mar 2025 - Aug 2025",
    projects: [
      {
        achievements: [
          "Led the technical architecture of the platform, defining backend project structures, REST API contracts, and database schemas while coordinating implementation with the frontend developer.",
          "Built core e-commerce backend services with NestJS and TypeORM, developing advanced business logic for shopping carts, checkout flows, transaction handling, and paginated order filtering.",
          "Integrated Strapi Headless CMS for product catalog management, designing robust webhook endpoints to seamlessly sync product and collection data in real-time with the PostgreSQL database.",
          "Extended the identity and access management system, implementing JWT authentication, role-based access control, and comprehensive user profile and multi-address management APIs.",
          "Containerized the entire application stack (NestJS, Next.js, Strapi, PostgreSQL) using Docker and Docker Compose, and configured CI/CD pipelines via GitHub Actions for automated testing."
        ],
        technologies: "NestJS · TypeScript · PostgreSQL · TypeORM · Strapi CMS · JWT · Docker · GitHub Actions"
      }
    ]
  },
  {
    company: "National Cyber Security Center of Vietnam",
    role: "Fullstack Developer Intern",
    period: "Sep 2024 - Mar 2025",
    projects: [
      {
        achievements: [
          "Worked as part of a 5-member development team, primarily responsible for backend development and DevOps, while contributing to full-stack web application development.",
          "Implemented backend APIs and supported application deployment and environment configuration, gaining hands-on experience with real-world development workflows.",
          "Collaborated with teammates through task breakdown, Git-based development, code reviews, and team coordination, building a strong foundation in professional software engineering practices."
        ],
      }
    ]
  }
];

export function Experience() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold tracking-tight mb-2">Work Experience</h2>
        <div className="w-12 h-1 bg-accent rounded-full"></div>
      </motion.div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company + exp.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
            <div className="hidden md:block absolute left-[8.5px] top-8 bottom-[-3rem] w-px bg-border last:hidden"></div>
            
            <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline relative">
              <div className="hidden md:flex absolute left-0 top-2 w-5 h-5 rounded-full bg-background border-4 border-accent z-10 items-center justify-center"></div>
              
              <div className="mb-4 md:mb-0 md:col-span-1 pt-1">
                <div className="flex items-center gap-2 md:hidden mb-2 -ml-8">
                  <div className="w-5 h-5 rounded-full bg-background border-4 border-accent shrink-0"></div>
                  <span className="text-sm font-medium text-accent">{exp.period}</span>
                </div>
                <h3 className="font-bold text-xl text-foreground">{exp.company}</h3>
                <h4 className="text-muted-foreground font-medium">{exp.role}</h4>
                <span className="text-sm font-medium text-accent hidden md:block mt-2">{exp.period}</span>
              </div>
              
              <div className="md:col-span-3 space-y-8">
                {exp.description && (
                  <p className="text-muted-foreground italic border-l-2 border-border pl-4">
                    {exp.description}
                  </p>
                )}
                
                {exp.projects.map((project, pIdx) => (
                  <div key={pIdx} className="bg-muted/30 p-6 rounded-2xl border border-border">
                    {project.name && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-lg text-foreground">
                          Project: {project.name}
                        </h5>
                        {project.description && (
                          <p className="text-muted-foreground text-sm">
                            {project.description}
                          </p>
                        )}
                      </div>
                    )}
                    
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm mb-4">
                      {project.achievements.map((achievement, aIdx) => (
                        <li key={aIdx} className="pl-1">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    
                    {project.technologies && (
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                          Technologies:
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">
                          {project.technologies}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
