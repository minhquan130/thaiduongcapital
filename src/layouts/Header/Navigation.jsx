import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Our firm", href: "/about" },
    { name: "Products & Service", href: "/products" },
    { name: "News & Article", href: "/news" },
    { name: "Careers", href: "/careers" },
    { name: "Contact us", href: "/contact" },
  ];

  const getLinkClass = (href) => {
    return location.pathname === href
      ? 'text-white bg-[#f99d20]'
      : 'text-gray-600 hover:text-white hover:bg-[#f99d20]';
  };

  return (
    <nav className="hidden md:flex space-x-3 ">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={`px-2 py-1 rounded-md text-base font-medium transition-colors ${getLinkClass(item.href)}`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
