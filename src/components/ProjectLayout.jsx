import Image from "next/image"
import Link from "next/link"

export function ProjectLayout({ project, children }) {
  return (
    <article className="prose dark:prose-invert max-w-3xl mx-auto py-10">
      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          {project.logo && (
            <div className="h-12 w-12 flex-shrink-0">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                width={48}
                height={48}
                className="rounded-lg object-contain"
              />
            </div>
          )}
          <div>
            <h1 className="text-3xl font-bold">{project.name}</h1>
            <p className="text-gray-500 dark:text-gray-400">
              {project.title} · {project.date}
            </p>
          </div>
        </div>

        {project.image && (
          <Image
            src={project.image}
            alt={project.name}
            width={800}
            height={450}
            className={`rounded-xl shadow ${project.imageClass || ""}`}
          />
        )}

        {project.description && (
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
        )}
      </header>

      {/* Body (the MDX content) */}
      <section className="prose dark:prose-invert">{children}</section>

      {/* Footer (Repos) */}
      {project.repos?.length > 0 && (
        <footer className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Repositories</h2>
          <ul className="space-y-2">
            {project.repos.map((repo) => (
              <li key={repo.url}>
                <Link
                  href={repo.url}
                  target="_blank"
                  className="text-teal-600 hover:underline"
                >
                  {repo.name} — <span className="text-gray-500">{repo.lang}</span>
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      )}
    </article>
  )
}
