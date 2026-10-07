import type { Project } from "./types";

export const home: Project[] = [
  {
    name: "House for webOS",
    repo: "house-webos",
    summary: "A Home Assistant panel for my LG TV, made for the remote, with a weekly recap of the house.",
    clip: { name: "tv", alt: "Using House for webOS with a remote: switching lights, starting movie time, then the weekly recap", shape: "wide" },
    demo: "https://haydengriffin.github.io/house-webos/app/index.html?demo",
  },
  {
    name: "Food Diary",
    repo: "ha-food-diary",
    summary: "A calorie and macro diary that runs in Home Assistant, with a native SwiftUI iPhone app and Apple Health sync.",
  },
  {
    name: "Mira Mode",
    repo: "ha-mira-mode",
    summary: "A Home Assistant integration that controls a Mira Mode digital shower over Bluetooth LE.",
  },
  {
    name: "Local voice control",
    summary: "Speech recognition and text-to-speech on my own server, with wall tablets as the microphones.",
  },
  {
    name: "Ask the house",
    summary: "An LLM agent that can read and control the house. Every action it proposes is checked before it runs.",
  },
];
