import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { emilysCandy } from '@/app/lib/fonts'
import { Metadata } from 'next';

// Type for book data
interface BookData {
  slug: string;
  title: string;
  coverImage: string;
  description: string;
  amazonLink: string;
  series?: string;
  releaseDate: string;
}

// Book data
const books: Record<string, BookData> = {
  'a-cure-for-magic': {
    slug: 'a-cure-for-magic',
    title: 'A Cure for Magic',
    coverImage: '/cure-for-magic.jpg',
    description: 'Marika Cyran is destined to rule, if she survives her own power first.',
    amazonLink: 'https://www.amazon.com/Cure-Magic-Ardor-Cycle-Book-ebook/dp/B0CW1F23NK',
    series: 'The Ardor Cycle Book 1',
    releaseDate: '2024'
  }
};

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const book = books[slug];
  
  if (!book) {
    return {
      title: 'Book Not Found'
    };
  }

  return {
    title: `${book.title} | Talia Greer`,
    description: book.description,
  };
}

export default async function BookPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const book = books[slug];

  if (!book) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[2/3] shadow-2xl">
          <Image
            src={book.coverImage}
            alt={book.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        
        <div>
          <h1 className={`${emilysCandy.className} text-4xl sm:text-5xl lg:text-6xl mb-4`}>
            {book.title}
          </h1>
          {book.series && (
            <p className="text-xl mb-4 text-purple-600">{book.series}</p>
          )}
          <p className="text-lg mb-8">{book.description}</p>
          
          <Link 
            href={book.amazonLink}
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy on Amazon
          </Link>
        </div>
      </div>
    </div>
  );
}
