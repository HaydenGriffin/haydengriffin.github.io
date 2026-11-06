import path from "node:path";
import sharp from "sharp";

/** A clip's size in pixels, read from its poster at build time, so its player can take the clip's shape before it loads. */
export async function clipSize(name: string): Promise<{ width: number; height: number }> {
  const { width, height } = await sharp(path.join(process.cwd(), "public/clips", `${name}-poster.jpg`)).metadata();
  return { width: width!, height: height! };
}
