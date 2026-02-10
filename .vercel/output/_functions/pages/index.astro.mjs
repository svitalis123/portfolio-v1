/* empty css                                 */
import { e as createComponent, r as renderTemplate, k as renderComponent, h as createAstro, m as maybeRenderHead } from '../chunks/astro/server_BOClSVLC.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_D9Lz5knS.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { useMotionValue, useTransform, motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowDown } from 'lucide-react';
import { C as Card, c as CardHeader, a as CardContent, d as CardFooter, A as Avatar, b as AvatarFallback } from '../chunks/card_B8_tVTiK.mjs';
import { MongoClient } from 'mongodb';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const roles = [
  "Software Engineer",
  "AWS Community Builder",
  "Sound & Media Enthusiast",
  "Educator"
];
const HeroSection = () => {
  const [activeRole, setActiveRole] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const images = [
    "/shared/vitalis4.webp",
    "/shared/vitalis3.webp"
  ];
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 3e3);
    const imageInterval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 6e3);
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
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };
  const letterReveal = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }
    })
  };
  const nameTop = "VITALIS";
  const nameBottom = "MUTWIRI";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      onMouseMove: handleMouseMove,
      className: "relative min-h-screen bg-[#201d1b] text-[#ecc7bc] overflow-hidden flex items-center",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 pointer-events-none", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-[10%] w-px h-full bg-[#ecc7bc] opacity-[0.04]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-[30%] w-px h-full bg-[#ecc7bc] opacity-[0.04]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-[50%] w-px h-full bg-[#ecc7bc] opacity-[0.04]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-[70%] w-px h-full bg-[#ecc7bc] opacity-[0.04]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-[90%] w-px h-full bg-[#ecc7bc] opacity-[0.04]" })
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none",
            style: {
              background: "radial-gradient(circle, #e34b3a 0%, transparent 70%)",
              x: floatingX,
              y: floatingY,
              top: "20%",
              right: "15%"
            }
          }
        ),
        [...Array(6)].map((_, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute w-1 h-1 rounded-full bg-[#e34b3a]",
            style: {
              top: `${15 + i * 14}%`,
              left: `${5 + i * 16}%`
            },
            animate: {
              y: [0, -15, 0],
              opacity: [0.3, 0.7, 0.3]
            },
            transition: {
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4
            }
          },
          i
        )),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 lg:px-12 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-screen py-20", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "lg:col-span-6 xl:col-span-5 space-y-8 relative z-20",
              variants: stagger,
              initial: "hidden",
              animate: "visible",
              children: [
                /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-px bg-[#e34b3a]" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm tracking-[0.3em] uppercase text-[#e34b3a] font-medium", children: "Portfolio 2025" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxs(motion.h1, { className: "text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9] tracking-tight", children: [
                  /* @__PURE__ */ jsx("span", { className: "block overflow-hidden", children: nameTop.split("").map((char, i) => /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      custom: i,
                      variants: letterReveal,
                      initial: "hidden",
                      animate: "visible",
                      className: "inline-block",
                      children: char
                    },
                    `top-${i}`
                  )) }),
                  /* @__PURE__ */ jsx("span", { className: "block overflow-hidden", children: nameBottom.split("").map((char, i) => /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      custom: i + nameTop.length,
                      variants: letterReveal,
                      initial: "hidden",
                      animate: "visible",
                      className: "inline-block",
                      style: {
                        WebkitTextStroke: "1.5px #ecc7bc",
                        color: "transparent"
                      },
                      children: char
                    },
                    `bot-${i}`
                  )) })
                ] }) }),
                /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className: "h-10 relative overflow-hidden", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "absolute flex items-center gap-3",
                    initial: { y: 30, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    exit: { y: -30, opacity: 0 },
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-[#e34b3a] text-xl font-mono", children: "//" }),
                      /* @__PURE__ */ jsx("span", { className: "text-lg lg:text-xl font-light tracking-wide", children: roles[activeRole] })
                    ]
                  },
                  activeRole
                ) }) }),
                /* @__PURE__ */ jsx(motion.div, { variants: fadeUp, className: "flex gap-2", children: roles.map((_, i) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setActiveRole(i),
                    className: "group flex items-center",
                    children: /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: `h-[2px] rounded-full transition-all duration-500 ${i === activeRole ? "w-8 bg-[#e34b3a]" : "w-3 bg-[#ecc7bc] opacity-30 group-hover:opacity-60"}`
                      }
                    )
                  },
                  i
                )) }),
                /* @__PURE__ */ jsx(
                  motion.p,
                  {
                    variants: fadeUp,
                    className: "text-base lg:text-lg leading-relaxed opacity-70 max-w-md",
                    children: "Building robust, scalable applications and empowering the next generation of developers across Africa and beyond."
                  }
                ),
                /* @__PURE__ */ jsxs(motion.div, { variants: fadeUp, className: "flex flex-wrap gap-4 pt-2", children: [
                  /* @__PURE__ */ jsxs(
                    motion.a,
                    {
                      href: "https://wa.me/+254726721982",
                      className: "group relative bg-[#e34b3a] text-white px-7 py-3.5 rounded-full flex items-center gap-2 font-medium overflow-hidden",
                      whileHover: { scale: 1.03 },
                      whileTap: { scale: 0.97 },
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Connect With Me" }),
                        /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" }),
                        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.a,
                    {
                      href: "#projects",
                      className: "group border border-[#ecc7bc] border-opacity-30 text-[#ecc7bc] px-7 py-3.5 rounded-full flex items-center gap-2 font-medium hover:border-[#e34b3a] hover:text-[#e34b3a] transition-colors duration-300",
                      whileHover: { scale: 1.03 },
                      whileTap: { scale: 0.97 },
                      children: [
                        "View Projects",
                        /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "lg:col-span-6 xl:col-span-7 relative",
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
              children: /* @__PURE__ */ jsxs("div", { className: "relative mx-auto lg:ml-auto", style: { maxWidth: "580px" }, children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute -top-4 -right-4 w-full h-full border border-[#e34b3a] opacity-30 rounded-[2rem]",
                    style: { x: floatingX, y: floatingY }
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "relative rounded-[2rem] overflow-hidden aspect-[3/4]", children: [
                  /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
                    motion.img,
                    {
                      src: images[activeImage],
                      alt: "Vitalis Mutwiri",
                      className: "w-full h-full object-cover",
                      initial: { opacity: 0, scale: 1.1 },
                      animate: { opacity: 1, scale: 1 },
                      exit: { opacity: 0, scale: 1.05 },
                      transition: { duration: 0.8, ease: "easeInOut" }
                    },
                    activeImage
                  ) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#201d1b] via-transparent to-transparent opacity-60" }),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "absolute bottom-6 left-6 backdrop-blur-md bg-[#201d1b]/60 border border-[#ecc7bc]/10 rounded-xl px-4 py-3",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 1.2, duration: 0.6 },
                      children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-400 animate-pulse" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-[#ecc7bc] font-medium", children: "Available for projects" })
                      ] })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "flex gap-6 mt-6 justify-center lg:justify-start",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 1.4, duration: 0.6 },
                    children: [
                      { value: "4+", label: "Years Exp." },
                      { value: "20+", label: "Projects" },
                      { value: "13+", label: "Clients" }
                    ].map((stat, i) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-[#e34b3a]", children: stat.value }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-wider opacity-50 mt-1", children: stat.label })
                    ] }, i))
                  }
                )
              ] })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 2 },
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs tracking-[0.2em] uppercase opacity-40", children: "Scroll" }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, 8, 0] },
                  transition: { duration: 1.5, repeat: Infinity },
                  children: /* @__PURE__ */ jsx(ArrowDown, { className: "w-4 h-4 opacity-40" })
                }
              )
            ]
          }
        )
      ]
    }
  );
};

