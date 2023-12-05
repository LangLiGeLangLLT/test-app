import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow h-16">
        <ul className="container h-full flex items-center z-10 space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/video">Video</Link>
          </li>
        </ul>
      </header>
      <main className="grow">{children}</main>
    </div>
  )
}
