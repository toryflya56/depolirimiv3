import React from 'react';
import { Barber } from '@/models/common';

interface BarberCardProps {
  barber: Barber;
}

export const BarberCard: React.FC<BarberCardProps> = ({ barber }) => {
  return (
    <div className="bg-deep-950 border border-white/10 rounded-lg text-center overflow-hidden group">
      <div className="relative h-64 w-full overflow-hidden">
        <img 
          src={barber.imageUrl} 
          alt={`Photo of ${barber.name}`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-white">{barber.name}</h3>
        <p className="text-cyber font-medium text-sm">{barber.specialty}</p>
      </div>
    </div>
  );
};

// Skeleton component for loading state
export const BarberCardSkeleton: React.FC = () => {
  return (
    <div className="bg-deep-950 border border-white/10 rounded-lg text-center overflow-hidden animate-pulse">
      <div className="h-64 w-full bg-gray-700"></div>
      <div className="p-6">
        <div className="h-6 w-3/4 bg-gray-600 rounded mx-auto mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-600 rounded mx-auto"></div>
      </div>
    </div>
  );
}
