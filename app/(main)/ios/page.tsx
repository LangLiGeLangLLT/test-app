import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="container">
      <div className="py-4 flex flex-col space-y-4">
        <Button asChild>
          <Link href="/ios/valid">Valid Open App</Link>
        </Button>
        <Button asChild>
          <Link href="/ios/invalid">Invalid Open App</Link>
        </Button>
      </div>
    </div>
  )
}