const Whiteboard = () => /* @__PURE__ */ jsxs(
  motion.svg,
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 120",
    className: "w-32 h-40 opacity-20",
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.5 },
    children: [
      /* @__PURE__ */ jsx("rect", { x: "10", y: "10", width: "80", height: "60", fill: "#492c49", stroke: "#ecc7bc", strokeWidth: "2" }),
      /* @__PURE__ */ jsx("line", { x1: "50", y1: "70", x2: "40", y2: "110", stroke: "#ecc7bc", strokeWidth: "2" }),
      /* @__PURE__ */ jsx("line", { x1: "50", y1: "70", x2: "60", y2: "110", stroke: "#ecc7bc", strokeWidth: "2" }),
      /* @__PURE__ */ jsx("line", { x1: "30", y1: "110", x2: "70", y2: "110", stroke: "#ecc7bc", strokeWidth: "2" })
    ]
  }
);
const KanbanBoard = () => /* @__PURE__ */ jsxs(
  motion.svg,
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 120 80",
    className: "w-40 h-28 opacity-20",
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.5 },
    children: [
      /* @__PURE__ */ jsx("rect", { x: "0", y: "0", width: "120", height: "80", fill: "#492c49", stroke: "#ecc7bc", strokeWidth: "2" }),
      /* @__PURE__ */ jsx("line", { x1: "40", y1: "0", x2: "40", y2: "80", stroke: "#ecc7bc", strokeWidth: "2" }),
      /* @__PURE__ */ jsx("line", { x1: "80", y1: "0", x2: "80", y2: "80", stroke: "#ecc7bc", strokeWidth: "2" }),
      /* @__PURE__ */ jsx("rect", { x: "5", y: "5", width: "30", height: "10", fill: "#e34b3a", stroke: "#ecc7bc", strokeWidth: "1" }),
      /* @__PURE__ */ jsx("rect", { x: "45", y: "5", width: "30", height: "10", fill: "#e34b3a", stroke: "#ecc7bc", strokeWidth: "1" }),
      /* @__PURE__ */ jsx("rect", { x: "85", y: "5", width: "30", height: "10", fill: "#e34b3a", stroke: "#ecc7bc", strokeWidth: "1" })
    ]
  }
);
const TriangularRuler = () => /* @__PURE__ */ jsxs(
  motion.svg,
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 87",
    className: "w-24 h-20 opacity-20",
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 0.2, x: 0 },
    exit: { opacity: 0, x: 50 },
    transition: { duration: 0.5 },
    children: [
      /* @__PURE__ */ jsx("polygon", { points: "0,87 100,87 50,0", fill: "#492c49", stroke: "#ecc7bc", strokeWidth: "2" }),
      /* @__PURE__ */ jsx("line", { x1: "10", y1: "77", x2: "90", y2: "77", stroke: "#ecc7bc", strokeWidth: "1" }),
      /* @__PURE__ */ jsx("line", { x1: "20", y1: "67", x2: "80", y2: "67", stroke: "#ecc7bc", strokeWidth: "1" }),
      /* @__PURE__ */ jsx("line", { x1: "30", y1: "57", x2: "70", y2: "57", stroke: "#ecc7bc", strokeWidth: "1" })
    ]
  }
);
const ProjectSection = ({ project }) => {
  return /* @__PURE__ */ jsx("main", { className: "panel w-screen h-screen p-8", id: "projects", children: /* @__PURE__ */ jsxs("section", { className: "min-h-screen w-screen flex flex-col justify-center items-center p-8 relative", children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute hidden md:block left-10 top-20 z-0",
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
        transition: { duration: 0.5 },
        children: /* @__PURE__ */ jsx(Whiteboard, {})
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute hidden md:block right-10 top-10 z-0",
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
        transition: { duration: 0.5 },
        children: /* @__PURE__ */ jsx(TriangularRuler, {})
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "absolute hidden md:block right-20 bottom-40 z-0",
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
        transition: { duration: 0.5 },
        children: /* @__PURE__ */ jsx(KanbanBoard, {})
      }
    ),
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-[#e34b3a] mb-4", children: project.type.toUpperCase() }),
    /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-6 text-[#e34b3a]", children: project.title }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.p,
      {
        className: "text-xl mb-8 max-w-2xl text-center",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
        transition: { duration: 0.5 },
        children: project.description
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: project.technologies.map((tech, index) => /* @__PURE__ */ jsx(
      motion.span,
      {
        className: "bg-[#492c49] text-[#ecc7bc] px-4 py-2 rounded-full",
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.8 },
        transition: { duration: 0.3, delay: index * 0.1 },
        children: tech
      },
      index
    )) }),
    /* @__PURE__ */ jsxs(
      motion.a,
      {
        href: project.link,
        className: "neumorphic-button flex items-center px-6 py-3 rounded-full text-[#ecc7bc] bg-[#2a2624] transition-all duration-300 ease-in-out",
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        children: [
          "Learn More",
          /* @__PURE__ */ jsx(ChevronRight, { className: "ml-2" })
        ]
      }
    )
  ] }) });
};
const FeaturedProjects = ({ projects }) => {
  return /* @__PURE__ */ jsxs("section", { className: "flex !w-[100vw] bg-[#201d1b] text-[#ecc7bc] overflow-hidden", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold absolute top-8 left-8 z-10", children: "Featured Projects" }),
    /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(motion.div, { className: "flex h-full", children: [
      /* @__PURE__ */ jsx("style", { jsx: true, global: true, children: `
            .neumorphic-button {
              box-shadow: 5px 5px 10px #161412, -5px -5px 10px #2a2624;
            }
            .neumorphic-button:hover {
              box-shadow: inset 5px 5px 10px #161412,
                inset -5px -5px 10px #2a2624;
            }
          ` }),
      projects.map((project) => /* @__PURE__ */ jsx(ProjectSection, { project }, project.id))
    ] }) }) })
  ] });
};

