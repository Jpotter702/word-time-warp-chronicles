
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface TimelineItemData {
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

interface TimelineItemProps {
  data: TimelineItemData;
  index: number;
  isLeft: boolean;
}

export const TimelineItem = ({ data, index, isLeft }: TimelineItemProps) => {
  const { year, definition, literaryExample, culturalContext } = data;

  return (
    <div className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-4 border-slate-900 z-10 animate-pulse"></div>
      
      {/* Content card */}
      <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
        <Card className="bg-white/10 backdrop-blur-md border-purple-300/20 hover:border-purple-300/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between mb-2">
              <CardTitle className="text-xl font-bold text-purple-100 group-hover:text-white transition-colors">
                {year}
              </CardTitle>
              <span className="text-sm text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
                {culturalContext}
              </span>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            {/* Dictionary definition */}
            <div className="bg-white/5 rounded-lg p-4 border border-purple-300/10">
              <h4 className="text-sm font-semibold text-purple-300 mb-2 uppercase tracking-wide">
                Dictionary Definition
              </h4>
              <p className="text-white/90 leading-relaxed">
                {definition}
              </p>
            </div>
            
            {/* Literary example */}
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg p-4 border border-pink-300/10">
              <h4 className="text-sm font-semibold text-pink-300 mb-2 uppercase tracking-wide">
                Literary Example
              </h4>
              <blockquote className="text-white/90 italic mb-3 border-l-2 border-pink-400/50 pl-3">
                {literaryExample.quote}
              </blockquote>
              <div className="flex flex-col gap-1 text-sm">
                <p className="text-pink-200">
                  <span className="font-medium">{literaryExample.work}</span> by {literaryExample.author}
                </p>
                <p className="text-purple-200 text-xs">
                  Usage: {literaryExample.usage}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
