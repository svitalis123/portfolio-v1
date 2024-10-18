import React from 'react'
import {motion} from 'framer-motion'
import { MenuIcon } from 'lucide-react'

const Header = () => {
  return (
    <div className='bg-[#201d1b] text-[#ecc7bc]'>
       {/* Navigation */}
       <nav className="p-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold text-[#ecc7bc]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className='no-underline hover:no-underline'>
             Vitalis
            </a>
            
          </motion.h1>
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MenuIcon className="text-primary" />
          </motion.div>
          <motion.ul 
            className="hidden md:flex space-x-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
            <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </motion.ul>
        </nav>
    </div>
  )
}

export default Header
