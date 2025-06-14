
import React from 'react';

export const Header = () => {
  return (
    <header className="text-center py-12 animate-fade-in">
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
        Wordscape
      </h1>
      <p className="text-xl md:text-2xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
        Journey through time to discover how words evolve across centuries, 
        from dictionary definitions to literary masterpieces
      </p>
    </header>
  );
};
