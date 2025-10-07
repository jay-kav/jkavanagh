// src/app/feed.xml/route.js
import { Feed } from "feed"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com"
  const author = {
    name: "Jamie Kavanagh",
    email: "your@email.com",
    link: siteUrl,
  }

  const feed = new Feed({
    title: "Jamie Kavanagh — Projects Feed",
    description: "Updates and new projects from Jamie Kavanagh",
    id: siteUrl,
    link: siteUrl,
    language: "en",
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: { rss2: `${siteUrl}/feed.xml` },
    author,
  })

  // Read all project MDX files
  const projectsDir = path.join(process.cwd(), "src/app/projects")
  const entries = fs.readdirSync(projectsDir, { withFileTypes: true })

  for (const e of entries) {
    if (!e.isDirectory()) continue
    const slug = e.name
    const mdxPath = path.join(projectsDir, slug, "page.mdx")
    if (!fs.existsSync(mdxPath)) continue

    const src = fs.readFileSync(mdxPath, "utf8")
    const { data, content } = matter(src)

    feed.addItem({
      title: data.title || slug,
      id: `${siteUrl}/projects/${slug}`,
      link: `${siteUrl}/projects/${slug}`,
      description: data.summary || "",
      content,
      author: [author],
      date: new Date(data.date || Date.now()),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  })
}
