import type { Feature } from "./types";

/** PayMidas work. Everything here sits on the coast of the sheet. */
export const work: Feature[] = [
  {
    id: "smart-escrow",
    name: "Smart Escrow",
    class: "settlement",
    position: { x: 12.4, y: 7.6 },
    summary: "Configurable escrow for law firms, from party intake to release of funds.",
    details: [
      "A regulated escrow workflow for real estate, vessel purchases and other high-value deals. It covers parties and phases, identity checks, e-signing, fiat and crypto funds, and release conditions.",
      "I designed the architecture and wrote most of it: about 3,000 commits across the app, the API, the documentation handbook and the end-to-end test suite.",
    ],
    years: "Current",
    role: "Architect and lead engineer",
    stack: ["TanStack Start", "Hono", "Cloudflare Workers", "Neon Postgres", "Drizzle", "Better Auth", "Sumsub", "Playwright"],
    links: [
      { label: "smart-escrow.eu", href: "https://smart-escrow.eu" },
      { label: "Docs", href: "https://docs.smart-escrow.eu" },
    ],
  },
  {
    id: "payments-bridge",
    name: "Payments bridge",
    class: "water",
    position: { x: 10.55, y: 9.2 },
    summary: "A partner-facing payments API over a licensed banking provider.",
    details: [
      "It handles mutual-TLS calls to the bank, KYC onboarding, idempotent requests and webhook forwarding, so partners integrate once and never touch the bank's API.",
    ],
    years: "2026",
    role: "Sole engineer",
    stack: ["Node", "Hono", "Zod", "Kysely", "Postgres", "Vitest"],
  },
  {
    id: "base-platform",
    name: "Base platform",
    class: "settlement",
    position: { x: 16.2, y: 6.9 },
    summary: "A white-label foundation that new financial products are started from.",
    details: [
      "It includes business and admin web apps, an Expo mobile app and a typed API. Regulated steps are delegated to licensed partners, and a whole product can be rebranded from one file.",
      "Products started from it so far: a digital-goods storefront with reconciliation and support tooling, an event platform with offline QR checks at the gate, and a wallet and loyalty app.",
    ],
    years: "2026",
    role: "Architect and engineer",
    stack: ["TanStack", "Hono", "Drizzle", "Expo", "EAS", "Lingui"],
  },
  {
    id: "group-sites",
    name: "Group websites",
    class: "settlement",
    position: { x: 18.3, y: 8.5 },
    summary: "One monorepo with a shared CMS behind the group's brand sites.",
    details: [
      "Marketing sites for PayMidas, Smart Escrow, Ivory Lion and partner brands, all edited in one Sanity studio and deployed to Cloudflare. Each release posts its notes to Slack, written from the diff by an LLM.",
    ],
    years: "2026",
    role: "Lead engineer",
    stack: ["Astro", "Sanity", "Tailwind", "Cloudflare", "Turborepo"],
    links: [
      { label: "paymidas.eu", href: "https://paymidas.eu" },
      { label: "ivorylion.eu", href: "https://ivorylion.eu" },
    ],
  },
  {
    id: "modernisation",
    name: "Legacy modernisation",
    class: "area",
    position: { x: 14.2, y: 5.2 },
    summary: "Bringing partners' older payment systems up to date without rewriting them.",
    details: [
      "An e-money portal and back office were modernised in place, with design tokens, light and dark themes, i18n and accessibility fixes, while the legacy stack underneath stayed as it was.",
      "A Cordova payments app was rebuilt in Expo and speaks the existing gateway protocol byte for byte, so the backend did not have to change.",
    ],
    years: "2026",
    role: "Engineer",
    stack: ["Vanilla JS", "Tailwind", "i18next", "Expo", "React Native"],
  },
];
