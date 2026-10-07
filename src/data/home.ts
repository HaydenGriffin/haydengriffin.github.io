import foodToday from "../assets/work/food-today.png";
import foodWeek from "../assets/work/food-week.png";
import type { Project } from "./types";

export const home: Project[] = [
  {
    name: "Home Assistant integrations",
    summary: "Python integrations for a food diary, an electric shower over Bluetooth, and room-based heating.",
  },
  {
    name: "Local voice control",
    summary: "Speech recognition and text-to-speech on my own server, with wall tablets as the microphones.",
  },
  {
    name: "Ask the house",
    summary: "An LLM agent that can read and control the house. Every action it proposes is checked before it runs.",
  },
  {
    name: "Food",
    summary: "A SwiftUI iPhone app for the food diary, with widgets and HealthKit.",
    media: [
      { src: foodToday, alt: "The Food app's Today screen with calories and macros left", shape: "phone" },
      { src: foodWeek, alt: "The Food app's weekly review", shape: "phone" },
    ],
  },
  {
    name: "TV app",
    summary: "A webOS app for a rooted LG TV that controls the house.",
  },
];
