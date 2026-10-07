export const profile = {
  name: "Hayden Griffin",
  role: "CTO at PayMidas",
  intro:
    "Software engineer building payments infrastructure, escrow and regulated fintech in Europe. Before that, eight years shipping full-stack products for SaaS, fintech and IoT companies. At home, I build the software that runs the house.",
  location: "Bournemouth, UK",
  email: "haydenjamesgriffin@gmail.com",
  github: "https://github.com/HaydenGriffin",
  linkedin: "https://www.linkedin.com/in/hayden-griffin-65b66612b",
  revised: "October 2026",
  /** Shown on the cover, the way an OS sheet lists the places it covers. */
  places: ["PayMidas", "Smart Escrow", "Jumptech", "The House"],
} as const;

export const tools = [
  { group: "Languages", items: ["TypeScript", "Python", "Go", "Swift", "Java", "SQL"] },
  { group: "Web", items: ["React", "TanStack Start", "Astro", "Tailwind", "Radix"] },
  { group: "Services", items: ["Hono", "Node", "Cloudflare Workers", "AWS Lambda & ECS"] },
  { group: "Data", items: ["Postgres", "Drizzle", "Kysely", "DynamoDB", "SQL Server"] },
  { group: "Mobile", items: ["Expo", "React Native", "SwiftUI"] },
  { group: "AI", items: ["Claude API", "MCP", "LangGraph", "SageMaker", "agentic workflows"] },
  { group: "Practice", items: ["Turborepo", "Vitest", "Playwright", "GitHub Actions"] },
] as const;
