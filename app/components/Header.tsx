import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold font-playfair">
          Talia Greer
        </Link>
        <div className="flex gap-6">
          <Link href="/books" className="hover:text-gray-600 transition-colors">
            Books
          </Link>
          <Link href="/about" className="hover:text-gray-600 transition-colors">
            Newsletter
          </Link>
          <Link href="/contact" className="hover:text-gray-600 transition-colors">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
