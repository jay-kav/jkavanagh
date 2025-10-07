import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getAllProjects() {
  const dir = path.join(process.cwd(), "src/app/projects");
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  return entries
    .filter(e => e.isDirectory())
    .filter(e => fs.existsSync(path.join(dir, e.name, "page.mdx")))
    .map(e => {
      const slug = e.name;
      const src = fs.readFileSync(path.join(dir, slug, "page.mdx"), "utf8");
      const { data } = matter(src);
      return {
        slug,
        name: data.title || slug.replace(/[-_]/g, " "),
        date: data.date || "",
        description: data.summary || "",
        logo: data.logo || null,   // string path in /public
        tags: data.tags || [],
        number: data.number ?? 0,
      };
    });
}
