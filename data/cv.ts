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
  title: "Backend Engineer · Go, Distributed Systems & DevOps",
  contact: {
    email: "xuantruong.tn.1712@gmail.com",
    phone: "0353 227 709",
    location: "Cau Giay, Ha Noi",
    github: "github.com/TruongHoang2004",
  },
  summary:
    "Backend engineer with 2+ years building Go, Node.js and Python services, messaging integrations and the infrastructure that runs them. I have shipped services solo, rebuilt CI/CD and GitOps for 20+ services on AWS, and spent much of my time on production work: data incidents, security remediation, migrations and observability. Currently building Hexta, a platform for small businesses.",
  skills: [
    { group: "Languages", items: "Go, TypeScript, JavaScript, Python, SQL" },
    { group: "Backend", items: "NestJS, FastAPI, Fiber, Fastify, REST, GraphQL, gRPC, Prisma, sqlc" },
    { group: "Distributed", items: "Microservices, event-driven architecture, Kafka, webhooks, outbox, DLQ" },
    { group: "Data", items: "PostgreSQL, MySQL/TiDB, Redis, ScyllaDB" },
    { group: "Infrastructure", items: "Docker, Kubernetes, Helm, Argo CD, AWS (EC2, S3, IAM)" },
    { group: "CI/CD & IaC", items: "Jenkins, GitHub Actions, GitLab CI, Terraform, AWS Lambda, Amazon ECR" },
    { group: "Observability", items: "Prometheus, Grafana, Loki, Promtail, Jaeger" },
    { group: "AI", items: "RAG, LiteLLM, MCP, agentic workflows, Claude Code" },
  ],
  experience: [
    {
      company: "PiScale",
      role: "Backend Developer (Collaborator)",
      period: "Oct 2026 – Present",
      projects: [
        {
          name: "Communi",
          context: "Omnichannel customer-engagement platform, ~36 microservices",
          bullets: [
            "Zalo personal accounts: built solo in ~1 week a new service that lets support agents chat through personal Zalo accounts, the only way to receive group messages. With no official API, I used the unofficial zca-js library in NestJS, the platform's only non-Go service.",
            "Telegram groups: brought group chats into the agents' inbox as one conversation per group, filtered bot messages out through new routing, and handled group ID upgrades and bot-token leaks in logs.",
            "Testing: added the first automated integration and E2E suite for the channel-messaging service (~9,400 lines, 10 platforms) using fake platform servers, running in parallel in CI.",
            "Ticket service: designed and built a new Go service (Fiber, sqlc, MySQL) with an explicit lifecycle state machine, SLAs that pause on hold and compute overdue in SQL instead of cron, optimistic locking, and a pure policy layer with external systems behind ports.",
          ],
          stack: "Go, Fiber, sqlc, NestJS, TypeScript, MySQL, Kafka, Redis, Kubernetes, GitLab CI",
        },
      ],
    },
    {
      company: "SETA International",
      role: "Software Engineer",
      period: "Sep 2025 – Oct 2026",
      projects: [
        {
          name: "Veritone aiWARE Processing",
          context: "Distributed AI processing on Kubernetes edge clusters · Apr – Oct 2026 · shadow engineer, 2 VN + 3 client engineers",
          bullets: [
            "Release engineering: immutable, commit-based image versioning across 7+ repos and 3 release channels (CI/CD, Helm, GitOps); build metadata in Prometheus so QA can verify deployed versions.",
            "Security: remediated 22 Critical and 55 High container CVEs plus 8 dependency vulnerabilities, standardized non-root containers, and scoped a critical SQL injection fix.",
            "Platform upgrades: Node-RED runtime v3 → v4.1.8+; fixed a frontend migration regression across 15 admin pages and Node.js CI failures.",
          ],
          stack: "Go, Node.js, GraphQL, PostgreSQL, Kubernetes, Helm, Argo CD, Jenkins, Prometheus",
        },
        {
          name: "Sunwest",
          context: "DevOps for a Veritone client · Jul – Sep 2026 · team of 2",
          bullets: [
            "Rebuilt delivery from scratch for ~20 services on AWS as the client moved from GitLab to GitHub: a Jenkins shared library (tests, security scans, Docker builds to Amazon ECR) and GitOps with Helm and Argo CD.",
            "Kept Jenkins reachable only from internal IPs while still accepting GitHub webhooks, through an AWS Lambda relay provisioned with Terraform.",
          ],
          stack: "Jenkins, Helm, Argo CD, Kubernetes, AWS Lambda, Amazon ECR, Terraform",
        },
        {
          name: "Edu Vengy",
          context: "AI e-learning platform for the client Vengy · May – Jul 2026 · team of 6, core backend and CI/CD",
          bullets: [
            "Wrote the infrastructure and cost proposal, provisioned AWS with Nginx, and built GitHub Actions CI/CD (auto-deploy to Dev, approval-gated Prod).",
            "Implemented daily PostgreSQL backups to S3 with WAL archiving for point-in-time recovery, verified by a real restore; migrated files from MinIO to S3.",
            "Built JWT auth with roles and cross-system login via the client's lab app API, an extensible quiz engine, audit logs, the Media module, and a Python RAG service for course Q&A.",
          ],
          stack: "NestJS, Prisma, PostgreSQL, Python, AWS (EC2, S3), Docker, GitHub Actions",
        },
        {
          name: "Veritone aiWARE Core",
          context: "Core GraphQL API (Node.js main API, Go services) · Jan – Mar 2026 · shadow engineer in a ~6-person VN team",
          bullets: [
            "Migrated the public GraphQL API from Apollo/Express to GraphQL Yoga + Envelop on Fastify (GraphQL v16) with zero regressions; shipped typed sorting, batch fetch and authorization checks.",
            "Diagnosed and fixed corrupted production data after schema migrations (169 of 363,515 records) and drove a safer migration design; cleared all Critical/High CVEs.",
          ],
          stack: "Go, Node.js, GraphQL Yoga, Fastify, PostgreSQL, Kubernetes, Trivy",
        },
        {
          name: "EMS",
          context: "SETA's internal HR platform for ~200 users · Sep – Dec 2025 · core backend in a ~5-person team",
          bullets: [
            "Built the platform from the ground up with FastAPI and PostgreSQL: project-based RBAC, JWT with database sessions, Microsoft SSO, and HR workflows.",
            "Built a Kafka-based CDC pipeline and lightweight Go services for notifications and scheduled contract jobs; took over DevOps (Kubernetes, CI/CD) after the DevOps engineer left.",
          ],
          stack: "Python, FastAPI, Go, PostgreSQL, Kafka, Kubernetes, React",
        },
      ],
    },
    {
      company: "Tiên Phong Telecom Ecommerce",
      role: "Tech Lead & Backend Engineer (Freelance)",
      period: "Mar 2025 – Aug 2025",
      summary: "3-person team; I led technical decisions, worked directly with the client, and shipped to production with real customers.",
      projects: [
        {
          name: "E-commerce platform",
          bullets: [
            "Defined the backend structure, REST contracts and database schema; built cart, checkout, transactions and order filtering with NestJS and TypeORM.",
            "Synced products from Strapi to PostgreSQL via webhooks; implemented JWT and RBAC; containerized with Docker and GitHub Actions CI.",
          ],
          stack: "NestJS, TypeScript, PostgreSQL, TypeORM, Strapi, Docker",
        },
      ],
    },
    {
      company: "National Cyber Security Center of Vietnam",
      role: "Fullstack Developer Intern",
      period: "Sep 2024 – Jun 2025",
      summary: "5-person intern team delivering small web projects; I focused on backend and DevOps.",
      projects: [
        {
          name: "Affiliate store & news site rebuild",
          bullets: [
            "Built NestJS backends for an affiliate online store and a rebuilt news site, and wrote a Go CLI that migrated the news content from the old system.",
            "Deployed both sites with Docker behind an Nginx reverse proxy.",
          ],
          stack: "NestJS, Next.js, Go, Docker, Nginx",
        },
      ],
    },
  ] satisfies CvRole[],
  hexta: {
    name: "Hexta",
    url: "hexta.org",
    tagline: "A platform I'm building to help small and medium businesses sell and market online.",
    apps: [
      { name: "Hexta Desktop", detail: "One inbox for messages from Facebook Page, Telegram and Zalo, with order management.", stack: "Go, Gin, PostgreSQL, Kafka, Next.js" },
      { name: "PostPilot", detail: "Facebook Page management with automatic publishing; deployed. DDD and hexagonal architecture.", stack: "Go, Next.js, PostgreSQL, Redis, Meta Graph API" },
      { name: "ViralForge", detail: "Turns viral content into AI-made ad video, images and copy through async job pipelines.", stack: "Go, Python, React, RabbitMQ, gRPC, LiteLLM, FFmpeg" },
    ],
  },
  education: [
    {
      school: "VNU University of Engineering and Technology",
      detail: "B.Sc. Computer Science",
      period: "Oct 2022 – Dec 2026 (thesis defense)",
    },
  ],
  certifications: [
    { name: "Aptis ESOL, British Council", detail: "B2 overall (CEFR)", period: "2023" },
  ],
};
