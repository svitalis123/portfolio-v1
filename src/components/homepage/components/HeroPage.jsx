import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon } from 'lucide-react';
const carouselItems = [
  {
    tagline: "Welcome to My Portfolio",
    description: "I'm a full-stack developer passionate about creating impactful web experiences.",
    image: "/shared/vitalis1.webp"
  },
  {
    tagline: "Innovative Solutions",
    description: "Explore my projects showcasing creative problem-solving and cutting-edge technologies.",
    image: "/shared/vitalis2.webp"
  },
  // {
  //   tagline: "Let's Collaborate",
  //   description: "I'm always open to new opportunities and exciting projects. Get in touch!",
  //   image: "/shared/vitalis3.webp"
  // }
];
const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === carouselItems.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? carouselItems.length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Auto-advance every 5 seconds
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center flex-grow p-8">
      <AnimatePresence mode="wait">
        <motion.div 
          key={current}
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{carouselItems[current].tagline}</h2>
          <p className="text-xl mb-6">{carouselItems[current].description}</p>
          <motion.button 
            className="bg-[#e34b3a] text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.div 
          key={current}
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={carouselItems[current].image}
            alt="Vitalis" 
            className="rounded-full w-full h-[100vh] object-contain mx-auto shadow-neumorphic-dark"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const HeroPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-dark-bg text-dark-text flex flex-col">
       

        {/* Hero Content */}
        <HeroCarousel/>
      </div>
    </div>
  )
}

export default HeroPage

