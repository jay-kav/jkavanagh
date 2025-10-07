import "./globals.css"

export const metadata = {
  title: "Jamie Kavanagh — Portfolio",
  description: "Personal portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <main className="max-w-5xl mx-auto px-4 py-10">{children}</main>
        <footer className="py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Jamie Kavanagh
        </footer>
      </body>
    </html>
  )
}
