/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BUCmH-lO.mjs';
import 'kleur/colors';
import 'html-escaper';
import { c as cn, $ as $$Layout } from '../chunks/Layout_BEXIRjAl.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

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
  }
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
  useEffect(() => {
    const interval = setInterval(nextSlide, 1e4);
    return () => clearInterval(interval);
  }, [current]);
  return /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col md:flex-row items-center justify-center flex-grow p-8", children: [
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "md:w-1/2 mb-8 md:mb-0",
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 50 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-6xl font-bold mb-4", children: carouselItems[current].tagline }),
          /* @__PURE__ */ jsx("p", { className: "text-xl mb-6", children: carouselItems[current].description }),
          /* @__PURE__ */ jsx(
            motion.button,
            {
              className: "bg-[#e34b3a] text-white px-6 py-2 rounded-full hover:bg-opacity-80 transition-colors",
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              children: "Learn More"
            }
          )
        ]
      },
      current
    ) }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "md:w-1/2",
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
        transition: { duration: 0.5 },
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: carouselItems[current].image,
            alt: "Vitalis",
            className: "rounded-full w-full h-[100vh] object-contain mx-auto shadow-neumorphic-dark"
          }
        )
      },
      current
    ) })
  ] });
};
const HeroPage = () => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-dark-bg text-dark-text flex flex-col", children: /* @__PURE__ */ jsx(HeroCarousel, {}) }) });
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
  return /* @__PURE__ */ jsx("main", { className: "panel w-screen h-screen p-8 ", children: /* @__PURE__ */ jsxs("section", { className: "min-h-screen w-screen flex flex-col justify-center items-center p-8 relative", children: [
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
      motion.button,
      {
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

const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn("font-semibold leading-none tracking-tight", className),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";

const Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const getInitials = (name) => {
  return name.split(" ").map((word) => word[0]).join("").toUpperCase();
};
const BlogPost = ({ post }) => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      whileHover: { scale: 1.05, y: -5 },
      transition: { type: "spring", stiffness: 300 },
      children: /* @__PURE__ */ jsxs(Card, { className: "bg-[#2c2824] border-gray-700 cursor-pointer h-full flex flex-col", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "p-0", children: /* @__PURE__ */ jsx("img", { src: post.image, alt: "", className: "w-full h-48 object-cover rounded-t-lg" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "p-4 flex-grow", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-2 text-gray-100", children: post.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: post.description })
        ] }),
        /* @__PURE__ */ jsx(CardFooter, { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center w-full", children: [
          /* @__PURE__ */ jsx(Avatar, { className: "h-8 w-8 mr-2 bg-[#3d3731] text-gray-100", children: /* @__PURE__ */ jsx(AvatarFallback, { children: getInitials(post.author) }) }),
          /* @__PURE__ */ jsx(TypewriterText, { text: post.author })
        ] }) })
      ] })
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
const BlogPosts = ({ blogPosts }) => {
  return /* @__PURE__ */ jsxs("div", { className: "bg-[#201d1b] max-w-[1330px] mx-auto text-gray-100 p-4 sm:p-6 md:p-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-bold mb-2", children: "Blogs" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 sm:mb-8", children: "Discover insightful resources and expert advice from me." }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: blogPosts.map((post) => /* @__PURE__ */ jsx(BlogPost, { post }, post.id)) })
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
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
    }
  ];
  const blogPosts = [
    {
      id: 1,
      title: "Changelog for 2024",
      description: "Explore the latest updates and enhancements in our 2024 changelog. Discover new features and improve...",
      author: "Vitalis Mutwiri",
      image: "https://pro.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1696429175928-793a1cdef1d3%3Fq%3D80%26w%3D3000%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=828&q=75"
    },
    {
      id: 2,
      title: "Understanding React Hooks",
      description: "A comprehensive guide to understanding and using React Hooks in your projects.",
      author: "Vitalis Mutwiri",
      image: "https://pro.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1560958089-b8a1929cea89%3Fq%3D80%26w%3D3542%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=828&q=75"
    },
    {
      id: 3,
      title: "CSS Grid Layout",
      description: "Learn how to create complex layouts easily with CSS Grid.",
      author: "Vitalis Mutwiri",
      image: "https://pro.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1535223289827-42f1e9919769%3Fq%3D80%26w%3D3212%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=828&q=75"
    }
  ];
  const skills = ["React", "Node.js", "Python", "AWS", "GraphQL", "TypeScript"];
  return renderTemplate(_a || (_a = __template(["", '  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"><\/script> <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"><\/script> <script>\n	gsap.registerPlugin(ScrollTrigger);\n\n	let sections = gsap.utils.toArray(".panel");\n\n	gsap.to(sections, {\n		xPercent: -100 * (sections.length - 1),\n		ease: "none",\n		scrollTrigger: {\n			trigger: ".my_container",\n			pin: true,\n			scrub: 1,\n			snap: 1 / (sections.length - 1),\n			end: () => "+=" + document.querySelector(".my_container").offsetWidth\n		}\n	});\n\n\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Vitalis", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class=" bg-[#201d1b] w-full overflow-hidden text-[#ecc7bc]" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> ${renderComponent($$result2, "HeroPage", HeroPage, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/homepage/components/HeroPage", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> <div class="my_container " data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FeaturedProjects", FeaturedProjects, { "client:load": true, "projects": projects, "client:component-hydration": "load", "client:component-path": "@/components/homepage/components/FeaturedProjects", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> <div data-astro-cid-j7pv25f6> ${renderComponent($$result2, "BlogPosts", BlogPosts, { "blogPosts": blogPosts, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/homepage/components/BlogPosts", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> <div data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SkillsProject", SkillsProject, { "skills": skills, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/homepage/components/SkillsProject", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} </div> </main> ` }));
}, "/media/vitalis/E06C86256C85F696/Users/Public/Desktop/projects/portfolio/my-neumorphic-portfolio/src/pages/index.astro", void 0);

const $$file = "/media/vitalis/E06C86256C85F696/Users/Public/Desktop/projects/portfolio/my-neumorphic-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
