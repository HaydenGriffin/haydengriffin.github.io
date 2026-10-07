/**
 * Build-time GitHub data for project rows: description, language, last push,
 * links and the repo's own hero image (docs/images/hero.*). Every call fails soft,
 * so a rate limit or an offline build drops the extras instead of breaking the site.
 */
const OWNER = "HaydenGriffin";
const API = "https://api.github.com";

export interface RepoInfo {
  url: string;
  description?: string;
  language?: string;
  pushedAt?: Date;
  homepage?: string;
  hero?: string;
}

const cache = new Map<string, Promise<RepoInfo>>();

async function api<T>(path: string): Promise<T | undefined> {
  const headers: Record<string, string> = { accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  try {
    const response = await fetch(`${API}${path}`, { headers });
    if (!response.ok) {
      console.warn(`[github] ${path}: ${response.status}`);
      return undefined;
    }
    return (await response.json()) as T;
  } catch (error) {
    console.warn(`[github] ${path}: ${(error as Error).message}`);
    return undefined;
  }
}

async function load(name: string): Promise<RepoInfo> {
  const url = `https://github.com/${OWNER}/${name}`;
  const repo = await api<{ description: string | null; language: string | null; pushed_at: string; homepage: string | null }>(`/repos/${OWNER}/${name}`);
  const images = await api<{ name: string; download_url: string }[]>(`/repos/${OWNER}/${name}/contents/docs/images`);
  const hero = images?.find((file) => /^hero\.(png|jpe?g|webp)$/i.test(file.name))?.download_url;
  const homepage = repo?.homepage && !repo.homepage.startsWith(url) ? repo.homepage : undefined;
  return {
    url,
    description: repo?.description ?? undefined,
    language: repo?.language ?? undefined,
    pushedAt: repo ? new Date(repo.pushed_at) : undefined,
    homepage,
    hero,
  };
}

export function getRepo(name: string): Promise<RepoInfo> {
  if (!cache.has(name)) cache.set(name, load(name));
  return cache.get(name)!;
}

const relative = new Intl.RelativeTimeFormat("en-GB", { numeric: "auto" });

/** "today", "3 days ago", "last month". */
export function updatedAgo(date: Date, now = new Date()): string {
  const days = Math.round((date.getTime() - now.getTime()) / 86_400_000);
  if (Math.abs(days) < 30) return relative.format(days, "day");
  const months = Math.round(days / 30);
  if (Math.abs(months) < 12) return relative.format(months, "month");
  return relative.format(Math.round(days / 365), "year");
}
