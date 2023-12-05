'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    title: 'Home',
    href: '/',
    active: (pathname: string): boolean =>
      pathname === '/' ? /^\//.test(pathname) : false,
  },
  {
    title: 'Video',
    href: '/video',
    active: (pathname: string): boolean => /^\/video/.test(pathname),
  },
  {
    title: 'iOS',
    href: '/ios',
    active: (pathname: string): boolean => /^\/ios/.test(pathname),
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow h-16">
        <ul className="container h-full flex items-center z-10 space-x-4">
          {links.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className={cn(
                  'transition',
                  link.active(pathname) && 'text-blue-500'
                )}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <main className="grow h-[calc(100vh-16rem)] overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
