import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { c as createComponent, r as renderTemplate, a as addAttribute, e as renderHead, d as renderComponent, b as createAstro, f as renderSlot } from './astro/server_BUCmH-lO.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                         */
import { motion, AnimatePresence } from 'framer-motion';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { MenuIcon } from 'lucide-react';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Header = () => {
  return /* @__PURE__ */ jsx("div", { className: "bg-[#201d1b] text-[#ecc7bc]", children: /* @__PURE__ */ jsxs("nav", { className: "p-4 flex justify-between items-center", children: [
    /* @__PURE__ */ jsx(
      motion.h1,
      {
        className: "text-2xl font-bold text-[#ecc7bc]",
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: "Your Name"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "md:hidden",
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.5, delay: 0.2 },
        children: /* @__PURE__ */ jsx(MenuIcon, { className: "text-primary" })
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.ul,
      {
        className: "hidden md:flex space-x-6",
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.2 },
        children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#about", className: "hover:text-primary transition-colors", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#projects", className: "hover:text-primary transition-colors", children: "Projects" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#blog", className: "hover:text-primary transition-colors", children: "Blog" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#contact", className: "hover:text-primary transition-colors", children: "Contact" }) })
        ]
      }
    )
  ] }) });
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const author = "Vitalis Mutwiri";
  const description = "I am Vitalis A frontend developer Throughout my career, I've had the privilege of contributing to diverse projects, each offering a unique challenge and opportunity for growth. This experience has allowed me to sharpen my skills and collaborate with a network of intelligent and driven professionals. Here's a brief overview";
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="article"><meta property="og:url"${addAttribute(`https://yourdomain.com`, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute("https://pbs.twimg.com/profile_images/1577206532160176128/qz_G5k4Z_400x400.jpg", "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(`https://x.com/WilsonVitalis`, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute("https://pbs.twimg.com/profile_images/1577206532160176128/qz_G5k4Z_400x400.jpg", "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(`https://yourdomain.com`, "href")}><!-- Additional SEO tags --><meta name="author"${addAttribute(author, "content")}><!-- <meta name="date" content={date} /> --><meta name="keywords" content="software engineer developer front-end developer full-stack developer"><title>${title}</title>${renderHead()}</head> ${renderComponent($$result, "AnimatePresence", AnimatePresence, { "mode": "wait" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/shared/Header", "client:component-export": "default" })} ${renderSlot($$result2, $$slots["default"])} ` })} </html>`;
}, "/media/vitalis/E06C86256C85F696/Users/Public/Desktop/projects/portfolio/my-neumorphic-portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $, cn as c };
