import Image from "next/image"
import Link from "next/link"
import { getAllProjects } from "@/lib/projects"

export const metadata = { title: "Projects" }

export default async function Projects() {
  const projects = (await getAllProjects()).sort((a,b)=> (b.number??0)-(a.number??0))

  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">Projects</h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <li key={p.slug} className="border rounded-2xl p-4">
            {p.logo && (
              <div className="relative h-12 w-12 overflow-hidden rounded-xl">
                <Image src={p.logo} alt="" fill className="object-contain" />
              </div>
            )}
            <h2 className="mt-4 font-semibold">
              <Link href={`/projects/${p.slug}`} className="hover:underline">{p.name}</Link>
            </h2>
            {p.date && <p className="text-sm text-gray-500">{p.date}</p>}
            {p.description && <p className="text-sm mt-2">{p.description}</p>}
          </li>
        ))}
      </ul>
    </section>
  )
}
