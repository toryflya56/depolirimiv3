import type React from 'react';
import { type Service } from '@/models/common';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { name, description, price, duration } = service;

  return (
    <div className='bg-deep-900 border border-white/10 rounded-xl p-6 text-left transition-all duration-300 hover:border-cyber hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyber/10'>
      <div className='flex justify-between items-start mb-4'>
        <h3 className='text-2xl font-serif font-semibold text-white pr-4'>{name}</h3>
        <p className='text-xl font-semibold text-cyber whitespace-nowrap'>${price}</p>
      </div>
      <p className='text-gray-400 mb-5 h-12'>{description}</p>
      <p className='text-sm text-gray-500 uppercase tracking-widest'>{duration} mins</p>
    </div>
  );
};

// Skeleton component for loading state
export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className='bg-deep-900 border border-white/10 rounded-xl p-6 text-left animate-pulse'>
      <div className='flex justify-between items-start mb-4'>
        <div className='h-7 w-3/5 bg-gray-700 rounded' />
        <div className='h-7 w-1/4 bg-gray-700 rounded' />
      </div>
      <div className='h-12 w-full bg-gray-700 rounded mb-5' />
      <div className='h-5 w-1/3 bg-gray-700 rounded' />
    </div>
  );
};
