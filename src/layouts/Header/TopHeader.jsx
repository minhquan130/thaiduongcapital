import React from 'react';
import LanguageSelector from './LanguageSelector';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';

const TopHeader = () => {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-10 space-x-6">
          <SearchBar />
          <LanguageSelector />
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;