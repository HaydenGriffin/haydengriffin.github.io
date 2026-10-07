/**
 * A repo's README as HTML for its project page, rendered by GitHub's API at build time.
 * The intro's hero image and badges, and the README's own title, are dropped because the
 * page shows those itself. Relative links and images are pointed back at GitHub.
 */
const OWNER = "HaydenGriffin";

function absolute(repo: string, path: string, kind: "src" | "href") {
  if (/^([a-z]+:|#|\/\/)/i.test(path)) return path;
  const clean = path.replace(/^\.?\//, "");
  return kind === "src"
    ? `https://raw.githubusercontent.com/${OWNER}/${repo}/HEAD/${clean}`
    : `https://github.com/${OWNER}/${repo}/blob/HEAD/${clean}`;
}

/** Drops paragraphs that hold only images or image links (the hero and badges). */
function dropImageOnlyParagraphs(html: string) {
  return html.replace(/<p\b[^>]*>([\s\S]*?)<\/p>/g, (paragraph, inner: string) => {
    const text = inner.replace(/<img\b[^>]*>/g, "").replace(/<\/?a\b[^>]*>/g, "").trim();
    return text === "" && /<img\b/.test(inner) ? "" : paragraph;
  });
}

export async function getReadmeHtml(repo: string): Promise<string | undefined> {
  const headers: Record<string, string> = { accept: "application/vnd.github.html+json" };
  if (process.env.GITHUB_TOKEN) headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  let html: string;
  try {
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${repo}/readme`, { headers });
    if (!response.ok) {
      console.warn(`[readme] ${repo}: ${response.status}`);
      return undefined;
    }
    html = await response.text();
  } catch (error) {
    console.warn(`[readme] ${repo}: ${(error as Error).message}`);
    return undefined;
  }

  html = html
    .replace(/^<div id="readme"[^>]*><article[^>]*>/, "")
    .replace(/<\/article><\/div>\s*$/, "")
    // GitHub wraps headings with a permalink icon; keep a plain heading with a usable id.
    .replace(
      /<div class="markdown-heading"[^>]*><(h[1-6])[^>]*>([\s\S]*?)<\/\1><a id="user-content-([^"]+)"[\s\S]*?<\/a><\/div>/g,
      '<$1 id="$3">$2</$1>',
    )
    .replace(/<h1 id="[^"]*">[\s\S]*?<\/h1>/, "")
    .replace(/\s(?:dir|align)="[^"]*"/g, "")
    .replace(/\s(src|href)="([^"]+)"/g, (_, kind: "src" | "href", path: string) => ` ${kind}="${absolute(repo, path, kind)}"`)
    .replace(/<img\b(?![^>]*\bloading=)/g, '<img loading="lazy"');

  const firstSection = html.search(/<h2\b/);
  if (firstSection > 0) html = dropImageOnlyParagraphs(html.slice(0, firstSection)) + html.slice(firstSection);
  return html.trim();
}
