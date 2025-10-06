import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"

export const revalidate = 3600 // ISR cache 1h

export default function ProjectsPage() {
  const projectsDir = path.join(process.cwd(), "src/app/projects")
  const entries = fs.readdirSync(projectsDir, { withFileTypes: true })

  const items = entries
    .filter((e) => e.isDirectory())
    .filter((e) => fs.existsSync(path.join(projectsDir, e.name, "page.mdx")))
    .map((e) => {
      const slug = e.name
      const mdxPath = path.join(projectsDir, slug, "page.mdx")
      const source = fs.readFileSync(mdxPath, "utf8")
      const { data } = matter(source)
      const title = data.title || slug.replace(/[-_]/g, " ")
      const date = data.date ? new Date(data.date) : new Date(0) // missing dates go last
      const tags = data.tags || []
      const cover = typeof data.cover === "string" ? data.cover : null // e.g. "/projects/<slug>/cover.jpg"
      return { slug, title, date, tags, cover }
    })
    .sort((a, b) => b.date - a.date)

  return (
    <section className="space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {items.map(({ slug, title, tags, cover }) => (
          <article key={slug} className="border rounded-2xl overflow-hidden">
            {cover && (
              <div className="relative w-full h-40">
                <Image src={cover} alt={title} fill className="object-cover" />
              </div>
            )}
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold">
                <Link href={`/projects/${slug}`} className="hover:underline">{title}</Link>
              </h2>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 text-xs">
                  {tags.map((t) => (
                    <span key={t} className="px-2 py-1 border rounded-2xl">{t}</span>
                  ))}
                </div>
              )}
              <div>
                <Link href={`/projects/${slug}`} className="text-sm underline underline-offset-4">
                  View project →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
