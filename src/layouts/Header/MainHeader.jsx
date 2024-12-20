import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import Logoimage from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-1">
          {/* Logo */}
          <div className={`flex-shrink-0 flex items-center`}>
            <Link 
            to={''}
            className=" w-[566.92913386px] h-[70.299212598px]"
            style={{backgroundImage: `url('${Logoimage}')`, backgroundPosition: '-10px -704px', backgroundSize: 'cover'}}
            >
              {/* <img src={Logoimage} alt="logo"/> */}
              <span className="hidden ml-2 text-xl font-bold text-gray-800">
                Thái Dương Capital
              </span>
            </Link>
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
      {isMenuOpen && <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}
    </div>
  );
};

export default MainHeader;
