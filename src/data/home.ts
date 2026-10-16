import afterglowHero from "../assets/home/afterglow.webp";
import foodDiaryHero from "../assets/home/food-diary.webp";
import houseWebosHero from "../assets/home/house-webos.webp";
import lamplightHero from "../assets/home/lamplight.webp";
import miraModeHero from "../assets/home/mira-mode.webp";
import prismHero from "../assets/home/prism.webp";
import type { Project, ProjectGroup } from "./types";

const projects: Project[] = [
  {
    name: "PRISM",
    repo: "prism",
    group: "tv",
    summary:
      "One remote for an Android TV box and an LG TV: while an LG app is on screen, the Shield's remote drives the TV, with a launcher for LG apps and quick TV settings, through Home Assistant.",
    hero: { src: prismHero, alt: "PRISM on the Shield: continue on the LG, favourite LG apps and quick TV settings" },
  },
  {
    name: "Afterglow",
    repo: "afterglow",
    group: "tv",
    summary:
      "A Music Assistant player for LG TVs: the artwork, word-by-word lyrics and the queue from the remote, with MilkDrop visuals drawn in time with the speakers. A PS5 version is on the way.",
    hero: { src: afterglowHero, alt: "Afterglow on a TV: album artwork, the current lyric line and MilkDrop visuals behind it" },
    demo: "https://haydengriffin.github.io/afterglow/",
  },
  {
    name: "House for webOS",
    repo: "house-webos",
    group: "tv",
    summary: "A Home Assistant panel for my LG TV, made for the remote, with a weekly recap of the house: steps, dinners, energy and who used the most hot water.",
    hero: { src: houseWebosHero, alt: "The House panel on a TV: light tiles, TV inputs, the home speakers and who is in which room" },
    clip: { name: "tv", alt: "Using House for webOS with a remote: switching lights, starting movie time, then the weekly recap", shape: "wide" },
    demo: "https://haydengriffin.github.io/house-webos/app/index.html?demo",
  },
  {
    name: "Lamplight",
    repo: "lamplight",
    group: "home",
    summary: "A design system for Home Assistant wall tablets, and six cards built on it, from weather to timers. Its core is a small ES module other cards can build on.",
    hero: { src: lamplightHero, alt: "Lamplight's agenda, timers and weather cards on wall tablets" },
    clip: { name: "lamplight", alt: "Tapping through the Lamplight timers and help cards on a demo home", shape: "wide", position: "0% 50%" },
  },
  {
    name: "Food Diary",
    repo: "ha-food-diary",
    group: "home",
    summary: "A calorie and macro diary that runs in Home Assistant, with a native SwiftUI iPhone app, Apple Health sync, and planned meals that go straight into the diary.",
    hero: { src: foodDiaryHero, alt: "Three iPhone screens from Food Diary: checking a meal, today's calories and macros, and a week on target" },
    clip: { name: "food", alt: "Logging two eggs on toast to dinner in the Food iPhone app, then seeing it on the Today screen", shape: "phone" },
  },
  {
    name: "Mira Mode",
    repo: "ha-mira-mode",
    group: "home",
    summary: "A Home Assistant integration that controls a Mira Mode digital shower over Bluetooth LE, and counts the water and energy each shower uses.",
    hero: { src: miraModeHero, alt: "The Mira Shower device page in Home Assistant, with shower, temperature and flow controls" },
  },
];

export const home = projects.filter((project) => project.published !== false);

const groupTitles: Record<ProjectGroup, string> = {
  tv: "For the TV",
  home: "For the home",
};

/** The home builds in their groups, in the order they are listed above. */
export const homeGroups = (Object.keys(groupTitles) as ProjectGroup[]).map((group) => ({
  id: group,
  title: groupTitles[group],
  projects: home.filter((project) => project.group === group),
}));

/** Things that run at home but are not open source, named in one line under the builds. */
export const alsoRunning = [
  { name: "local voice control", note: "speech recognition and text-to-speech on my own server, with wall tablets as the microphones" },
  { name: "an LLM agent that can read and control the house", note: "every action it proposes is checked before it runs" },
];
