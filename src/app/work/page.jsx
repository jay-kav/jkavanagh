const EXPERIENCE = [
  {
    company: "Tickle Tribe",
    role: "Website Admin",
    period: "Jul 2023 – Present",
    points: [
      "Updated the e-commerce site with new products, promos, and announcements.",
      "Analysed user behaviour and improved engagement."
    ],
  },
  {
    company: "Deciphex",
    role: "Software Engineering Intern",
    period: "Mar 2024 – Aug 2024",
    points: [
      "Built a front-end client management app with OAuth2.",
      "Reduced API calls ~20% via a custom caching eviction strategy.",
      "Participated in Agile rituals and code reviews."
    ],
  },
  {
    company: "Renewable Heat Sources",
    role: "Site Assistant",
    period: "Aug 2021 – Sep 2023",
    points: [
      "Prepared tools/materials for bathroom renovations.",
      "Processed and recycled waste materials."
    ],
  },
]

export default function WorkPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Work</h1>
      <div className="space-y-6">
        {EXPERIENCE.map((job) => (
          <article key={job.company} className="border rounded-2xl p-5">
            <header className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">{job.role} · {job.company}</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">{job.period}</span>
            </header>
            <ul className="list-disc pl-5 mt-3 space-y-1">
              {job.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
