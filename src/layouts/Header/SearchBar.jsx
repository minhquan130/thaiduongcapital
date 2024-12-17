import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-48 pl-10 pr-4 py-1 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <Search className="absolute left-3 top-1.5 h-4 w-4 text-gray-400" />
    </div>
  );
};

export default SearchBar;