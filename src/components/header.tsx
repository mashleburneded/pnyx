import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-black text-white py-4 px-6 md:px-16 flex justify-between items-center sticky top-0 z-50 border-b border-primary/20">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/phoenix-logo.svg" alt="Pnyx Institute Logo" width={36} height={36} className="rounded-full" />
        <span className="text-xl font-bold text-primary">Pnyx Institute</span>
      </Link>
      <nav className="space-x-6 flex items-center">
        <Link href="#" className="text-sm hover:text-primary transition-colors text-gray-300">
          Courses
        </Link>
        <Link href="#" className="text-sm text-primary hover:text-primary/80 transition-colors">
          Cohorts
        </Link>
        <Link href="#" className="bg-primary text-black px-4 py-1.5 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium">
          Sign In
        </Link>
      </nav>
    </header>
  )
}
