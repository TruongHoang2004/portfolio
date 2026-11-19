// Source of truth for the printable CV at /cv and the PDF in /public.
// After editing, regenerate the PDF: see scripts/build-cv-pdf.sh

export const CV_PDF_PATH = "/Hoang-Xuan-Truong-CV.pdf";

export type CvProject = {
  name: string;
  context?: string;
  status?: string;
  bullets: string[];
  stack?: string;
};

export type CvRole = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary?: string;
  projects: CvProject[];
};

export const cv = {
  name: "Hoàng Xuân Trường",
  title: "Backend Engineer · Go, Distributed Systems & Platform Integration",
  contact: {
    email: "xuantruong.tn.1712@gmail.com",
    phone: "0353 227 709",
    location: "Cau Giay, Ha Noi",
    github: "github.com/TruongHoang2004",
  },
  summary:
    "Software engineer with 2+ years in backend engineering, distributed systems and platform integration. I build Go and Node.js services, messaging integrations and the infrastructure that runs them, and I have spent much of my time on production work: incident root-causing, security remediation, migrations and observability.",
  skills: [
    { group: "Languages", items: "Go, TypeScript, JavaScript, SQL" },
    { group: "Backend", items: "Node.js, NestJS, Fastify, REST, GraphQL, gRPC, Prisma" },
    { group: "Distributed", items: "Microservices, event-driven architecture, Kafka, webhooks, outbox, DLQ" },
    { group: "Data", items: "PostgreSQL, MySQL/TiDB, Redis, ScyllaDB" },
    { group: "Infrastructure", items: "Docker, Kubernetes, Helm, Argo CD, AWS (EC2, S3, IAM)" },
    { group: "CI/CD", items: "GitLab CI/CD, GitHub Actions, Jenkins" },
    { group: "Observability", items: "Prometheus, Grafana, Loki, Promtail, Jaeger" },
    { group: "AI-assisted", items: "RAG, MCP, agentic workflows, Claude Code, Agent Skills" },
  ],
  experience: [
    {
      company: "PiScale",
      role: "Backend Engineer (Collaborator)",
      period: "Oct 2026 – Present",
      summary:
        "Communi: an omnichannel customer-engagement platform of ~36 microservices that brings messaging and commerce channels into one workspace for CS agents, chatbots and AI workflows (SaaS and on-premise).",
      projects: [
        {
          name: "Zalo Personal Connector",
          status: "Released",
          bullets: [
            "Built and released a new ~12,500-line NestJS/Prisma/MySQL service end to end, covered by 59 tests: QR account linking over SSE, 1:1 and group messaging.",
            "Made delivery reliable with outbox-based webhooks, MySQL leader locking and graceful shutdown; added SSRF protection; shipped CI and Kubernetes deployment.",
            "Wrote the matching ~3,700-line Go plugin in omni-bridge: webhook verification, synchronous delivery, temporary/permanent error classification and QR-linking APIs.",
          ],
        },
        {
          name: "Integration & E2E test platform",
          bullets: [
            "Built ~9,400 lines of black-box tests across 10 messaging platforms, using containerized environments and fake platform servers.",
            "Added parallel execution, YAML-driven scenarios and GitLab CI with JUnit and coverage reports.",
          ],
        },
        {
          name: "Telegram group conversations",
          bullets: [
            "Brought Telegram groups into Communi Desk across 2 services: groups map to CS threads, sender identity shows both ways, and only agent replies go out.",
            "Handled group migration and media without thumbnails, and removed bot tokens leaking into logs.",
          ],
        },
        {
          name: "Ticket Service & omni-bridge v2",
          status: "Design / in development",
          bullets: [
            "Designed a standalone Ticket Service: ~30 REST endpoints, 7 tables, a 5-state lifecycle, priority-based SLA, optimistic locking, 6-role RBAC, expiring attachment URLs, Kafka notifications.",
            "Building the omni-bridge v2 foundation (~6,900 lines of Go): hexagonal architecture, W3C trace propagation, structured logging, DLQ and versioned migrations.",
          ],
        },
      ],
    },
    {
      company: "SETA International",
      role: "Software Engineer",
      period: "Sep 2025 – Oct 2026",
      projects: [
        {
          name: "Veritone aiWARE",
          context: "Distributed AI processing, workflow automation and core platform services on cloud and Kubernetes edge clusters",
          bullets: [
            "Designed immutable, commit-based Docker image versioning across 7+ repos and 3 release channels, spanning CI/CD, Helm, GitOps, the Go control plane and GraphQL.",
            "Remediated 22 Critical and 55 High container CVEs plus 8 dependency vulnerabilities, and defined a standard non-root container pattern.",
            "Root-caused a high-priority outage after a schema migration: 169 corrupted records (151 root folders) out of 363,515, found via SQL analysis; drove the preventive migration design.",
            "Migrated the public GraphQL API from Apollo/Express to GraphQL Yoga + Envelop on Fastify and GraphQL v16 with no test regressions.",
            "Upgraded the Node-RED workflow runtime from v3 to v4.1.8+, validating plugin, expression and parsing compatibility.",
            "Added a typed sorting API (5 fields), batch retrieval by ID list, and role-to-application authorization checks; exposed build metadata via Prometheus.",
          ],
          stack: "Go, Node.js, GraphQL, PostgreSQL, Kubernetes, Helm, Argo CD, Jenkins, Prometheus",
        },
        {
          name: "Edu Vengy",
          context: "AI-powered e-learning platform, founding engineer",
          bullets: [
            "Provisioned the initial infrastructure and a GitHub Actions pipeline (lint, tests, Docker, auto-deploy to Dev).",
            "Designed PostgreSQL backup and DR (full backups, WAL archiving, alerting) targeting RPO < 1 h and RTO < 30 min; migrated storage from MinIO to AWS S3.",
            "Built permission-gated audit logs and reusable learning-material embedding with server-side validation.",
          ],
          stack: "TypeScript, React, Node.js, PostgreSQL, AWS S3, Docker",
        },
        {
          name: "EMS",
          context: "Enterprise HR platform, built end to end",
          bullets: [
            "Designed IAM with project-based RBAC, JWT backed by database sessions, and Microsoft OAuth/SSO.",
            "Delivered employee lifecycle and Draft Profile approval workflows, webhook APIs, MinIO storage, Microsoft Teams integration and AI resume processing.",
          ],
        },
      ],
    },
    {
      company: "Tiên Phong Telecom Ecommerce",
      role: "Tech Lead / Backend Engineer (Freelance)",
      period: "Mar 2025 – Aug 2025",
      projects: [
        {
          name: "E-commerce platform",
          bullets: [
            "Defined the backend structure, REST API contracts and database schema, coordinating with the frontend developer.",
            "Built cart, checkout, transaction handling and order filtering with NestJS and TypeORM; synced products from Strapi to PostgreSQL via webhooks.",
            "Implemented JWT, RBAC, user profiles and multi-address APIs; containerized the stack with Docker and set up GitHub Actions CI.",
          ],
          stack: "NestJS, TypeScript, PostgreSQL, TypeORM, Strapi, Docker",
        },
      ],
    },
    {
      company: "National Cyber Security Center of Vietnam",
      role: "Fullstack Developer Intern",
      period: "Sep 2024 – Jun 2025",
      summary: "Fullstack developer in a 5-person intern team that took on and delivered small web projects, focused mainly on backend and DevOps.",
      projects: [
        {
          name: "Affiliate e-commerce site",
          bullets: [
            "Built the backend APIs for a simple online store run by an affiliate partner, using NestJS with a Next.js frontend.",
          ],
        },
        {
          name: "Online news site rebuild",
          bullets: [
            "Rebuilt an existing news website end to end with the team (new frontend and backend); I built the backend and wrote a Go CLI that migrated content from the old system to the new one.",
            "Deployed both sites to the internet with Docker and an Nginx reverse proxy.",
          ],
          stack: "NestJS, Next.js, Docker, Nginx, Go",
        },
      ],
    },
  ] satisfies CvRole[],
  education: [
    {
      school: "VNU University of Engineering and Technology",
      detail: "B.Sc. Computer Science, VNU Hanoi",
      period: "Oct 2022 – Dec 2026 (thesis defense)",
    },
  ],
  certifications: [
    { name: "Aptis ESOL, British Council", detail: "B2 overall (CEFR)", period: "2023" },
  ],
};
