export type LearningBranch = {
  id: string;
  title: string;
  stage: string;
  context: string;
  topics: { title: string; detail: string }[];
  nextStep: string;
};

export const learningUpdatedAt = "27 October 2026";

// Topic details describe learning directions, not claims of mastery.
export const learningBranches: LearningBranch[] = [
  {
    id: "go",
    title: "Go internals & concurrency",
    stage: "Deepening through practice",
    context: "Messaging workers and Go backend development",
    topics: [
      { title: "Ownership & lifetimes", detail: "Understand when HTTP request buffers are reused and when background workers need independent copies." },
      { title: "Worker coordination", detail: "Reason about goroutines, channels, cancellation, shared state, and race detection." },
      { title: "Persistence tooling", detail: "Understand GORM model mappings, generated repositories, and the boundary between generated queries and business logic." },
      { title: "Allocation & reuse", detail: "Study sync.Pool and the trade-offs of reusing objects in concurrent services." },
    ],
    nextStep: "Use small reproducible examples and the race detector to explain ownership and synchronization decisions.",
  },
  {
    id: "architecture",
    title: "DDD & hexagonal architecture",
    stage: "Learning foundations",
    context: "Structured DDD study and PostPilot",
    topics: [
      { title: "Domain language", detail: "Identify business concepts and use a shared vocabulary before choosing packages or frameworks." },
      { title: "Boundaries & invariants", detail: "Study bounded contexts, entities, value objects, and aggregates through publishing workflows." },
      { title: "Ports & adapters", detail: "Keep publishing rules independent of Facebook APIs, storage implementations, and transport details." },
      { title: "Application use cases", detail: "Separate orchestration from domain rules and map dependencies between layers." },
    ],
    nextStep: "Model one publishing use case end to end and explain which rules belong inside its aggregate.",
  },
  {
    id: "testing",
    title: "Integration & automated testing",
    stage: "Applying in engineering work",
    context: "Omni Bridge integration-test work",
    topics: [
      { title: "Test boundaries", detail: "Distinguish unit, integration, and E2E coverage; decide which dependencies must be real." },
      { title: "Test harness", detail: "Exercise API and workers with MySQL, Redis, and Kafka while controlling external HTTP and gRPC responses." },
      { title: "Messaging scenarios", detail: "Check inbound/outbound payloads, identity mapping, cache invalidation, connection deletion, and per-thread ordering." },
      { title: "Repeatability", detail: "Design isolated fixtures, setup/cleanup, failure cases, and CI execution without leftover state." },
    ],
    nextStep: "Keep a concise scenario matrix linking each test to its inputs, expected requests, and persisted state.",
  },
  {
    id: "messaging",
    title: "Reliable asynchronous systems",
    stage: "Exploring in personal projects",
    context: "ViralForge jobs, PostPilot scheduling, and messaging services",
    topics: [
      { title: "Queues & delivery", detail: "Compare Redis queue operations, Kafka event processing, and RabbitMQ job delivery in their actual use cases." },
      { title: "Durable jobs", detail: "Explore transactional outbox, duplicate-safe processing, retries, leases, and recovery after worker restarts." },
      { title: "Ordering & consistency", detail: "Reason about per-thread ordering, cache/database consistency, and the risk of duplicate side effects." },
      { title: "Tracing", detail: "Follow a request or job across HTTP, gRPC, queues, workers, logs, and output artifacts." },
    ],
    nextStep: "Simulate a worker crash around an external side effect and document the recovery behavior.",
  },
  {
    id: "ai",
    title: "AI & media workflows",
    stage: "Building and validating",
    context: "ViralForge and AI-assisted content tools",
    topics: [
      { title: "Multi-provider integration", detail: "Use a thin LiteLLM integration with readable YAML configuration and per-call provider credentials." },
      { title: "Structured output", detail: "Validate analysis and scripts with typed schemas and handle malformed or failed responses." },
      { title: "Media pipeline", detail: "Connect analysis, script generation, speech, captions, and FFmpeg rendering through tracked jobs." },
      { title: "Local execution", detail: "Balance worker concurrency, render cost, storage, and resumability on a personal machine." },
    ],
    nextStep: "Validate a representative end-to-end job and record output quality, latency, and provider cost.",
  },
  {
    id: "platform",
    title: "Platform APIs & operations",
    stage: "Learning through deployment",
    context: "PostPilot, Hexta, and existing infrastructure experience",
    topics: [
      { title: "Meta integration", detail: "Understand Page identity, token ownership, permissions, app modes, and the release workflow." },
      { title: "Webhook contracts", detail: "Study signatures, platform-specific identifiers, message mapping, and adapter boundaries." },
      { title: "Deployment workflows", detail: "Compare GitOps approaches, including Docker Swarm exploration, with existing Docker and Kubernetes experience." },
      { title: "Operational feedback", detail: "Connect logs, health checks, metrics, backup/restore procedures, and incident diagnosis." },
    ],
    nextStep: "Turn deployment and platform-connection checks into short, repeatable runbooks.",
  },
];
