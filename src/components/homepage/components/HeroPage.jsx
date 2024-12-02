import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Briefcase, Book, ChevronRight, ChevronLeft, Users, Music, Cloud } from 'lucide-react';

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const images = [
    "/shared/vitalis4.webp",
    "/shared/vitalis3.webp",
    // Add more image paths as needed
  ];

  const sections = [
    {
      title: "Software Engineer",
      description: "Building robust, scalable applications with React, Astro, and Next.js",
      icon: <Code className="w-8 h-8" />,
      skills: ["React", "Astro", "Next.js", "TypeScript"]
    },
    // {
    //   title: "Freelancer",
    //   description: "Delivering high-impact solutions for clients worldwide",
    //   icon: <Briefcase className="w-8 h-8" />,
    //   skills: ["UI/UX", "Performance", "SEO", "Analytics"]
    // },
    {
      title: "AWS Community Builder",
      description: "Active member of the AWS community, sharing knowledge and best practices",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["AWS Services", "Cloud Architecture", "Community Events", "Technical Talks"]
    },
    {
      title: "Sound & Media Enthusiast",
      description: "Bridging technology with creative sound design and media production",
      icon: <Music className="w-8 h-8" />,
      skills: ["Audio Production", "Media Integration", "Creative Tech", "Sound Design"]
    },
    {
      title: "Educator",
      description: "Sharing knowledge and empowering the next generation of developers",
      icon: <Book className="w-8 h-8" />,
      skills: ["Workshops", "Mentoring", "Technical Writing", "Code Reviews"]
    }
  ];

  useEffect(() => {
    if (!isHovering) {
      const sectionInterval = setInterval(() => {
        setActiveSection((prev) => (prev + 1) % sections.length);
      }, 5000);

      const imageInterval = setInterval(() => {
        setActiveImage((prev) => (prev + 1) % images.length);
      }, 7000);

      return () => {
        clearInterval(sectionInterval);
        clearInterval(imageInterval);
      };
    }
  }, [isHovering]);

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Creating Digital
              <span className="text-[#e34b3a]"> Excellence</span>
            </motion.h1>

            {/* Rotating Sections */}
            <div className="relative h-48">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  className="absolute w-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {sections[activeSection].icon}
                    <h2 className="text-2xl font-semibold">{sections[activeSection].title}</h2>
                  </div>
                  <p className="text-lg mb-4">{sections[activeSection].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {sections[activeSection].skills.map((skill) => (
                      <span 
                        key={skill}
                        className="bg-[#e34b3a] bg-opacity-10 text-[#e34b3a] px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-2">
              {sections.map((_, index) => (
                <motion.div
                  key={index}
                  className={`h-1 rounded-full ${index === activeSection ? 'w-8 bg-[#e34b3a]' : 'w-4 bg-gray-600'}`}
                  animate={{ opacity: index === activeSection ? 1 : 0.5 }}
                />
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="https://wa.me/+254726721982"
                className="bg-[#e34b3a] text-white px-6 py-3 rounded-full flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Connect With Me <ChevronRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#projects"
                className="border border-[#e34b3a] text-[#e34b3a] px-6 py-3 rounded-full flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects <ChevronRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={images[activeImage]}
                alt="Profile"
                className="w-full h-[500px] lg:h-[800px] object-cover rounded-2xl shadow-neumorphic-dark"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
            
            {/* Navigation Controls */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <motion.button
                className="p-2 bg-white bg-opacity-10 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveSection((prev) => (prev - 1 + sections.length) % sections.length)}
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="p-2 bg-white bg-opacity-10 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveSection((prev) => (prev + 1) % sections.length)}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;