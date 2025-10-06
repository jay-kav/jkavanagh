import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Feed } from "feed";

export const runtime = "nodejs";
export const revalidate = 3600; // 1h

export async function GET(req) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? new URL(req.url).origin;

  const author = {
    name: "Jamie Kavanagh",
    email: "Jamiek03123@gmail.com",
  };

  const feed = new Feed({
    title: author.name,
    description: "Projects and updates",
    id: siteUrl,
    link: siteUrl,
    language: "en",
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: { rss2: `${siteUrl}/feed.xml` },
    author,
  });

  // gather items from MDX projects
  const projectsDir = path.join(process.cwd(), "src/app/projects");
  const entries = fs.readdirSync(projectsDir, { withFileTypes: true });

  const items = [];

  for (const dirent of entries) {
    if (!dirent.isDirectory()) continue;
    const slug = dirent.name;
    const mdxPath = path.join(projectsDir, slug, "page.mdx");
    if (!fs.existsSync(mdxPath)) continue;

    const src = fs.readFileSync(mdxPath, "utf8");
    const { data, content } = matter(src);

    const url = `${siteUrl}/projects/${slug}`;
    const title = data.title ?? slug.replace(/[-_]/g, " ");
    const date = data.date ? new Date(data.date) : new Date(0);
    const summary =
      data.summary ||
      (content.split("\n").find((l) => l.trim()) || "").slice(0, 240);
    const tags = Array.isArray(data.tags) ? data.tags : [];

    items.push({ url, title, date, summary, tags });
  }

  // newest first
  items.sort((a, b) => b.date - a.date);

  for (const item of items) {
    feed.addItem({
      title: item.title,
      id: item.url,
      link: item.url,
      description: item.summary,
      date: item.date,
      author: [author],
      category: item.tags.map((t) => ({ name: t })),
    });
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
