import type React from 'react';
import { Scissors } from 'lucide-react';

export const GlobalLoader: React.FC = () => {
  return (
    <div className='fixed inset-0 bg-deep-950 flex flex-col items-center justify-center z-50'>
      <div className='relative flex items-center justify-center'>
        <div className='absolute h-24 w-24 rounded-full border-t-4 border-b-4 border-cyber animate-spin' />
        <Scissors size={40} className='text-cyber animate-pulse' />
      </div>
      <p className='mt-6 text-lg font-serif text-white tracking-widest animate-pulse'>LIRIMI</p>
    </div>
  );
};
