import React, { useState } from 'react';
import { MenuIcon, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#201d1b]  text-[#ecc7bc] relative">
      {/* Navigation */}
      <nav className="p-4 flex w-[98%] mx-auto justify-between items-center">
        <h1 className="text-2xl font-bold text-[#ecc7bc]">
          <a href="/" className="no-underline hover:no-underline">
            Vitalis
          </a>
        </h1>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="text-[#ecc7bc] h-6 w-6" />
            ) : (
              <MenuIcon className="text-[#ecc7bc] h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
          <li><a href="/#projects" className="hover:text-primary transition-colors">Projects</a></li>
          <li><a href="/#blog" className="hover:text-primary transition-colors">Blog</a></li>
          {/* <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li> */}
        </ul>
      </nav>

      {/* Mobile Menu - Now 1/3 width */}
      <div 
        className={`fixed top-0 left-0 h-full w-1/3 bg-[#201d1b] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden`}
        style={{
          zIndex: 50
        }}
      >
        <div className="p-4">
          <ul className="space-y-4">
            <li>
              <a 
                href="#about" 
                className="block text-[#ecc7bc] hover:text-[#fff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className="block text-[#ecc7bc] hover:text-[#fff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#blog" 
                className="block text-[#ecc7bc] hover:text-[#fff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block text-[#ecc7bc] hover:text-[#fff] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          style={{
            zIndex: 40
          }}
        />
      )}
    </div>
  );
};

export default Header;