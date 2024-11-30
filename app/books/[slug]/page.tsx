import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { emilysCandy } from '@/app/lib/fonts'
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import { books as baseBooks, Book } from '@/app/data/Books';
import { Tooltip } from '@/app/components/Tooltip';

// Extend the Book interface for the additional fields needed in this page
interface ExtendedBook extends Book {
  releaseDate: string;
  heatLevel: string;
  tags: string[];
  contentWarnings: string[];
}

// Update the books data while preserving all existing information
const books: Record<string, ExtendedBook> = {
  'a-cure-for-magic': {
    ...baseBooks['a-cure-for-magic'],
    description: `**Marika Cyran is destined to rule, if she survives her own power first.**

&nbsp;

When rebels attack the royal compound, Marika learns the true price of her family's legacy. The same deadly magic her ancestors outlawed now runs in her veins, and her royal blood paints a target on her back.

&nbsp;

Desperate to learn her powers before they destroy her, she takes shelter at Nella University, hiding her true identity. But it's not quite the sanctuary she's hoping for. Argent, the roommate she's paired with, is a prickly woman who seems to despise her. The same rebels who want her family dead flourish here under the guise of a student society, and their most popular member, Harland, seems a little too interested in her dangerous power…and Marika herself.

&nbsp;

When a spark ignites between all three of them, it complicates Marika's quest for control. To stay is to spit upon her family's memory. To leave is to forfeit her once chance to corral the unruly magic. And to do nothing is to risk being consumed by the very forces she seeks to understand.

&nbsp;

*A Cure for Magic is the first book in a New Adult romantic fantasy trilogy featuring dark elemental magic, hidden royals, and a medium-heat romance that is secondary to the plot. Perfect for fans of dark academia and the Netflix adaptation of Leigh Bardugo's Shadow & Bone.*`,
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
      'violence towards animals (dog death)',
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
  },
  'sasquatch-summer': {
    ...baseBooks['sasquatch-summer'],
    description: `**A hyperindependent PhD graduate, an impossible forest monster, and the irresistible attraction between them.**

&nbsp;

Returning to her hometown of River Pointe, Idaho is at the very bottom of Felicity Clarke's meticulous to-do list. With an Ivy League doctorate in hand, she's sure the academic job market will shine favorably on her.

&nbsp;

But when her job search turns up nothing, and her estranged mother dies, she's forced to return to the one place she spent her whole life plotting to leave. There, she happens into her dream job–music faculty at a local college.

&nbsp;

And her faculty mentor? The super hot, hairy, 7ft-tall Cedric Byrne.

&nbsp;

Determined to resist her infuriating attraction to Cedric, Felicity gives him the cold shoulder. But between living in her dead mom's trailer and reuniting with her high school BFF, Felicity has more than enough to worry about. And Cedric and his kindness–and good looks–prove highly persuasive. She can't help but warm to him.

&nbsp;

But Cedric is not just a man. He's a monster. Bigfoot, to be precise. And behind every monster is someone who threatens to destroy them.

&nbsp;

**Will Felicity stand with her Bigfoot boyfriend? Or will she do what she does best when it comes to River Pointe–flee?**

&nbsp;

*Perfect for fans of Lillian Lark and Kathryn Moon, Sasquatch Summer is a dual-POV, full-length paranormal monster romance with a guaranteed HEA that features forced proximity and size difference. It is the first in a series of small town standalones, each set in a different location and season. See author's website for more detailed content warnings.*`,
    releaseDate: '2024',
    heatLevel: 'High',
    tags: [
      'forced proximity',
      'size difference',
      'light rope play',
      'work mentor',
      'shifted sex',
      'hurt/comfort',
      'touch her and die'
    ],
    contentWarnings: [
      'death of a loved one',
      'funeral proceedings',
      'animal cruelty/death',
      'explicit sex scenes',
      'gun violence',
      'foul language'
    ]
  },
  'alder-king-spring': {
    ...baseBooks['alder-king-spring'],
    description: `**As his curse's deadline approaches, Kaspar and his beloved enchanted forest stand on the brink of doom.**

&nbsp;

Deep in the snowy forests of Germany, the Alder King of legend runs short on time. Cursed by a vengeful sorceress for his father's misdeeds, Kaspar's desperate quest for the one elusive remedy–love–becomes increasingly dire. Each passing day, his hope dwindles, for who could ever see past his face, marred by the scars of ancient magic?

&nbsp;

Eliza Wilson has two missions: write her dissertation, and savor her fleeting days of freedom. Her fiance considers her interests pointless, and while her family loves him, Eliza longs for a deeper connection. With their wedding on the horizon, this research trip is her last chance to indulge her interest in all things mythical.

&nbsp;

Though the country house she rents a room in is breathtaking, the surly landlord–who covers his face and seems reluctant to acknowledge her unless they're discussing literature–soon becomes more fascinating than her research.

&nbsp;

As her determination to unravel his secrets brings them closer, Eliza unearths the grim destiny of the ailing king and realizes that she holds the sole key to his salvation–if only he would allow himself to be saved.

&nbsp;

Will she make a dutiful return to her indifferent fiance? Or will she choose the risk of a lifetime and indulge her forbidden attraction to a stubborn and lonely mythical king who refuses her help at every turn?

&nbsp;

*Perfect for readers of Kathryn Moon and Lillian Lark, Alder King Spring is a dual-POV, full-length paranormal monster romance that draws inspiration from German folklore. It has a guaranteed HEA and features a grumpy/sunshine dynamic and a loose Beauty and the Beast retelling. See author's website for more detailed content warnings*

&nbsp;

*Alder King Spring is the second in a series of small town standalones, each set in a different location and season. All books in the Wild Wandering series can be read in any order.*`,
    releaseDate: '2024',
    heatLevel: 'High',
    tags: [
      'grumpy/sunshine',
      'small town wooded setting',
      'demisexual & bisexual rep',
      'sentient forest',
      'dark cottagecore winter aesthetic',
      'slow burn',
      'spring thaw',
      'loose Beauty and the Beast vibes',
      'German folklore inspired'
    ],
    contentWarnings: [
      'Cheating in the context of a failing relationship',
      'Mentions of death/dying',
      'murder',
      'violence/combat',
      'explicit sex scenes',
      'foul language'
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
          {(book.series || book.genre) && (
            <p className="text-xl mb-4 text-purple-600">
              <Tooltip 
                content={
                  book.genre === 'Romantic Fantasy' 
                    ? 'Fantasy first, with a heaping spoonful of romance, as a treat.'
                    : book.genre === 'Fantasy Romance'
                    ? 'Romance-centered stories with a fantastical bent.'
                    : `This book is categorized as ${book.genre}`
                }
              >
                <span className="bg-purple-200 text-purple-900 px-3 py-1 rounded-full">
                  {book.genre}
                </span>
              </Tooltip>
              {book.series && (
                <>
                  <span className="mx-2">•</span>
                  {book.series}
                </>
              )}
            </p>
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
