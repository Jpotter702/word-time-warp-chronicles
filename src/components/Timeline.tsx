
import React from 'react';
import { TimelineItem } from '@/components/TimelineItem';

interface TimelineData {
  year: number;
  definition: string;
  literaryExample: {
    work: string;
    author: string;
    quote: string;
    usage: string;
  };
  culturalContext: string;
}

interface TimelineProps {
  data: TimelineData[];
  searchQuery: string;
  isLoading: boolean;
}

export const Timeline = ({ data, searchQuery, isLoading }: TimelineProps) => {
  if (isLoading) {
    return (
      <div className="text-center py-16">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mb-4"></div>
        <p className="text-purple-200 text-lg">Exploring the evolution of "{searchQuery}"...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          The Evolution of "{searchQuery}"
        </h2>
        <p className="text-purple-200 text-lg">
          Trace the journey of this word through {data.length} decades of history
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 via-pink-500 to-purple-400 opacity-30"></div>
        
        {/* Timeline items */}
        <div className="space-y-12">
          {data.map((item, index) => (
            <TimelineItem
              key={item.year}
              data={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
