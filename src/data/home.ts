import type { Feature } from "./types";

/** Home builds. They sit in the woodland in the south-west of the sheet. */
export const home: Feature[] = [
  {
    id: "integrations",
    name: "Custom integrations",
    class: "area",
    position: { x: 3.2, y: 8.6 },
    summary: "My own Home Assistant integrations, in Python, with tests.",
    details: [
      "A food diary with barcode, label and photo estimates, exposed as services, sensors, voice intents and a webhook.",
      "A Bluetooth LE controller that starts and stops an electric shower remotely.",
      "Heating that targets the temperature measured in each room, not the radiator valve's own reading.",
    ],
    years: "2026",
    stack: ["Python", "Home Assistant", "pytest", "Bluetooth LE"],
  },
  {
    id: "voice",
    name: "Local voice",
    class: "area",
    position: { x: 5.4, y: 10.6 },
    summary: "Voice control that never leaves the house.",
    details: [
      "Speech-to-text and text-to-speech run on the homelab, and four wall-mounted tablets handle the wake word on the device. There is no cloud subscription.",
    ],
    years: "2026",
    stack: ["Parakeet", "Piper", "Home Assistant", "Android"],
  },
  {
    id: "ask-the-house",
    name: "Ask the house",
    class: "area",
    position: { x: 6.6, y: 8.4 },
    summary: "An LLM agent that answers in structured JSON, which the house checks before acting.",
    details: [
      "The agent returns a reply, UI blocks and proposed actions. Home Assistant validates every action against what is allowed before anything runs.",
      "The same agent imports recipes from shared social and web links, reading video and carousel posts with yt-dlp and Gemini vision.",
    ],
    years: "2026",
    stack: ["Claude", "Gemini", "MCP", "Home Assistant"],
  },
  {
    id: "food-app",
    name: "Food for iPhone",
    class: "settlement",
    position: { x: 2.4, y: 11.0 },
    summary: "A native SwiftUI app for the food diary.",
    details: [
      "It has widgets, Control Center controls, a share extension, HealthKit, and an offline queue that syncs when the phone is back home. UI tests run against a mock server.",
    ],
    years: "2026",
    stack: ["Swift", "SwiftUI", "WidgetKit", "XCUITest"],
  },
  {
    id: "tv-app",
    name: "House for webOS",
    class: "settlement",
    position: { x: 7.9, y: 10.9 },
    summary: "A TV app for a rooted LG C1 that runs the house from the sofa.",
    details: [
      "It talks to Home Assistant over its websocket API, with controls for every room and a weekly recap of the house.",
    ],
    years: "2026",
    stack: ["webOS", "JavaScript", "WebSocket"],
  },
  {
    id: "homelab",
    name: "Homelab",
    class: "area",
    position: { x: 1.6, y: 7.0 },
    summary: "Proxmox, ZFS and containers, with monitoring on all of it.",
    details: [
      "Virtual machines and LXC containers on Proxmox, tuned ZFS storage, DNS filtering, a reverse proxy and Tailscale. Health checks report connection speed, memory, storage and backups back to the house.",
    ],
    years: "Ongoing",
    stack: ["Proxmox", "ZFS", "LXC", "Tailscale"],
  },
];
