"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function Header() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    const prefersDark =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    setTheme(saved || (prefersDark ? "dark" : "light"))
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-black/40 border-b dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">Jamie Kavanagh</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link className="hover:underline underline-offset-4" href="/">Home</Link>
          <Link className="hover:underline underline-offset-4" href="/projects">Projects</Link>
          <Link className="hover:underline underline-offset-4" href="/work">Work</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            className="h-9 w-9 grid place-items-center rounded-xl border dark:border-gray-700"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  )
}
