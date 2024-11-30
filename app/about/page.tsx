import Image from 'next/image';
import { emilysCandy } from '@/app/lib/fonts';
import { Metadata } from 'next';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Talia Greer',
  description: 'Learn more about author Talia Greer',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className={`${emilysCandy.className} text-4xl sm:text-5xl lg:text-6xl mb-16 text-center`}>
        About Me
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="prose prose-lg max-w-none">
          <p className="mb-8">
            Hi! I live in the mountains with my husband, two chaotic cat children and a very stubborn corgi named Egg Roll. When I&apos;m not writing, I&apos;m drinking iced coffee or watching truly terrible horror movies.
          </p>

          <p className="mb-8">
            The best way to keep up with my latest releases and news is to{' '}
            <a href="https://dashboard.mailerlite.com/forms/391339/105397883064288697/share" 
               className="text-purple-600 hover:text-purple-800"
               target="_blank"
               rel="noopener noreferrer"
            >
              join my newsletter
            </a>. 
            You can also find me on social media, where I post writing updates, book 
            recommendations, and occasional pet photos.
          </p>

          <p>
            For business inquiries, please contact me at:{' '}
            <a href="mailto:taliagreerbooks@gmail.com" className="text-purple-600 hover:text-purple-800">
              taliagreerbooks@gmail.com
            </a>
          </p>

          <div className="flex justify-center gap-6 mt-8">
            <Link href="https://instagram.com/taliagreerbooks" className="hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </Link>
            <Link href="https://tiktok.com/@taliagreerbooks" className="hover:text-gray-600 transition-colors" target="_blank" rel="noopener noreferrer">
              <FaTiktok size={22} />
            </Link>
          </div>
        </div>

        <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
          <Image
            src="/talia-greer.png"
            alt="Talia Greer"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
