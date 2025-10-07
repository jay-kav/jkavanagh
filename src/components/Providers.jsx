'use client'

import { createContext, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ThemeProvider } from 'next-themes'

export const AppContext = createContext({})

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

export function Providers({ children }) {
  const pathname = usePathname()
  const previousPathname = usePrevious(pathname)

  return (
    <AppContext.Provider value={{ previousPathname }}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  )
}
