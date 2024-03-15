import React from 'react';

export default function NotFound() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <p className='text-base font-semibold text-primary'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-softly-200 sm:text-5xl'>
          Page not found
        </h1>
        <p className='mt-6 text-base leading-7 text-softly-300'>
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
    </main>
  );
}

