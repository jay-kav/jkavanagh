export default function WorkPage() {
  const jobs = [
    { company:"Tickle Tribe", role:"Website Admin", period:"Jul 2023 – Present",
      points:["Updated products & promos","Improved engagement via analytics"] },
  ]
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Work</h1>
      {jobs.map(j => (
        <article key={j.company} className="border rounded-2xl p-5">
          <header className="flex justify-between">
            <h2 className="font-semibold">{j.role} · {j.company}</h2>
            <span className="text-sm text-gray-500">{j.period}</span>
          </header>
          <ul className="list-disc pl-5 mt-2 text-sm">
            {j.points.map(p => <li key={p}>{p}</li>)}
          </ul>
        </article>
      ))}
    </section>
  )
}
