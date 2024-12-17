import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const [language, setLanguage] = useState('EN');
  const languages = ['EN', 'VI', 'FR', 'DE'];

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 text-sm">
        <Globe className="h-4 w-4" />
        <span>{language}</span>
      </button>
      <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg hidden group-hover:block z-50">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;