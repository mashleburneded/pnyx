import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 relative">
      {/* Gradient border effect */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/70 to-transparent"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Botcamp, Inc. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link href="https://courses.botcamp.xyz/slides/all" className="text-sm hover:text-primary transition-colors">
            Botcamp courses
          </Link>
          <Link href="https://hummingbot.org" className="text-sm hover:text-primary transition-colors">
            Hummingbot website
          </Link>
        </div>
      </div>
    </footer>
  );
}
