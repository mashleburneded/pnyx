import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-black text-white py-4 px-6 md:px-16 flex justify-between items-center sticky top-0 z-50 relative">
      {/* Gradient border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/70 to-transparent"></div>
      
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/phoenix-logo.svg" alt="Pnyx Institute Logo" width={30} height={30} />
        <span className="text-xl font-bold text-primary">Pnyx Institute</span>
      </Link>
      <nav className="space-x-6 flex items-center">
        <Link href="https://courses.botcamp.xyz/slides/all" className="text-sm hover:text-primary transition-colors text-gray-300">
          Courses
        </Link>
        <Link href="/cohorts" className="text-sm text-primary hover:text-primary transition-colors">
          Cohorts
        </Link>
        <Link href="https://courses.botcamp.xyz/web/login" className="bg-primary text-black px-4 py-1.5 rounded-md hover:bg-yellow-400 transition-colors text-sm font-medium">
          Sign In
        </Link>
      </nav>
    </header>
  )
}
