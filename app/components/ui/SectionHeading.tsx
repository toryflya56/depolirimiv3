import React from 'react';

interface SectionHeadingProps {
    title: string;
    subtitle: string;
    align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`max-w-3xl mx-auto ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white font-serif tracking-tight">{title}</h2>
      <p className="mt-4 text-lg text-gray-400">{subtitle}</p>
    </div>
  );
};
