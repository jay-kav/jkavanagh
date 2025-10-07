'use client'

import clsx from 'clsx'

export function ArticleContainer({ children, className = '', ...props }) {
  return (
    <div
      className={clsx(
        // full background that adapts to theme
        'min-h-screen w-full transition-colors duration-300',
        'bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100',
        'flex justify-center px-4 py-12',
        className
      )}
      {...props}
    >
      <article
        className={clsx(
          // the main “sheet”
          'w-full max-w-4xl rounded-2xl shadow-xl p-8',
          'bg-white/90 dark:bg-zinc-900/80 backdrop-blur-sm ring-1 ring-zinc-900/10 dark:ring-white/10'
        )}
      >
        {children}
      </article>
    </div>
  )
}
