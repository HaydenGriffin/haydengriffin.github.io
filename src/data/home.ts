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
import ps5AutojbHero from "../assets/home/ps5-autojb.webp";
import ps5AutojbAutoload from "../assets/ps5-autojb/ps5-autoload.webp";
import ps5AutojbHaCard from "../assets/ps5-autojb/ha-card.webp";
import ps5AutojbHaDevice from "../assets/ps5-autojb/ha-device.webp";
import ps5AutojbMedia from "../assets/ps5-autojb/ps5-media.webp";
import ps5AutojbRestart from "../assets/ps5-autojb/ps5-restart.webp";
import ps5AutojbRecovery from "../assets/ps5-autojb/recovery-timeline.webp";
import type { Platform, Project } from "./types";

/** The home builds, in the order they are shown: the featured one first, then in pairs that share a row. */
const projects: Project[] = [
  {
    name: "Afterglow",
    repo: "afterglow",
    featured: true,
    summary: "A Music Assistant player with word-by-word lyrics, the queue, and MilkDrop visuals drawn in time with the music.",
    demo: "https://haydengriffin.github.io/afterglow/",
    hero: { src: afterglowHero, alt: "The Afterglow logo over the app playing a song with its lyrics, beside the words LG webOS and PS5" },
    clip: { name: "afterglow", alt: "Afterglow on an LG TV: synced lyrics beside the album art, then the full-screen album view, then a full-screen MilkDrop music visualiser", shape: "wide" },
    platforms: [
      { name: "LG webOS" },
      {
        name: "PS5",
        repo: "afterglow-ps5",
        media: [
          { src: afterglowPs5Hero, alt: "Afterglow on a PS5: the cover in a square, the current lyric line underlined as it is sung, and up next with its artists", shape: "wide" },
          { src: afterglowPs5Views, alt: "Afterglow's PS5 views: Album, one lyric line over the visuals, the large lyric over the visuals, and the Display settings", shape: "wide" },
        ],
      },
    ],
  },
  {
    name: "Lamplight",
    repo: "lamplight",
    summary: "A design system for Home Assistant wall tablets, six cards built on it, and the same pages on the TV from a PS5.",
    demo: "https://haydengriffin.github.io/lamplight/",
    hero: { src: lamplightHero, alt: "Lamplight's agenda, timers and weather cards on wall tablets" },
    clip: { name: "lamplight", alt: "Tapping through the Lamplight timers and help cards on a demo home", shape: "wide" },
    platforms: [
      { name: "Home Assistant" },
      {
        name: "PS5",
        repo: "lamplight-ps5",
        media: [
          { src: lamplightPs5Hero, alt: "Lamplight on a PS5: the clock, 14:05 large over a weather-tinted sky, with a chip for each page", shape: "wide" },
          { src: lamplightPs5Views, alt: "Lamplight's PS5 pages: the Living room with music and lights glowing, the Agenda, Timers with Undo, and a finished timer's alert", shape: "wide" },
        ],
      },
    ],
  },
  {
    name: "PRISM",
    repo: "prism",
    summary: "Lets an Android TV remote or a DualSense drive the LG TV while an LG app is on screen, through Home Assistant.",
    hero: { src: prismHero, alt: "PRISM on the Shield, captured by the TV: LG Settings open over the PRISM launcher, driven by the Shield remote, beside quick TV settings and the LG apps row" },
    platforms: [
      { name: "Android TV" },
      {
        name: "PS5",
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
    repo: "house-webos",
    summary: "A Home Assistant panel made for the TV remote, with a weekly recap of steps, dinners, energy and hot water.",
    demo: "https://haydengriffin.github.io/house-webos/app/index.html?demo",
    hero: { src: houseWebosHero, alt: "The House panel on a TV: light tiles, TV inputs, the home speakers and who is in which room" },
    clip: { name: "tv", alt: "Using House for webOS with a remote: switching lights, starting movie time, then the weekly recap", shape: "wide" },
    platforms: [{ name: "LG webOS" }],
  },
  {
    name: "Mira Mode",
    repo: "ha-mira-mode",
    summary: "Controls a Mira Mode digital shower over Bluetooth LE, and counts the water and energy each shower uses.",
    hero: { src: miraModeHero, alt: "The Mira Shower device page in Home Assistant, with shower, temperature and flow controls" },
    platforms: [{ name: "Home Assistant" }],
  },
  {
    name: "Food Diary",
    repo: "ha-food-diary",
    summary: "A calorie and macro diary in Home Assistant, with a native iPhone app, Apple Health sync and planned meals.",
    hero: { src: foodDiaryHero, alt: "Three iPhone screens from Food Diary: checking a meal, today's calories and macros, and a week on target" },
    clip: { name: "food", alt: "Logging two eggs on toast to dinner in the Food iPhone app, then seeing it on the Today screen", shape: "phone" },
    platforms: [{ name: "Home Assistant" }, { name: "iPhone" }],
  },
  {
    name: "No Zero Weeks",
    page: "no-zero-weeks",
    summary: "My training app, built around the week rather than the workout. The house plans each lift day, and the workout runs from the lock screen.",
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
    platforms: [{ name: "Android" }, { name: "Home Assistant" }],
  },
  {
    name: "ps5-autojb",
    repo: "ps5-autojb",
    summary: "Keeps a jailbroken PS5 ready with nobody at it: opens the jailbreak by name over Remote Play, and brings the console back after a crash.",
    hero: {
      src: ps5AutojbHero,
      alt: "ps5-autojb beside the PS5 Media row with Y2JB - Gaming selected, and the PS5 jailbreak ready notification on an Android phone",
    },
    media: [
      { src: ps5AutojbMedia, alt: "The PS5 Media row with Y2JB - Gaming selected, its title read from the screen", shape: "wide" },
      { src: ps5AutojbAutoload, alt: "Y2JB's autoload log over Payload Manager once the jailbreak is done", shape: "wide" },
      { src: ps5AutojbRestart, alt: "The PS5 Power menu with Restart PS5 selected, read twice before it is pressed", shape: "wide" },
      { src: ps5AutojbHaCard, alt: "The ps5-autojb card in Home Assistant: Jailbreak ready, Console, Automatic, Run jailbreak, Boot Linux, Turn off PS5 and the last result", shape: "wide" },
      {
        src: ps5AutojbHaDevice,
        alt: "The PS5 auto-jailbreak device page in Home Assistant, with its controls, sensors, diagnostics, related automations and activity",
        shape: "wide",
      },
      {
        src: ps5AutojbRecovery,
        alt: "The PS5's power over ten minutes as a crash is recovered: a kernel panic to 0 W, an ignored Bluetooth wake, a plug cycle, a second wake, the TV pressing X and Remote Play opening",
        shape: "wide",
      },
    ],
    platforms: [{ name: "PS5" }, { name: "Home Assistant" }],
  },
];

export const home = projects.filter((project) => project.published !== false);

/** A platform's name as it appears in a data attribute: "LG webOS" is "lg-webos". */
export function platformSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

/** Every page a home build gets: its own, and one for each platform built in its own repo. */
export const homePages: { project: Project; platform?: Platform }[] = home.flatMap((project) => [
  { project },
  ...(project.platforms ?? []).filter((platform) => platform.repo).map((platform) => ({ project, platform })),
]);

/** Every platform the home builds run on, the most common first. */
export const homePlatforms: { name: string; slug: string }[] = Object.entries(
  Object.groupBy(
    home.flatMap((project) => project.platforms ?? []),
    (platform) => platform.name,
  ),
)
  .sort(([, a], [, b]) => b!.length - a!.length)
  .map(([name]) => ({ name, slug: platformSlug(name) }));

/** The build after this one, going round to the first after the last. */
export function nextBuild(project: Project): Project {
  return home[(home.indexOf(project) + 1) % home.length]!;
}

/** Things that run at home but are not open source, named in one line under the builds. */
export const alsoRunning = [
  { name: "local voice control", note: "speech recognition and text-to-speech on my own server, with wall tablets as the microphones" },
  { name: "an LLM agent that can read and control the house", note: "every action it proposes is checked before it runs" },
];
