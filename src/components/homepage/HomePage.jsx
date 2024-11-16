import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Card } from "@/components/ui/card";

const HomePage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const projects = [
    { 
      id: 1, 
      title: "Roots Africa PLatform", 
      description: "Comprehensive platform for seamless, end-to-end experience for users, from planning investments to managing properties, all within a single system.", 
      technologies: ["Nextjs", "AWS", "Python", "Zustand"],
      type: "web",
      link: "https://app.rootsafrica.co/"
    },
    { 
      id: 2, 
      title: "Techihub", 
      description: "Techihub is a digital tech community connecting top talent with leading companies across Africa and beyond to be at the frontier of creating innovative solutions for the world.", 
      technologies: ["React Native", "Firebase", "TensorFlow"],
      type: "web",
      link: "https://www.techihub.io"
    },
    { 
      id: 3, 
      title: "Ai Google Drive Clone", 
      description: "An AI-powered Google Drive clone offering advanced image management through Cloudinary, including restoration, enhancement, cropping, and filters for square, landscape, and portrait orientations. Users can upload images from local devices or online platforms, save copies, create collages, and enjoy real-time updates for seamless interactions within the app.", 
      technologies: ["Nextjs", "Tanstack query", "Cloudinary", "Next Cloudinary"],
      type: "web",
      link: "https://cloud-drive-psi.vercel.app/"
    },
    // Add more projects as needed
  ];
  

  const skills = ["React", "Node.js", "Python", "AWS", "GraphQL", "TypeScript"];

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll overflow-x-hidden bg-[#201d1b] text-[#ecc7bc]">
    

      {/* Latest Blog Posts (Vertical Scroll with Parallax) */}
      <motion.section className="min-h-screen py-16 px-8 relative">
        <motion.h2 
          className="text-4xl font-bold mb-8"
          style={{ y: smoothY }}
        >
          Latest Blog Posts
        </motion.h2>
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="bg-[#492c49] text-[#ecc7bc] p-6 rounded-xl shadow-neumorphic-dark">
              <h3 className="text-2xl font-semibold mb-4">{post.title}</h3>
              <p>{post.excerpt}</p>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* Skills/Technologies (Interactive Grid) */}
     
    </div>
  );
};

export default HomePage;