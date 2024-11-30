import { emilysCandy } from '@/app/lib/fonts';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Newsletter | Talia Greer',
  description: 'Subscribe to Talia Greer\'s newsletter for updates and exclusive content',
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
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <Image 
              src="https://storage.mlcdn.com/account_image/391339/PYk3O7qsvL0wsu4rkvJ98QD3TI9EBitiRfAxDE9m.png" 
              alt="Newsletter header"
              width={600}
              height={300}
              className="mx-auto mb-6 max-w-full hidden sm:block"
            />
            <h2 className="text-2xl font-bold mb-4">Get a free short story!</h2>
            <p className="text-gray-600">
              Join my newsletter for a FREE exclusive copy of <strong>The Wrong World</strong>, 
              along with book updates, behind-the-scenes content, and general shenanigans!
            </p>
          </div>

          <form 
            action="https://assets.mailerlite.com/jsonp/391339/forms/105397883064288697/subscribe" 
            method="post" 
            target="_blank"
            className="space-y-4"
          >
            <div>
              <input 
                type="email" 
                name="fields[email]" 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
            <input type="hidden" name="ml-submit" value="1" />
            <input type="hidden" name="anticsrf" value="true" />
          </form>
        </div>
      </div>
    </div>
  );
}