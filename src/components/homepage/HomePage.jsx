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
      title: "Project Alpha", 
      description: "A cutting-edge web application for data visualization", 
      technologies: ["React", "D3.js", "Node.js"],
      type: "web"
    },
    { 
      id: 2, 
      title: "App Beta", 
      description: "Mobile app for health and fitness tracking", 
      technologies: ["React Native", "Firebase", "TensorFlow"],
      type: "app"
    },
    { 
      id: 3, 
      title: "Design Gamma", 
      description: "UI/UX design for a sustainable energy platform", 
      technologies: ["Figma", "Adobe XD", "Sketch"],
      type: "design"
    },
    // Add more projects as needed
  ];
  
  const blogPosts = [
    { id: 1, title: "Blog Post 1", excerpt: "Excerpt 1" },
    { id: 2, title: "Blog Post 2", excerpt: "Excerpt 2" },
    { id: 3, title: "Blog Post 3", excerpt: "Excerpt 3" },
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