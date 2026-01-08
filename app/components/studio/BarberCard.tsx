import React from 'react';
import { Barber } from '@/models/common';

interface BarberCardProps {
  barber: Barber;
}

export const BarberCard: React.FC<BarberCardProps> = ({ barber }) => {
  return (
    <div className="relative h-96 w-full rounded-lg overflow-hidden group border border-white/10">
      <img 
        src={barber.imageUrl} 
        alt={`Photo of ${barber.name}`}
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="transition-opacity duration-300 group-hover:opacity-0">
            <h3 className="text-2xl font-serif font-semibold">{barber.name}</h3>
            <p className="text-cyber font-medium">{barber.specialty}</p>
        </div>

        <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-2xl font-serif font-semibold mb-2">{barber.name}</h3>
            <p className="text-sm text-white/80 line-clamp-4">{barber.bio}</p>
        </div>
      </div>
    </div>
  );
};

// Skeleton component for loading state
export const BarberCardSkeleton: React.FC = () => {
  return (
    <div className="relative h-96 w-full rounded-lg bg-deep-950 border border-white/10 overflow-hidden animate-pulse">
        <div className="w-full h-full bg-gray-700"></div>
    </div>
  );
}
