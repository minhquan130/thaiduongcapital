import React, { useState } from 'react';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const [language, setLanguage] = useState('EN');
  const [isOpen, setIsOpen] = useState(false);
  const languages = ['EN', 'VI'];

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="relative group">
      <button onClick={toggleMenu} className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 text-sm">
        <Globe className="h-4 w-4" />
        <span>{language}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false); // Đóng menu khi chọn ngôn ngữ
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;