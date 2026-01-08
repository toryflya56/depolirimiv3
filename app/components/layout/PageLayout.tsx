import React from 'react';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className='bg-deep-900 text-white min-h-screen flex flex-col'>
      <main className='flex-grow'>{children}</main>
    </div>
  );
};
