import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-primary/20 text-gray-400 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Pnyx Institute. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link href="#" className="text-sm hover:text-primary transition-colors">
            Courses
          </Link>
          <Link href="#" className="text-sm hover:text-primary transition-colors">
            About Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
