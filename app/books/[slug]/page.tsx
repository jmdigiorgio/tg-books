import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { emilysCandy } from '@/app/lib/fonts'
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

// Type for book data
interface BookData {
  slug: string;
  title: string;
  coverImage: string;
  description: string;
  amazonLink: string;
  series?: string;
  releaseDate: string;
  heatLevel: string;
  tags: string[];
  contentWarnings: string[];
}

// Book data
const books: Record<string, BookData> = {
  'a-cure-for-magic': {
    slug: 'a-cure-for-magic',
    title: 'A Cure for Magic',
    coverImage: '/cure-for-magic.jpg',
    description: `**Marika Cyran is destined to rule, if she survives her own power first.**

&nbsp;

When rebels attack the royal compound, Marika learns the true price of her family's legacy. The same deadly magic her ancestors outlawed now runs in her veins, and her royal blood paints a target on her back.

&nbsp;

Desperate to learn her powers before they destroy her, she takes shelter at Nella University, hiding her true identity. But it's not quite the sanctuary she's hoping for. Argent, the roommate she's paired with, is a prickly woman who seems to despise her. The same rebels who want her family dead flourish here under the guise of a student society, and their most popular member, Harland, seems a little too interested in her dangerous power…and Marika herself.

&nbsp;

When a spark ignites between all three of them, it complicates Marika's quest for control. To stay is to spit upon her family's memory. To leave is to forfeit her once chance to corral the unruly magic. And to do nothing is to risk being consumed by the very forces she seeks to understand.

&nbsp;

*A Cure for Magic is the first book in a New Adult romantic fantasy trilogy featuring dark elemental magic, hidden royals, and a medium-heat romance that is secondary to the plot. Perfect for fans of dark academia and the Netflix adaptation of Leigh Bardugo's Shadow & Bone.*`,
    amazonLink: 'https://www.amazon.com/Cure-Magic-Ardor-Cycle-Book-ebook/dp/B0CW1F23NK',
    series: 'The Ardor Cycle Book 1',
    releaseDate: '2024',
    heatLevel: 'Medium',
    tags: [
      'OT3/throuple',
      'only one tent ',
      'bisexual rep',
      'hidden identity',
      'magic training',
      'Black royals',
      'dark academia',
      'secret society',
      'trauma-based elemental magic',
      'EU-inspired secondary-world fantasy'
    ],
    contentWarnings: [
      'Violence towards animals (dog death)',
      'mention of physical abuse',
      'mention of self-harm',
      'death on page',
      'blood',
      'vomit',
      'feces',
      'mentioned death of a parent',
      'drug and alcohol use',
      'mention/description of suicide'
    ]
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
          <div className="text-lg mb-8 prose prose-p:my-6">
            <ReactMarkdown>{book.description}</ReactMarkdown>
          </div>
          
          <Link 
            href={book.amazonLink}
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy on Amazon
          </Link>
          
          <div className="mt-12 space-y-8">
            <div>
              <h2 className={`${emilysCandy.className} text-2xl mb-2`}>Heat Level</h2>
              <p>{book.heatLevel}</p>
            </div>
            
            <div>
              <h2 className={`${emilysCandy.className} text-2xl mb-2`}>Tags & Tropes</h2>
              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span key={tag} className="bg-purple-200 text-purple-900 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className={`${emilysCandy.className} text-2xl mb-2`}>Content Warnings</h2>
              <div className="flex flex-wrap gap-2">
                {book.contentWarnings.map((warning) => (
                  <span key={warning} className="bg-red-100 text-red-800 px-3 py-1 rounded-full">
                    {warning}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
