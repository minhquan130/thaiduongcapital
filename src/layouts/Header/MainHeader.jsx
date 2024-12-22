import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import Logoimage from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Xử lý scroll
    const handleScroll = () => {
      // Hiện header khi scroll xuống 100px
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 40);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            // exit={{ y: -100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50"
          >
            <div className="bg-white shadow-md overflow-hidden">
              <div className="container mx-auto px-6">
                <div className="flex justify-between items-center py-1">
                  {/* Logo */}
                  <div className={`flex-shrink-0 flex items-center`}>
                    <Link
                      to={''}
                      className="w-[16.10594130284091em] h-[1.997136721534091em] md:w-[17.716535433125em] md:h-[2.1968503936875em] xl:w-[35.43307086625em] xl:h-[4.393700787375em] bg-[position:-8px_-70px] md:bg-[position:-10px_-77px] xl:bg-[position:-29px_-705px]"
                      style={{ backgroundImage: `url('${Logoimage}')`, backgroundSize: 'cover' }}
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
                  <div className="lg:hidden">
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
              {isMenuOpen && <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
            </div>
          </motion.header>
        )}
      </AnimatePresence>
      <div className="bg-white shadow-md overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-1">
            {/* Logo */}
            <div className={`flex-shrink-0 flex items-center`}>
              <Link
                to={''}
                className="w-[16.10594130284091em] h-[1.997136721534091em] md:w-[17.716535433125em] md:h-[2.1968503936875em] xl:w-[35.43307086625em] xl:h-[4.393700787375em] bg-[position:-8px_-70px] md:bg-[position:-10px_-77px] xl:bg-[position:-29px_-705px]"
                style={{ backgroundImage: `url('${Logoimage}')`, backgroundSize: 'cover' }}
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
            <div className="lg:hidden">
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
        {isMenuOpen && <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      </div>
    </>
  );
};

export default MainHeader;
