export default function AboutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Jamie Kavanagh</h1>
      <p className="text-gray-600">Software Engineer</p>
      <div className="flex gap-3">
        <a className="rounded px-3 py-2 bg-black text-white" href="#" target="_blank" rel="noreferrer">GitHub</a>
        <a className="rounded px-3 py-2 border" href="#" target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="rounded px-3 py-2 border" href="#" target="_blank" rel="noreferrer">Download CV</a>
      </div>
      <p className="prose max-w-none">
        I’m a CS (1:1) graduate from DCU with hands-on frontend and full-stack experience.
      </p>
    </section>
  )
}
