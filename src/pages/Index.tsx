
import React, { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { Timeline } from '@/components/Timeline';
import { Header } from '@/components/Header';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [timelineData, setTimelineData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (word: string) => {
    setIsLoading(true);
    setSearchQuery(word);
    
    // Simulate API call with mock data
    setTimeout(() => {
      const mockData = generateMockTimelineData(word);
      setTimelineData(mockData);
      setIsLoading(false);
    }, 1500);
  };

  const generateMockTimelineData = (word: string) => {
    const decades = [1800, 1820, 1840, 1860, 1880, 1900, 1920, 1940, 1960, 1980, 2000, 2020];
    
    return decades.map((year, index) => ({
      year,
      definition: `Definition of "${word}" from ${year}: ${getDefinitionForYear(word, year, index)}`,
      literaryExample: {
        work: getLiteraryWork(year),
        author: getAuthor(year),
        quote: `"${getQuote(word, year)}"`,
        usage: getUsageNote(word, year, index)
      },
      culturalContext: getCulturalContext(year)
    }));
  };

  const getDefinitionForYear = (word: string, year: number, index: number) => {
    const definitions = [
      `A term of great significance in formal discourse`,
      `Commonly used in literary and academic contexts`,
      `Evolving meaning within social circles`,
      `Adopted by emerging cultural movements`,
      `Standardized in educational institutions`,
      `Popularized through mass media`,
      `Influenced by technological advancement`,
      `Redefined by social movements`,
      `Expanded through global communication`,
      `Adapted to digital communication`,
      `Influenced by social media usage`,
      `Contemporary usage in modern contexts`
    ];
    return definitions[index] || `Contemporary definition of ${word}`;
  };

  const getLiteraryWork = (year: number) => {
    const works = {
      1800: "Pride and Prejudice",
      1820: "Ivanhoe",
      1840: "The Old Curiosity Shop",
      1860: "Great Expectations",
      1880: "The Portrait of a Lady",
      1900: "Sister Carrie",
      1920: "The Great Gatsby",
      1940: "For Whom the Bell Tolls",
      1960: "To Kill a Mockingbird",
      1980: "The Color Purple",
      2000: "The Corrections",
      2020: "Hamnet"
    };
    return works[year] || "Notable Work";
  };

  const getAuthor = (year: number) => {
    const authors = {
      1800: "Jane Austen",
      1820: "Walter Scott",
      1840: "Charles Dickens",
      1860: "Charles Dickens",
      1880: "Henry James",
      1900: "Theodore Dreiser",
      1920: "F. Scott Fitzgerald",
      1940: "Ernest Hemingway",
      1960: "Harper Lee",
      1980: "Alice Walker",
      2000: "Jonathan Franzen",
      2020: "Maggie O'Farrell"
    };
    return authors[year] || "Notable Author";
  };

  const getQuote = (word: string, year: number) => {
    return `The ${word} held such profound meaning in that era of ${year}`;
  };

  const getUsageNote = (word: string, year: number, index: number) => {
    const notes = [
      "Formal and ceremonial usage",
      "Literary and poetic contexts",
      "Emerging colloquial usage",
      "Victorian moral implications",
      "Industrial age connotations",
      "Early modern interpretations",
      "Jazz age cultural shift",
      "War-time practical usage",
      "Post-war social evolution",
      "Counter-culture influence",
      "Digital age transformation",
      "Contemporary global usage"
    ];
    return notes[index] || "Modern usage";
  };

  const getCulturalContext = (year: number) => {
    const contexts = {
      1800: "Napoleonic Wars era",
      1820: "Romantic period",
      1840: "Industrial Revolution",
      1860: "Civil War period",
      1880: "Gilded Age",
      1900: "Turn of the century",
      1920: "Roaring Twenties",
      1940: "World War II",
      1960: "Civil Rights Movement",
      1980: "Computer Revolution",
      2000: "Internet Age",
      2020: "Social Media Era"
    };
    return contexts[year] || "Historical period";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        {timelineData && (
          <Timeline 
            data={timelineData} 
            searchQuery={searchQuery}
            isLoading={isLoading}
          />
        )}
      </main>
    </div>
  );
};

export default Index;