const SkillsProject = ({ skills }) => {
  return /* @__PURE__ */ jsx("div", { className: " h-full max-w-[1330px] mx-auto", children: /* @__PURE__ */ jsxs("section", { className: "min-h-screen py-16 px-8", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-8", children: "Skills & Technologies" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-8", children: skills.map((skill, index) => /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "flex items-center justify-center h-32 bg-[#492c49] rounded-xl shadow-neumorphic-dark",
        whileHover: { scale: 1.1, rotate: 5 },
        whileTap: { scale: 0.9 },
        initial: { opacity: 0, scale: 0.5 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: index * 0.1 },
        children: /* @__PURE__ */ jsx("span", { className: "text-xl font-semibold text-[#ecc7bc]", children: skill })
      },
      index
    )) })
  ] }) });
};

const client = new MongoClient("mongodb+srv://slu:clCFKVSqqzbGBdhx@blogcluster.xdgyh.mongodb.net/?retryWrites=true&w=majority&appName=BlogCluster");
const db = client.db("blogDatabase");
const collection = db.collection("posts");
const blogPosts = await collection.find({}).sort({ "createdAt": -1 }).toArray();
const getInitials = (name) => {
  return name.split(" ").map((word) => word[0]).join("").toUpperCase();
};
const BlogPost = ({ blog }) => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      whileHover: { scale: 1.05, y: -5 },
      transition: { type: "spring", stiffness: 300 },
      children: /* @__PURE__ */ jsx("a", { href: `/blogs/${blog._id}`, className: "no-underline hover:no-underline", children: /* @__PURE__ */ jsxs(Card, { className: "bg-[#2c2824] border-gray-700 cursor-pointer h-full flex flex-col", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "p-0", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: blog.content.match(/src="([^"]+)"/)[1],
            alt: "",
            className: "w-full h-48 object-cover rounded-t-lg"
          }
        ) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "p-4 flex-grow", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2 text-gray-100", children: blog.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: blog.excerpt })
        ] }),
        /* @__PURE__ */ jsx(CardFooter, { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center w-full", children: [
          /* @__PURE__ */ jsx(Avatar, { className: "h-8 w-8 mr-2 bg-[#3d3731] text-[#000]", children: /* @__PURE__ */ jsx(AvatarFallback, { children: getInitials(blog.author) }) }),
          /* @__PURE__ */ jsx(TypewriterText, { text: blog.author })
        ] }) })
      ] }) })
    }
  );
};
const TypewriterText = ({ text }) => {
  return /* @__PURE__ */ jsx(
    motion.span,
    {
      className: "text-sm text-gray-300 inline-block",
      initial: { width: 0 },
      whileInView: { width: "auto" },
      viewport: { once: true },
      children: text.split("").map((char, index) => /* @__PURE__ */ jsx(
        motion.span,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: index * 0.1 },
          children: char
        },
        index
      ))
    }
  );
};
const BlogPosts = () => {
  return /* @__PURE__ */ jsxs("div", { id: "blog", className: "bg-[#201d1b] max-w-[1330px] mx-auto text-gray-100 p-4 sm:p-6 md:p-8", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-bold mb-2", children: "Blogs" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 sm:mb-8", children: "Discover insightful resources and expert advice from me." }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: blogPosts.slice(0, 3).map((blog) => /* @__PURE__ */ jsx(BlogPost, { blog })) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center my-4", children: /* @__PURE__ */ jsxs(
      motion.a,
      {
        href: "/blogs",
        className: "neumorphic-button max-w-[200px]  flex items-center px-6 py-3 rounded-full text-[#ecc7bc] bg-[#2a2624] transition-all duration-300 ease-in-out",
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        children: [
          "All Blogs",
          /* @__PURE__ */ jsx(ChevronRight, { className: "ml-2" })
        ]
      }
    ) })
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = [
    {
      id: 1,
      title: "Yellow Stroke",
      description: "A global hub of collaborators bringing together diverse world experts \u2014 coaches, industry veterans, master facilitators \u2014 who tailor their expertise to your specific needs. Facilitating growth and empowering individuals through mentoring and training sessions.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "shadcn/ui"],
      type: "web",
      link: "https://yellowstroke.com/"
    },
    {
      id: 2,
      title: "The Bridge Program",
      description: "A 2-month online career launch program for university students and recent graduates designed to bridge the gap between in-class learning and the skills required to thrive in the 21st century through mindset shift, execution skills, and career launch.",
      technologies: ["Astro", "Tailwind CSS", "HubSpot"],
      type: "web",
      link: "https://www.thebridgeprogram.co/"
    },
    {
      id: 3,
      title: "Techihub",
      description: "A digital tech community connecting top talent with leading companies across Africa and beyond to create innovative solutions for the world.",
      technologies: ["Next.js", "React", "Tailwind CSS", "AWS"],
      type: "web",
      link: "https://www.techihub.io/"
    },
    {
      id: 4,
      title: "Ravora Systems",
      description: "Enterprise IT hardware and bulk procurement solutions platform providing organizations with reliable IT equipment, competitive pricing, and flexible quote-based ordering for businesses of all sizes.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Stripe"],
      type: "web",
      link: "https://www.ravorasystems.com/ke"
    },
    {
      id: 5,
      title: "SISCOM Africa",
      description: "A digital infrastructure investment platform enabling users to own a stake in Kenya's $3.5B cloud, data, and AI opportunity through scalable infrastructure assets that earn rent and lease income.",
      technologies: ["Django", "Python", "Chart.js", "Cloudflare"],
      type: "web",
      link: "https://siscom.africa/"
    },
    {
      id: 6,
      title: "Impact Africa",
      description: "Innovation fellowship platform offering programs to recent college graduates, guiding them in developing vetted ideas and building fundamentally sound early-stage startups with a meaningful chance of attracting growth capital for scaling.",
      technologies: ["Bootstrap", "JavaScript", "Swiper", "Axios"],
      type: "web",
      link: "https://impactafrica.network/"
    },
    {
      id: 7,
      title: "Bank of Creators",
      description: "An all-in-one platform for music creators to manage royalties, global distribution, business payments, sync partnerships, and funding. Helping artists manage their money like pros so they can focus on creating, not chasing checks.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "shadcn/ui"],
      type: "web",
      link: "https://cosmic-pie-bd6b86.netlify.app/"
    }
  ];
  const skills = ["React", "Node.js", "Python", "AWS", "GraphQL", "TypeScript", "TanStack Query", "Google Cloud", "Python", "Data science", "Project management", "Agile Methodologies", "Idea Prototyping", "Project Research", "Idea Validation"];
  return renderTemplate(_a || (_a = __template(["", '  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"><\/script> <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"><\/script> <script>\n	gsap.registerPlugin(ScrollTrigger);\n\n	let sections = gsap.utils.toArray(".panel");\n\n	gsap.to(sections, {\n		xPercent: -100 * (sections.length - 1),\n		ease: "none",\n		scrollTrigger: {\n			trigger: ".my_container",\n			pin: true,\n			scrub: 1,\n			snap: 1 / (sections.length - 1),\n			end: () => "+=" + document.querySelector(".my_container").offsetWidth\n		}\n	});\n\n\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Vitalis", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class=" bg-[#201d1b] w-full overflow-hidden text-[#ecc7bc]" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> ${renderComponent($$result2, "HeroPage", HeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/homepage/components/HeroPage", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> <div class="my_container " data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FeaturedProjects", FeaturedProjects, { "client:load": true, "projects": projects, "client:component-hydration": "load", "client:component-path": "@/components/homepage/components/FeaturedProjects", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> <div data-astro-cid-j7pv25f6> ${renderComponent($$result2, "BlogPosts", BlogPosts, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/homepage/components/BlogPosts", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> <div data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SkillsProject", SkillsProject, { "skills": skills, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/homepage/components/SkillsProject", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> </main> ` }));
}, "/Users/slu/Public/code folders/personal_code/portfolio-v1/src/pages/index.astro", void 0);

const $$file = "/Users/slu/Public/code folders/personal_code/portfolio-v1/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
