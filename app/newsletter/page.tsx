import { Metadata } from 'next';
import { emilysCandy } from '@/app/lib/fonts';
import NewsletterForm from './NewsletterForm';

export const metadata: Metadata = {
  title: 'Newsletter | Talia Greer',
  description: 'Subscribe to get exclusive content and updates from author Talia Greer',
};

export default function NewsletterPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className={`${emilysCandy.className} text-4xl sm:text-5xl lg:text-6xl mb-8 text-center`}>
        Newsletter
      </h1>
      
      <div className="prose prose-lg max-w-none text-center mb-12">
        <p>
          Subscribe to my newsletter for exclusive content, updates on new releases, 
          and behind-the-scenes peeks into my writing process.
        </p>
      </div>

      <div className="flex justify-center">
        <NewsletterForm />
      </div>
    </div>
  );
}