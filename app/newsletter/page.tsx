'use client';
import { emilysCandy } from '@/app/lib/fonts';
import Image from 'next/image';
import { useState, FormEvent } from 'react';

export default function NewsletterPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://assets.mailerlite.com/jsonp/391339/forms/105397883064288697/subscribe', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

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

          {status === 'success' ? (
            <div className="text-center p-4 bg-green-100 text-green-700 rounded-md">
              Thanks for subscribing! Please check your email to confirm your subscription.
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <input 
                  type="email" 
                  name="fields[email]" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Email"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              {status === 'error' && (
                <div className="text-red-600 text-sm">
                  {errorMessage}
                </div>
              )}
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors disabled:opacity-50"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              <input type="hidden" name="ml-submit" value="1" />
              <input type="hidden" name="anticsrf" value="true" />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}