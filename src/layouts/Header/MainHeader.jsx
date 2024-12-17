import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import Logoimage from "../../assets/images/logo.jpg";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={Logoimage} alt="" />
            <span className="hidden ml-2 text-xl font-bold text-gray-800">
              Thái Dương Capital
            </span>
          </div>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && <MobileMenu />}
    </div>
  );
};

export default MainHeader;
