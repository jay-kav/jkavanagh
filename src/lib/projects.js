import fs from 'fs'
import path from 'path'

export async function getAllProjects() {
  const projectsDir = path.join(process.cwd(), 'src/app/projects')
  const entries = fs.readdirSync(projectsDir, { withFileTypes: true })

  const projects = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    const filePath = path.join(projectsDir, entry.name, 'page.mdx')
    if (!fs.existsSync(filePath)) continue

    // Dynamic import the MDX file to get its `project` export
    const { project } = await import(`@/app/projects/${entry.name}/page.mdx`)

    projects.push({
      ...project,
      slug: entry.name,
    })
  }

  // Sort newest first
  projects.sort((a, b) => b.number - a.number)
  return projects
}
