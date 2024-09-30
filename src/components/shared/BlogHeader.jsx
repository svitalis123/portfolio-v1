import React from 'react';
import { Github, Linkedin, X } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#201d1b] text-white p-4 md:p-6 shadow-md">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <a href='/' className="text-2xl no-underline hover:no-underline md:text-3xl font-bold mb-4 md:mb-0">Vitalis</a>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="https://github.com/svitalis123" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-6 h-6 hover:text-gray-300 transition-colors" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vitalismutwiri/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 hover:text-gray-300 transition-colors" />
              </a>
            </li>
            <li>
              <a href="https://x.com/WilsonVitalis" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <X className="w-6 h-6 hover:text-gray-300 transition-colors" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;