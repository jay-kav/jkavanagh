const EXPERIENCE = [
  {
    company: "Tickle Tribe",
    role: "Website Administrator",
    period: "Jul 2023 – Present",
    points: [
      "Managed and maintained the Shopify-based e-commerce platform, ensuring smooth daily operations and accurate product listings.",
      "Created and updated promotional content, product launches, and seasonal campaigns to enhance customer engagement and sales performance.",
      "Monitored site analytics and user behaviour to identify trends, optimise store layout, and improve overall user experience.",
      "Coordinated with the company director to ensure timely updates, stock accuracy, and visual consistency across the platform."
    ],
  },
  {
    company: "Deciphex",
    role: "Software Engineering Intern",
    period: "Mar 2024 – Aug 2024",
    points: [
      "Personally designed and developed the private client management dashboard.",
      "Built responsive front-end components with React and integrated secure authentication via OAuth2, improving accessibility and user trust.",
      "Collaborated in an Agile development team through sprints, stand-ups, and code reviews, ensuring continuous delivery of high-quality features.",
      "Reduced backend load by implementing a custom caching and eviction strategy, cutting redundant API calls by approximately 20%.",
      "Participated in cross-functional meetings with product and QA teams to refine requirements and validate feature implementation."
    ],
  },
  {
    company: "Renewable Heat Sources",
    role: "Site Assistant",
    period: "Aug 2021 – Sep 2023",
    points: [
      "Assisted with the preparation and organisation of tools and materials for plumbing and bathroom renovation projects.",
      "Ensured adherence to safety standards while managing on-site tasks and supporting installation workflows.",
      "Processed, sorted, and recycled materials to maintain environmentally responsible waste management practices."
    ],
  },
]

export default function WorkPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl bg-clip-text dark:text-transparent bg-gradient-to-r from-pink-500 to-violet-500">These are some of the jobs I've worked over the years</h1>
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
