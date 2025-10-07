import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllProjects } from '@/lib/projects'

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

function Project({ project }) {
  return (
    <Card as="li" key={project.title}>
      <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
        <Card.Link href={`/projects/${project.slug}`}>
          {project.name}
        </Card.Link>
      </h2>
      <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
        {project.date}
      </p>
      <Card.Description>{project.title}</Card.Description>
      {/* <p className="mt-3 text-sm text-zinc-400 dark:text-zinc-200">
        {project.description}
      </p> */}
    </Card>
  )
}


export default async function Projects() {
  let projects = await getAllProjects()

  projects.sort((a, b) => b.number - a.number)

  return (
    <SimpleLayout
      title="Things I've made"
      intro="These are some of the projects I have enjoyed most working on. Some of them during the 4 years of my Bachelor's degree in computer science, others during my free time."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </ul>
    </SimpleLayout>
  )
}