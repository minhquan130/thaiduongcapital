import React from 'react';
import LanguageSelector from './LanguageSelector';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';

const TopHeader = () => {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-6">
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