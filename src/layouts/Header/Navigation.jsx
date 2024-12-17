import React from 'react';

const Navigation = () => {
  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Our firm', href: '#' },
    { name: 'Products & Service', href: '#' },
    { name: 'News & Article', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact us', href: '#' }
  ];

  return (
    <nav className="hidden md:flex space-x-3">
      {menuItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;