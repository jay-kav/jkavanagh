import "./globals.css"
import Header from "@/components/Header"

export const metadata = {
  title: "Jamie Kavanagh — Portfolio",
  description: "Personal portfolio of Jamie Kavanagh",
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0f19] dark:text-gray-100">
        <Header />
        <main className="max-w-5xl mx-auto px-4 py-10">{children}</main>
        <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Jamie Kavanagh
        </footer>
      </body>
    </html>
  )
}
