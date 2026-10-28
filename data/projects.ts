export type PersonalProject = {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string;
  url?: string;
};

export const personalProjects: PersonalProject[] = [
  {
    name: "PostPilot",
    category: "Personal project · Deployed, evolving",
    description: "A social publishing workspace with a Go backend and Next.js studio, currently focused on Facebook Pages.",
    highlights: [
      "Separate publishing rules from platform integrations using DDD and hexagonal architecture.",
      "Combine PostgreSQL persistence, Redis-backed workers, media storage, and AI-assisted content generation.",
      "Deployed and confirmed Facebook posting; continuing to improve token validation, publishing reliability, and the Meta app release workflow.",
    ],
    technologies: "Go · Next.js · PostgreSQL · Redis · Docker · Meta Graph API",
    url: "https://github.com/TruongHoang2004/PostPilot",
  },
  {
    name: "ViralForge",
    category: "Personal project · Local-first development",
    description: "An AI video workspace that turns a brief or uploaded media into analysis, scripts, narration, captioned video, and exportable artifacts.",
    highlights: [
      "Connect a Go API, Python workers, and a React dashboard through persisted jobs and asynchronous messaging.",
      "Explore transactional outbox, duplicate-safe claims, leases, cancellation, and trace propagation across job boundaries.",
      "Integrate LiteLLM, typed output validation, YAML configuration, and FFmpeg; live provider acceptance remains a separate validation step.",
    ],
    technologies: "Go · Python · React · PostgreSQL · RabbitMQ · gRPC · LiteLLM · FFmpeg",
    url: "https://github.com/TruongHoang2004/ViralForge",
  },
  {
    name: "Hexta",
    category: "Personal project · In development",
    description: "A multi-tenant commerce platform used to explore Go services, shared infrastructure, and multiple Next.js applications.",
    highlights: [
      "Organize storefront, administration, documentation, and landing applications in a shared monorepo.",
      "Work with Go/Gin, GORM, PostgreSQL, tenant management, and containerized local development.",
      "Explore event-driven infrastructure and search as part of the platform architecture.",
    ],
    technologies: "Go · Gin · GORM · Next.js · PostgreSQL · Redis · Kafka · Docker",
    url: "https://github.com/TruongHoang2004/Hexta",
  },
  {
    name: "Omni Bridge",
    category: "Recent engineering contribution",
    description: "Integration testing and reliability work for a Go service connecting messaging platforms with internal chat services.",
    highlights: [
      "Work on inbound webhooks, outbound workers, connection lifecycle, cache consistency, and message-ordering test scenarios.",
      "Investigate platform identity mismatches and request-buffer ownership across asynchronous processing boundaries.",
      "Develop a test-harness approach using MySQL, Redis, Kafka, HTTP platform doubles, and gRPC service doubles.",
    ],
    technologies: "Go · Fiber · GORM · MySQL · Redis · Kafka · gRPC · Integration Testing",
  },
];
