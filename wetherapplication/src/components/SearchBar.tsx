// src/components/SearchBar.tsx
'use client'; // For Next.js 13+ App Router, if using client-side features

import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onGetLocation: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onGetLocation }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="flex-grow p-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Search
      </button>
      <button
        type="button"
        onClick={onGetLocation}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        My Location
      </button>
    </form>
  );
};

export default SearchBar;