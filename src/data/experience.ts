import type { Role } from "./types";

export const experience: Role[] = [
  {
    years: "2026 – now",
    title: "CTO",
    organisation: "PayMidas",
    href: "https://paymidas.eu",
  },
  {
    years: "2021 – 2026",
    title: "Senior Software Engineer",
    organisation: "Jumptech",
    href: "https://jumptech.eco",
    note: "Software Engineer until 2024",
    highlights: [
      "Built an AI image-analysis pipeline: a YOLO classifier on SageMaker and LangGraph agents on ECS.",
      "Built an MCP server for the Jumptech API and got the team using Claude Code.",
      "Owned the grid-connection integration for EV chargers, solar, batteries and heat pumps.",
      "Cut new-customer setup from hours to minutes with a workflow-cloning pipeline.",
      "Built document packs with automatically generated electrical certificates.",
      "Led a zero-downtime DynamoDB migration and mentored a junior engineer.",
    ],
  },
  {
    years: "2020 – 2021",
    title: "Full Stack Engineer",
    organisation: "IRMACOS",
    note: "Self-employed",
    highlights: [
      "IoT platform: Java services configuring ESP32 devices over MQTT, Kafka between services, and a Node and Postgres API with a React admin app.",
    ],
  },
  {
    years: "2019 – 2020",
    title: "Graduate Software Engineer",
    organisation: "Ratio",
    href: "https://ratio.co.uk",
    highlights: ["An access-control service in Go on Lambda and DynamoDB, plus Node and Go APIs for internal reporting."],
  },
  {
    years: "2017 – 2018",
    title: "Trainee Applications Developer",
    organisation: "Fivium",
    href: "https://www.fivium.co.uk",
    note: "Placement year",
  },
  {
    years: "2015 – 2019",
    title: "BSc Computer Science, First Class",
    organisation: "University of Surrey",
  },
];

export const certifications = [
  "AI Engineering, Turing College (6 months)",
  "Oracle Certified Associate (SQL)",
  "Cisco Certified Network Associate (CCNA)",
];

export const skills = [
  { group: "Languages", items: "TypeScript, Python, Go, Swift, Java, SQL" },
  { group: "Frontend", items: "React, TanStack Start, Astro, Tailwind, Expo / React Native, SwiftUI" },
  { group: "Backend", items: "Node, Hono, Cloudflare Workers, AWS (Lambda, ECS, SageMaker, DynamoDB)" },
  { group: "Data", items: "Postgres, Drizzle, Kysely, DynamoDB, SQL Server" },
  { group: "AI", items: "Claude API, MCP, LangGraph, agentic development" },
];
