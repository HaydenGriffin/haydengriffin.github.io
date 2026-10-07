import type { RouteStop } from "./types";

/** The career route, walked from the hills (2015) down to the coast (now). */
export const route: RouteStop[] = [
  {
    id: "surrey",
    years: "2015 – 2019",
    title: "BSc Computer Science, First Class",
    organisation: "University of Surrey",
    where: "Guildford",
    class: "antiquity",
    position: { x: 2.3, y: 1.9 },
    highlights: [
      "Final-year project: a blockchain network on Hyperledger Fabric.",
      "Top modules: Advanced Algorithms, Parallel Computing, and Deep Learning & Advanced AI.",
    ],
  },
  {
    id: "fivium",
    years: "2017 – 2018",
    title: "Trainee Applications Developer",
    organisation: "Fivium",
    where: "London · placement year",
    class: "antiquity",
    position: { x: 5.0, y: 2.6 },
    highlights: [
      "Built and supported features on public-sector systems, and presented each sprint's work to clients.",
      "Helped train the next year's placement students.",
    ],
  },
  {
    id: "ratio",
    years: "2019 – 2020",
    title: "Graduate Software Engineer",
    organisation: "Ratio",
    where: "Bournemouth · fintech loan search",
    class: "antiquity",
    position: { x: 4.6, y: 5.2 },
    highlights: [
      "Built an access-control service in Go on AWS Lambda and DynamoDB.",
      "Wrote Node and Go APIs that fed the business-performance dashboards stakeholders used.",
    ],
  },
  {
    id: "irmacos",
    years: "2020 – 2021",
    title: "Full Stack Engineer",
    organisation: "IRMACOS",
    where: "Self-employed · IoT platform",
    class: "settlement",
    position: { x: 7.6, y: 4.0 },
    highlights: [
      "Designed microservices that configured ESP32 devices over MQTT and talked to each other through Kafka.",
      "Built a TDD Node and Postgres API with a backend-for-frontend layer, a React admin app, and CI/CD for every service.",
    ],
  },
  {
    id: "jumptech",
    years: "2021 – 2026",
    title: "Software Engineer, then Senior",
    organisation: "Jumptech",
    where: "Remote · SaaS for low-carbon installations",
    class: "settlement",
    position: { x: 9.6, y: 5.9 },
    highlights: [
      "Shipped an AI image-analysis platform end to end: a YOLO classifier on SageMaker, LangGraph agents on ECS, and Datadog alerting across the pipeline.",
      "Built an MCP server for the Jumptech API and led the team's move to Claude Code and agentic workflows.",
      "Owned the grid-connection (ENA/DNO) integration for EV chargers, solar, batteries and heat pumps.",
      "Built a workflow-cloning pipeline that took new-customer setup from hours to minutes.",
      "Built the document pack system with automated Electrical Installation Certificates, then led its rollout.",
      "Led the zero-downtime DynamoDB migration behind Projects V2, and mentored a junior engineer.",
    ],
  },
  {
    id: "paymidas",
    years: "2026 – now",
    title: "CTO",
    organisation: "PayMidas",
    where: "EU payments infrastructure",
    class: "settlement",
    position: { x: 14.6, y: 8.9 },
    highlights: [
      "Runs engineering for the group: architecture, security, compliance-driven design and most of the code.",
      "Shipped Smart Escrow, a payments bridge, a white-label product platform and the group's websites.",
    ],
  },
];

export const certifications = [
  "AI Engineering, Turing College (6 months): LLM apps, RAG, agents",
  "Oracle Certified Associate (SQL)",
  "Cisco Certified Network Associate (CCNA)",
];
