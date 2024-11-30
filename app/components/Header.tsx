import Link from 'next/link';
import { FaInstagram, FaGoodreads, FaAmazon } from 'react-icons/fa';
import { SiBookbub } from 'react-icons/si';
import { FaTiktok } from 'react-icons/fa6';
import localFont from 'next/font/local'

const emilysCandy = localFont({
  src: '../fonts/EmilysCandy-Regular.ttf',
  display: 'swap',
})

export default function Header() {
  return (
    <header className="fixed top-0 w-full py-4 px-4 sm:px-6 lg:px-8 bg-white shadow-sm z-50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex-1">
          <Link href="/" className={`text-2xl font-bold ${emilysCandy.className}`}>
            Talia Greer
          </Link>
        </div>
        
        <div className="flex items-center gap-6 flex-1 justify-center">
          <Link href="/books" className="hover:text-gray-600 transition-colors">
            Books
          </Link>
          <Link href="/newsletter" className="hover:text-gray-600 transition-colors">
            Newsletter
          </Link>
          <Link href="/about" className="hover:text-gray-600 transition-colors">
            About
          </Link>
        </div>

        <div className="flex gap-4 flex-1 justify-end">
          <Link href="https://www.amazon.com/stores/Talia-Greer/author/B0C5467N5V" className="hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer">
            <FaAmazon size={20} />
          </Link>
          <Link href="https://instagram.com/taliagreerbooks" className="hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} />
          </Link>
          <Link href="https://tiktok.com/@taliagreerbooks" className="hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer">
            <FaTiktok size={18} />
          </Link>
          <Link href="https://www.goodreads.com/author/show/35989564.Talia_Greer" className="hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer">
            <FaGoodreads size={20} />
          </Link>
          <Link href="https://www.bookbub.com/authors/talia-greer" className="hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer">
            <SiBookbub size={20} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
