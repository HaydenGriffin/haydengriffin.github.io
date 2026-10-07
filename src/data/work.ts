import paymidasSite from "../assets/work/paymidas-site.png";
import smartEscrow from "../assets/work/smart-escrow.png";
import unipocketSite from "../assets/work/unipocket-site.png";
import type { Project } from "./types";

export const work: Project[] = [
  {
    name: "Smart Escrow",
    summary: "Escrow for law firms handling property and other high-value deals.",
    details:
      "Covers onboarding and KYC for each party, e-signing, and holding funds until the release conditions are met. I designed it and wrote most of it.",
    stack: ["TanStack Start", "Hono", "Cloudflare Workers", "Postgres", "Drizzle"],
    links: [{ label: "smart-escrow.eu", href: "https://smart-escrow.eu" }],
    media: [{ src: smartEscrow, alt: "A Smart Escrow apartment purchase with three phases, funds held and the release conditions for completion", shape: "wide" }],
  },
  {
    name: "UniPocket",
    summary: "A store for mobile top-ups, e-money vouchers and gaming cards in Cyprus.",
    details:
      "Customers pay by card and keep what they buy in their Pocket until they need it. Behind it is an admin portal for products, orders, support and reconciliation. I built it on the white-label platform below.",
    stack: ["TanStack Start", "Hono", "SQL Server", "Kysely", "Better Auth"],
    links: [{ label: "unipocket.store", href: "https://unipocket.store" }],
    media: [{ src: unipocketSite, alt: "The UniPocket homepage", shape: "wide" }],
  },
  {
    name: "Payments API",
    summary: "Lets partners use a licensed banking provider without integrating with it directly.",
    details: "Mutual TLS to the bank, KYC onboarding, idempotent requests and webhook forwarding.",
    stack: ["Node", "Hono", "Kysely", "Postgres"],
  },
  {
    name: "White-label platform",
    summary: "A starting point for new financial products, rebranded from one config file.",
    details:
      "Web apps for businesses and admins, an Expo mobile app and a typed API. So far it has been used for UniPocket, an event ticketing platform and a loyalty wallet.",
    stack: ["TanStack", "Hono", "Drizzle", "Expo"],
  },
  {
    name: "Group websites",
    summary: "Marketing sites for the PayMidas group, from one monorepo with a shared CMS.",
    stack: ["Astro", "Sanity", "Cloudflare"],
    links: [
      { label: "paymidas.eu", href: "https://paymidas.eu" },
      { label: "ivorylion.eu", href: "https://ivorylion.eu" },
    ],
    media: [{ src: paymidasSite, alt: "The PayMidas homepage", shape: "wide" }],
  },
  {
    name: "Legacy rebuilds",
    summary: "Updating partners' older payment apps without replacing their backends.",
    details:
      "An e-money portal restyled and made accessible in place, and a Cordova app rebuilt in Expo against the same gateway.",
  },
];
