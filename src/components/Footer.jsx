import Link from 'next/link'
import clsx from 'clsx'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export function Footer() {
   return (
        <footer className="mt-32">
            <ContainerOuter>
                <div className="border-t border-zinc-100 pb-16 dark:border-zinc-700/40">
                    <ContainerInner>
                        <div className="flex flex-col items-center justify-between gap-6 mt-12">
                            <div
                                className="flex flex-wrap justify-center gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                                <NavLink href="/">Home</NavLink>
                                <NavLink href="/about">About</NavLink>
                                <NavLink href="/projects">Projects</NavLink>
                                <NavLink href="/work">Work</NavLink>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    &copy; {(new Date).getFullYear()} Jamie Kavanagh. All rights reserved.
                                </p>
                                <div className="mx-auto mt-6 flex gap-6">
                                    <SocialLink
                                        href="https://github.com/jay-kav"
                                        ariaLabel="Follow on GitHub"
                                        icon={GitHubIcon}
                                    />
                                    <SocialLink
                                        href="https://www.linkedin.com/in/jamie-kavanagh-70b342258/"
                                        ariaLabel="Follow on LinkedIn"
                                        icon={LinkedInIcon}
                                    />
                                </div>
                            </div>
                        </div>
                    </ContainerInner>
                </div>
            </ContainerOuter>
        </footer>
    )
}