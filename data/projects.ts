export type PersonalProject = {
  name: string;
  category: string;
  description: string;
  highlights: string[];
  technologies: string;
  url?: string;
};

export const HEXTA_URL = "https://hexta.org/";

// Hexta is one platform; the projects below are its three applications.
export const hexta = {
  name: "Hexta",
  url: HEXTA_URL,
  status: "Platform · In development",
  tagline: "One platform to help small and medium businesses sell and market online.",
  description:
    "I'm building Hexta as a single platform made of three applications that share accounts, data and infrastructure: one inbox for customer messages and orders, Facebook Page publishing, and AI-made ad content.",
};

export const personalProjects: PersonalProject[] = [
  {
    name: "Hexta Desktop",
    category: "Customer messages & orders",
    description: "Brings customer messages from many channels (Facebook Page, Telegram bot, Zalo and more) into one inbox, alongside order management, so a small team can sell from a single place.",
    highlights: [
      "Aggregate conversations from Facebook Page, Telegram and Zalo into one multi-tenant inbox.",
      "Manage orders next to the conversations they come from.",
      "Go/Gin services with GORM and PostgreSQL in a shared monorepo, with event-driven infrastructure on Kafka.",
    ],
    technologies: "Go · Gin · GORM · Next.js · PostgreSQL · Redis · Kafka · Docker",
  },
  {
    name: "PostPilot",
    category: "Facebook Page publishing · Deployed",
    description: "Manages Facebook Pages and publishes posts automatically, with AI-assisted content generation.",
    highlights: [
      "Schedule and auto-publish posts to Facebook Pages through the Meta Graph API.",
      "Separate publishing rules from platform integrations using DDD and hexagonal architecture.",
      "PostgreSQL persistence, Redis-backed workers and media storage; deployed with confirmed Facebook posting.",
    ],
    technologies: "Go · Next.js · PostgreSQL · Redis · Docker · Meta Graph API",
  },
  {
    name: "ViralForge",
    category: "AI ad content",
    description: "Collects content that is going viral, then helps businesses turn it into their own ad content (video, images and copy) with AI.",
    highlights: [
      "Gather trending content as input for new ad ideas.",
      "Generate scripts, narration, captioned video, images and copy with LLMs (LiteLLM) and FFmpeg.",
      "Go API, Python workers and a React dashboard connected through persisted jobs and asynchronous messaging (RabbitMQ, gRPC).",
    ],
    technologies: "Go · Python · React · PostgreSQL · RabbitMQ · gRPC · LiteLLM · FFmpeg",
  },
];
