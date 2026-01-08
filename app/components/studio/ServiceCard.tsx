import React from 'react';
import { Service } from '@/models/common';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { name, description, price, duration } = service;

  return (
    <div className="bg-deep-950 border border-white/10 rounded-lg p-6 text-left transition-all duration-300 hover:border-cyber hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-serif font-semibold text-white pr-4">{name}</h3>
        <p className="text-lg font-semibold text-cyber whitespace-nowrap">${price}</p>
      </div>
      <p className="text-gray-400 text-sm mb-4 h-10">{description}</p>
      <p className="text-xs text-gray-500 uppercase tracking-wider">{duration} mins</p>
    </div>
  );
};

// Skeleton component for loading state
export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="bg-deep-950 border border-white/10 rounded-lg p-6 text-left animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="h-6 w-3/5 bg-gray-700 rounded"></div>
        <div className="h-6 w-1/4 bg-gray-700 rounded"></div>
      </div>
      <div className="h-10 w-full bg-gray-700 rounded mb-4"></div>
      <div className="h-4 w-1/3 bg-gray-700 rounded"></div>
    </div>
  );
}
