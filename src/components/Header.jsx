'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  )
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center rounded-full bg-zinc-900/90 px-4 py-2 text-sm font-medium text-zinc-100 shadow-lg shadow-zinc-800 ring-1 ring-zinc-700 backdrop-blur">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-400 group-hover:stroke-zinc-200" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-zinc-900 p-8 ring-1 ring-zinc-700 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <CloseIcon className="h-6 w-6 text-zinc-400" />
          </PopoverButton>
          <h2 className="text-sm font-medium text-zinc-400">Navigation</h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-700 text-base text-zinc-200">
            <MobileNavItem href="/about">About</MobileNavItem>
            <MobileNavItem href="/projects">Projects</MobileNavItem>
            <MobileNavItem href="/work">Work</MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  )
}

function NavItem({ href, children }) {
  const isActive = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-teal-400'
            : 'hover:text-teal-400 text-zinc-300',
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-400/0 via-teal-400/50 to-teal-400/0" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation(props) {
  return (
    <nav {...props}>
      <ul className="flex items-center justify-center rounded-full bg-zinc-900/90 px-4 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800 ring-1 ring-zinc-700 backdrop-blur">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/work">Work</NavItem>
      </ul>
    </nav>
  )
}

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

export function Header() {
  let isHomePage = usePathname() === '/'
  let headerRef = useRef(null)
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = 0
    let upDelay = 64

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      if (!headerRef.current) return

      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight,
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
      }
    }

    function updateStyles() {
      updateHeaderStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles)
      window.removeEventListener('resize', updateStyles)
    }
  }, [isHomePage])

  return (
    <header
      className="pointer-events-none relative z-50 flex flex-none flex-col"
      style={{
        height: 'var(--header-height)',
        marginBottom: 'var(--header-mb)',
      }}
    >
      <div
        ref={headerRef}
        className="top-0 z-10 h-16 pt-6"
        style={{
          position: 'var(--header-position)',
        }}
      >
        <Container
          className="top-[var(--header-top,theme(spacing.6))] w-full flex justify-center"
          style={{
            position: 'var(--header-inner-position)',
          }}
        >
          <div className="relative flex items-center justify-center gap-4 pointer-events-auto">
            <MobileNavigation className="md:hidden" />
            <DesktopNavigation className="hidden md:block" />
          </div>
        </Container>
      </div>
    </header>
  )
}
