import Image from 'next/image';
import Link from 'next/link';
import { emilysCandy } from '@/app/lib/fonts'

export default function Hero() {
  return (
    <div className="relative py-16 sm:py-24 bg-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`${emilysCandy.className} text-4xl sm:text-5xl lg:text-6xl mb-16 text-black text-center`}>
          Latest Release!
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Book Cover */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-72 h-[450px] shadow-2xl transition-transform hover:scale-105">
              <Image
                src="/cure-for-magic.jpg"
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
              A Cure for Magic
            </h1>
            <p className="text-xl mb-6 text-gray-600">
              Marika Cyran is destined to rule, if she survives her own power first.
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                Available now in ebook and paperback.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link 
                  href="https://www.amazon.com/Cure-Magic-Ardor-Cycle-Book-ebook/dp/B0CW1F23NK" 
                  className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy on Amazon
                </Link>
                <Link 
                  href="/books/a-cure-for-magic" 
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors"
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
