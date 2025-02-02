import Image from 'next/image';
import Link from 'next/link';
import { emilysCandy } from '@/app/lib/fonts';
import { books } from '../data/Books';
import { Metadata } from 'next';
import { Tooltip } from '@/app/components/Tooltip';

export const metadata: Metadata = {
  title: 'Books | Talia Greer',
  description: 'Browse all books by Talia Greer',
};

export default function BooksPage() {
  // Group books by series
  const booksBySeries = Object.entries(books).reduce((acc, [slug, book]) => {
    const series = book.series || 'Standalone';
    if (!acc[series]) {
      acc[series] = [];
    }
    acc[series].push({ slug, ...book });
    return acc;
  }, {} as Record<string, Array<{ slug: string } & typeof books[keyof typeof books]>>);

  // Add a function to get unique genres for a series
  const getSeriesGenres = (seriesBooks: Array<{ genre: string }>) => {
    return [...new Set(seriesBooks.map(book => book.genre))];
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <h1 className={`${emilysCandy.className} text-4xl sm:text-5xl lg:text-6xl mb-16 text-center`}>
          Books
        </h1>
        
        {/* Map through each series */}
        {Object.entries(booksBySeries).map(([series, seriesBooks]) => {
          const firstBook = seriesBooks[0];
          return (
            <div key={series} className="mb-16">
              <div className="flex flex-col gap-3 mb-12">
                <h2 className={`${emilysCandy.className} text-4xl text-black relative`}>
                  {series}
                  <div className="absolute bottom-0 left-0 w-32 h-1 bg-black/20 -mb-2"></div>
                </h2>
                <div className="flex gap-2">
                  {getSeriesGenres(seriesBooks).map((genre) => (
                    <Tooltip 
                      key={genre} 
                      content={
                        genre === 'Romantic Fantasy' 
                          ? 'Fantasy first, with a heaping spoonful of romance, as a treat.'
                          : genre === 'Fantasy Romance'
                          ? 'Romance-centered stories with a fantastical bent.'
                          : `This series is categorized as ${genre}`
                      }
                    >
                      <span className={`px-3 py-1 text-sm ${firstBook.theme.accent} ${firstBook.theme.text} rounded-full`}>
                        {genre}
                      </span>
                    </Tooltip>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center w-full">
                  {seriesBooks.map((book) => (
                    <div key={book.slug} className="flex flex-col max-w-sm w-full">
                      <Link href={`/books/${book.slug}`} className="group">
                        <div className="relative aspect-[2/3] w-full shadow-lg transition-transform group-hover:scale-105">
                          <Image
                            src={book.coverImage}
                            alt={book.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        
                        <div className="mt-4 text-center">
                          <h2 className={`${emilysCandy.className} text-2xl mb-2`}>
                            {book.title}
                          </h2>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
