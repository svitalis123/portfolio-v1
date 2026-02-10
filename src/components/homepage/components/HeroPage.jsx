import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';

const roles = [
  "Software Engineer",
  "AWS Community Builder",
  "Sound & Media Enthusiast",
  "Educator",
];

const HeroSection = () => {
  const [activeRole, setActiveRole] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const images = [
    "/shared/vitalis4.webp",
    "/shared/vitalis3.webp",
  ];

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    const imageInterval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => {
      clearInterval(roleInterval);
      clearInterval(imageInterval);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set((e.clientX - rect.left - rect.width / 2) / 40);
      mouseY.set((e.clientY - rect.top - rect.height / 2) / 40);
    }
  };

  const floatingX = useTransform(mouseX, (v) => v * 0.5);
  const floatingY = useTransform(mouseY, (v) => v * 0.5);

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const letterReveal = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const nameTop = "VITALIS";
  const nameBottom = "MUTWIRI";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#201d1b] text-[#ecc7bc] overflow-hidden flex items-center"
    >
      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[10%] w-px h-full bg-[#ecc7bc] opacity-[0.04]" />
        <div className="absolute top-0 left-[30%] w-px h-full bg-[#ecc7bc] opacity-[0.04]" />
        <div className="absolute top-0 left-[50%] w-px h-full bg-[#ecc7bc] opacity-[0.04]" />
        <div className="absolute top-0 left-[70%] w-px h-full bg-[#ecc7bc] opacity-[0.04]" />
        <div className="absolute top-0 left-[90%] w-px h-full bg-[#ecc7bc] opacity-[0.04]" />
      </div>

      {/* Accent glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #e34b3a 0%, transparent 70%)",
          x: floatingX,
          y: floatingY,
          top: "20%",
          right: "15%",
        }}
      />

      {/* Floating accent dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#e34b3a]"
          style={{
            top: `${15 + i * 14}%`,
            left: `${5 + i * 16}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        />
      ))}

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20">

          {/* Left: Typography & Content */}
          <motion.div
            className="lg:col-span-6 xl:col-span-5 space-y-8 relative z-20"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Small intro line */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <div className="w-12 h-px bg-[#e34b3a]" />
              <span className="text-sm tracking-[0.3em] uppercase text-[#e34b3a] font-medium">
                Portfolio 2025
              </span>
            </motion.div>

            {/* Large Name */}
            <div className="overflow-hidden">
              <motion.h1 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9] tracking-tight">
                <span className="block overflow-hidden">
                  {nameTop.split("").map((char, i) => (
                    <motion.span
                      key={`top-${i}`}
                      custom={i}
                      variants={letterReveal}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
                <span className="block overflow-hidden">
                  {nameBottom.split("").map((char, i) => (
                    <motion.span
                      key={`bot-${i}`}
                      custom={i + nameTop.length}
                      variants={letterReveal}
                      initial="hidden"
                      animate="visible"
                      className="inline-block"
                      style={{
                        WebkitTextStroke: "1.5px #ecc7bc",
                        color: "transparent",
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>
            </div>

            {/* Animated Role */}
            <motion.div variants={fadeUp} className="h-10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeRole}
                  className="absolute flex items-center gap-3"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-[#e34b3a] text-xl font-mono">//</span>
                  <span className="text-lg lg:text-xl font-light tracking-wide">
                    {roles[activeRole]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Role indicators */}
            <motion.div variants={fadeUp} className="flex gap-2">
              {roles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveRole(i)}
                  className="group flex items-center"
                >
                  <div
                    className={`h-[2px] rounded-full transition-all duration-500 ${
                      i === activeRole
                        ? "w-8 bg-[#e34b3a]"
                        : "w-3 bg-[#ecc7bc] opacity-30 group-hover:opacity-60"
                    }`}
                  />
                </button>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-base lg:text-lg leading-relaxed opacity-70 max-w-md"
            >
              Building robust, scalable applications and empowering
              the next generation of developers across Africa and beyond.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <motion.a
                href="https://wa.me/+254726721982"
                className="group relative bg-[#e34b3a] text-white px-7 py-3.5 rounded-full flex items-center gap-2 font-medium overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Connect With Me</span>
                <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </motion.a>
              <motion.a
                href="#projects"
                className="group border border-[#ecc7bc] border-opacity-30 text-[#ecc7bc] px-7 py-3.5 rounded-full flex items-center gap-2 font-medium hover:border-[#e34b3a] hover:text-[#e34b3a] transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Creative Image */}
          <motion.div
            className="lg:col-span-6 xl:col-span-7 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image frame with creative shape */}
            <div className="relative mx-auto lg:ml-auto" style={{ maxWidth: "580px" }}>
              {/* Decorative frame offset */}
              <motion.div
                className="absolute -top-4 -right-4 w-full h-full border border-[#e34b3a] opacity-30 rounded-[2rem]"
                style={{ x: floatingX, y: floatingY }}
              />

              {/* Main image */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={images[activeImage]}
                    alt="Vitalis Mutwiri"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </AnimatePresence>

                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#201d1b] via-transparent to-transparent opacity-60" />

                {/* Floating badge on image */}
                <motion.div
                  className="absolute bottom-6 left-6 backdrop-blur-md bg-[#201d1b]/60 border border-[#ecc7bc]/10 rounded-xl px-4 py-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-[#ecc7bc] font-medium">
                      Available for projects
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Stats strip */}
              <motion.div
                className="flex gap-6 mt-6 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
              >
                {[
                  { value: "4+", label: "Years Exp." },
                  { value: "20+", label: "Projects" },
                  { value: "13+", label: "Clients" },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold text-[#e34b3a]">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider opacity-50 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-xs tracking-[0.2em] uppercase opacity-40">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 opacity-40" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
