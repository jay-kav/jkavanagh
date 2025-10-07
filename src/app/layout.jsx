import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Providers } from "@/components/Providers"

export const metadata = {
  title: "Jamie Kavanagh — Portfolio",
  description: "Personal portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen transition-colors duration-300 bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <Providers>
          <Header />
          <main className="max-w-5xl mx-auto px-4 py-10">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
