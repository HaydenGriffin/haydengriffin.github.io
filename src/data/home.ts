import afterglowLgHero from "../assets/afterglow/lg-hero.webp";
import afterglowPs5Hero from "../assets/afterglow/ps5-hero.webp";
import afterglowPs5Views from "../assets/afterglow/ps5-views.webp";
import afterglowHero from "../assets/home/afterglow.webp";
import foodDiaryHero from "../assets/home/food-diary.webp";
import houseWebosHero from "../assets/home/house-webos.webp";
import lamplightHero from "../assets/home/lamplight.webp";
import lamplightPs5Hero from "../assets/lamplight/ps5-hero.webp";
import lamplightPs5Views from "../assets/lamplight/ps5-views.webp";
import miraModeHero from "../assets/home/mira-mode.webp";
import noZeroWeeksHero from "../assets/home/no-zero-weeks.webp";
import prismHero from "../assets/home/prism.webp";
import prismPs5Hero from "../assets/prism/ps5-hero.webp";
import prismPs5Views from "../assets/prism/ps5-views.webp";
import type { Edition, Project, ProjectGroup } from "./types";

const projects: Project[] = [
  {
    name: "Afterglow",
    repo: "afterglow",
    group: "tv",
    summary:
      "A Music Assistant player for LG TVs and the PS5: the artwork, word-by-word lyrics and the queue from the remote or a DualSense, with MilkDrop visuals drawn in time with the music.",
    hero: { src: afterglowHero, alt: "The Afterglow logo over the app playing a song with its lyrics, beside the words LG webOS and PS5" },
    clip: { name: "afterglow", alt: "Afterglow on an LG TV: synced lyrics beside the album art, then the full-screen album view, then a full-screen MilkDrop music visualiser", shape: "wide" },
    editions: [
      {
        platform: "LG webOS",
        repo: "afterglow",
        demo: "https://haydengriffin.github.io/afterglow/",
        clip: { name: "afterglow", alt: "Afterglow on an LG TV: synced lyrics beside the album art, then the full-screen album view, then a full-screen MilkDrop music visualiser", shape: "wide" },
        hero: { src: afterglowLgHero, alt: "Afterglow on an LG C1: the artwork, the current lyric line and up next" },
      },
      {
        platform: "PS5",
        repo: "afterglow-ps5",
        media: [
          { src: afterglowPs5Hero, alt: "Afterglow on a PS5: the cover in a square, the current lyric line underlined as it is sung, and up next with its artists", shape: "wide" },
          { src: afterglowPs5Views, alt: "Afterglow's PS5 views: Album, one lyric line over the visuals, the large lyric over the visuals, and the Display settings", shape: "wide" },
        ],
      },
    ],
  },
  {
    name: "PRISM",
    repo: "prism",
    group: "tv",
    summary:
      "One remote for an LG TV, from an Android TV box or a PS5: while an LG app is on screen, the box's remote or a DualSense drives the TV, with a launcher for LG apps and quick TV settings, through Home Assistant.",
    hero: { src: prismHero, alt: "PRISM on the Shield, captured by the TV: LG Settings open over the PRISM launcher, driven by the Shield remote, beside quick TV settings and the LG apps row" },
    editions: [
      {
        platform: "Android TV",
        repo: "prism",
      },
      {
        platform: "PS5",
        repo: "prism-ps5",
        media: [
          { src: prismPs5Hero, alt: "PRISM on a PS5, captured by the TV: LG Settings open over PRISM's remote screen, driven by the DualSense", shape: "wide" },
          { src: prismPs5Views, alt: "PRISM on the TV: its launcher, and LG's Game Optimizer opened over it; then all LG apps and quick TV settings", shape: "wide" },
        ],
      },
    ],
  },
  {
    name: "House for webOS",
    platforms: ["LG webOS"],
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
    summary:
      "A design system for Home Assistant wall tablets, and six cards built on it, from weather to timers; and the same pages on a TV from a PS5, with Home Assistant's notifications shown over games.",
    hero: { src: lamplightHero, alt: "Lamplight's agenda, timers and weather cards on wall tablets" },
    clip: { name: "lamplight", alt: "Tapping through the Lamplight timers and help cards on a demo home", shape: "wide", position: "0% 50%" },
    editions: [
      {
        platform: "Home Assistant",
        repo: "lamplight",
        demo: "https://haydengriffin.github.io/lamplight/",
        clip: { name: "lamplight", alt: "Tapping through the Lamplight timers and help cards on a demo home", shape: "wide", position: "0% 50%" },
        hero: { src: lamplightHero, alt: "Lamplight's agenda, timers and weather cards on wall tablets" },
      },
      {
        platform: "PS5",
        repo: "lamplight-ps5",
        media: [
          { src: lamplightPs5Hero, alt: "Lamplight on a PS5: the clock, 14:05 large over a weather-tinted sky, with a chip for each page", shape: "wide" },
          { src: lamplightPs5Views, alt: "Lamplight's PS5 pages: the Living room with music and lights glowing, the Agenda, Timers with Undo, and a finished timer's alert", shape: "wide" },
        ],
      },
    ],
  },
  {
    name: "Food Diary",
    platforms: ["Home Assistant", "iPhone"],
    repo: "ha-food-diary",
    group: "home",
    summary: "A calorie and macro diary that runs in Home Assistant, with a native SwiftUI iPhone app, Apple Health sync, and planned meals that go straight into the diary.",
    hero: { src: foodDiaryHero, alt: "Three iPhone screens from Food Diary: checking a meal, today's calories and macros, and a week on target" },
    clip: { name: "food", alt: "Logging two eggs on toast to dinner in the Food iPhone app, then seeing it on the Today screen", shape: "phone" },
  },
  {
    name: "Mira Mode",
    platforms: ["Home Assistant"],
    repo: "ha-mira-mode",
    group: "home",
    summary: "A Home Assistant integration that controls a Mira Mode digital shower over Bluetooth LE, and counts the water and energy each shower uses.",
    hero: { src: miraModeHero, alt: "The Mira Shower device page in Home Assistant, with shower, temperature and flow controls" },
  },
  {
    name: "No Zero Weeks",
    platforms: ["Android", "Home Assistant"],
    page: "no-zero-weeks",
    group: "training",
    summary:
      "My training app, built around the week rather than the workout. Gym check-ins and watch workouts count on their own, the house plans each lift day, and the workout runs from the lock screen.",
    stack: ["Kotlin", "Jetpack Compose", "Health Connect", "Glance", "WorkManager"],
    hero: {
      src: noZeroWeeksHero,
      alt: "Three No Zero Weeks screens: the week drawn as a barbell, the day's workout from the house, and the exercise library",
    },
    clip: {
      name: "no-zero-weeks",
      alt: "No Zero Weeks on the phone: the week's barbell turned with a finger, the day's workout with its plates, a rack of past weeks, and an exercise's technique clip",
      shape: "phone",
    },
  },
];

export const home = projects.filter((project) => project.published !== false);

/** Every page a home build gets: one per edition for a project on more than one platform. */
export const homePages: { project: Project; edition?: Edition }[] = home.flatMap((project) =>
  project.editions ? project.editions.map((edition) => ({ project, edition })) : [{ project }],
);

const groupTitles: Record<ProjectGroup, string> = {
  tv: "For TVs and consoles",
  home: "For the home",
  training: "For training",
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
