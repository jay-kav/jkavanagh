import { Mail, Phone, MapPin } from "lucide-react"

export default function AboutPage() {
  const profile = {
    location: "Fairwinds, Sutton, Dublin 13",
    email: "Jamiek03123@gmail.com",
    phone: "085 190 0546",
    github: "#",   // replace
    linkedin: "#", // replace
    cv: "#",       // replace with public CV URL
  }

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Jamie Kavanagh</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Software Engineer</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-2 text-sm border rounded-2xl px-3 py-1">
          <MapPin size={16} /> {profile.location}
        </span>
        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-sm border rounded-2xl px-3 py-1">
          <Mail size={16} /> {profile.email}
        </a>
        <a href={`tel:${profile.phone.replace(/\s/g,'')}`} className="inline-flex items-center gap-2 text-sm border rounded-2xl px-3 py-1">
          <Phone size={16} /> {profile.phone}
        </a>
      </div>

      <div className="flex gap-3">
        <a className="rounded-xl px-4 py-2 bg-gray-900 text-white dark:bg-white dark:text-black" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="rounded-xl px-4 py-2 border" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="rounded-xl px-4 py-2 border" href={profile.cv} target="_blank" rel="noreferrer">Download CV</a>
      </div>

      <article className="prose dark:prose-invert max-w-none">
        <p>
          I’m a Computer Science (1:1) graduate from DCU with hands-on frontend and full-stack experience.
          I enjoy building polished UIs, solving tricky bugs, and shipping things people love to use.
        </p>
        <p>
          Recently at Deciphex I improved API efficiency with a custom caching eviction strategy,
          and I’ve built projects across React, Spring Boot, and Django.
        </p>
      </article>
    </section>
  )
}
