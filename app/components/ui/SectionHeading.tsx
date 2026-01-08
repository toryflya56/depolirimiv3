import React from 'react';

interface SectionHeadingProps {
    title: string;
    subtitle: string;
    align?: 'left' | 'center';
    isAlternativeColor?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, align = 'center', isAlternativeColor = false }) => {
  const titleColor = isAlternativeColor ? 'text-gray-800 dark:text-white' : 'text-white';
  const subtitleColor = isAlternativeColor ? 'text-gray-600 dark:text-gray-300' : 'text-gray-400';

  return (
    <div className={`max-w-3xl mx-auto ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-4xl font-bold font-serif tracking-tight ${titleColor}`}>{title}</h2>
      <p className={`mt-4 text-lg ${subtitleColor}`}>{subtitle}</p>
    </div>
  );
};
