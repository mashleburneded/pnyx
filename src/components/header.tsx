import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-black text-white py-4 px-6 md:px-16 flex justify-between items-center sticky top-0 z-50 border-b border-gray-800">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="https://ext.same-assets.com/1232453280/849522504.png" alt="Botcamp Logo" width={30} height={30} />
        <span className="text-xl font-bold text-primary">Hummingbot Botcamp</span>
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
