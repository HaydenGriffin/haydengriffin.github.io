import type { MarkdownInstance } from "astro";
import type { Project } from "../data/types";

/** The name in a project's page address, /projects/<name>/: its repo, or its page when the code is private. */
export function pageName(project: Project): string | undefined {
  return project.repo ?? project.page;
}

const writeUps = import.meta.glob<MarkdownInstance<Record<string, never>>>("../writeups/*.md", { eager: true });

/** The write-up for a build whose code is private, from src/writeups/<page>.md. */
export function getWriteUp(page: string) {
  const writeUp = writeUps[`../writeups/${page}.md`];
  if (!writeUp) throw new Error(`No write-up at src/writeups/${page}.md`);
  return writeUp.Content;
}
