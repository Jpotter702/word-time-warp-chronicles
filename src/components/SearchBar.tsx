
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (word: string) => void;
  isLoading: boolean;
}

export const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-16 animate-fade-in">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative group">
          <Input
            type="text"
            placeholder="Enter a word to explore its evolution..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="h-16 text-lg pl-6 pr-32 bg-white/10 backdrop-blur-md border-purple-300/30 text-white placeholder-purple-200/70 focus:border-purple-400 focus:ring-purple-400/20 rounded-2xl shadow-2xl transition-all duration-300 group-hover:shadow-purple-500/20"
            disabled={isLoading}
          />
          <Button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="absolute right-2 top-2 h-12 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 border-0 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-50"
          >
            <Search className="w-5 h-5 mr-2" />
            {isLoading ? 'Exploring...' : 'Explore'}
          </Button>
        </div>
      </form>
      
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {['love', 'technology', 'freedom', 'justice', 'beauty'].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => {
              setInputValue(suggestion);
              onSearch(suggestion);
            }}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-purple-300/20 hover:border-purple-300/40 rounded-full text-purple-200 hover:text-white transition-all duration-300 text-sm hover:scale-105"
            disabled={isLoading}
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};
