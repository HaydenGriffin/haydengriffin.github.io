// Renders the built /cv page to public/hayden-griffin-cv.pdf. Run via `pnpm cv`.
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { chromium } from "playwright";

const root = join(import.meta.dirname, "..", "dist");
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".woff2": "font/woff2", ".svg": "image/svg+xml", ".webp": "image/webp", ".png": "image/png" };

const server = createServer(async (request, response) => {
  const path = normalize(decodeURIComponent(new URL(request.url, "http://x").pathname));
  const file = join(root, path.endsWith("/") ? `${path}index.html` : path);
  try {
    response.writeHead(200, { "content-type": types[extname(file)] ?? "application/octet-stream" });
    response.end(await readFile(file));
  } catch {
    response.writeHead(404).end();
  }
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();

try {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto(`http://127.0.0.1:${port}/cv/`, { waitUntil: "networkidle" });
  await page.pdf({ path: "public/hayden-griffin-cv.pdf", format: "A4", preferCSSPageSize: true, printBackground: true });
  await browser.close();
  console.log("Wrote public/hayden-griffin-cv.pdf");
} finally {
  server.close();
}
