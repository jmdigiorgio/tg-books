import Image from 'next/image';
import Link from 'next/link';
import { emilysCandy } from '@/app/lib/fonts'
import { books } from '@/app/data/Books';

export default function Hero() {
  const featuredBook = books['poisoners-vengeance'];

  return (
    <div className={`w-full min-h-screen ${featuredBook.theme.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pb-24">
        <h2 className={`${emilysCandy.className} text-4xl sm:text-5xl lg:text-6xl mb-16 text-black text-center`}>
          Upcoming Release!
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Book Cover */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-72 h-[450px] shadow-2xl transition-transform hover:scale-105">
              <Image
                src="/poisoners-vengeance.jpg"
                alt="Latest Book Cover"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Book Info */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className={`${emilysCandy.className} text-4xl sm:text-5xl lg:text-6xl mb-4`}>
              {featuredBook.title}
            </h1>
            <p className="text-xl mb-6 text-gray-600">
              {featuredBook.description}
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                Coming March 31, 2025 in ebook and paperback.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link 
                  href={featuredBook.amazonLink}
                  className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy on Amazon
                </Link>
                <Link 
                  href="/books/poisoners-vengeance" 
                  className={`${featuredBook.theme.accent} ${featuredBook.theme.text} px-8 py-3 rounded-lg hover:opacity-90 transition-colors`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
