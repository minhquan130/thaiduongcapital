import React from 'react';

const MobileMenu = () => {
  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;