import { e as createComponent, r as renderTemplate, k as renderComponent, n as renderSlot, l as renderHead, g as addAttribute, h as createAstro } from './astro/server_BOClSVLC.mjs';
import 'piccolore';
/* empty css                         */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useState } from 'react';
import { X, MenuIcon, MessageCircle, Phone, Linkedin } from 'lucide-react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-[#201d1b]  text-[#ecc7bc] relative", children: [
    /* @__PURE__ */ jsxs("nav", { className: "p-4 flex w-[98%] mx-auto justify-between items-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-[#ecc7bc]", children: /* @__PURE__ */ jsx("a", { href: "/", className: "no-underline hover:no-underline", children: "Vitalis" }) }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: toggleMenu,
          className: "focus:outline-none",
          children: isMenuOpen ? /* @__PURE__ */ jsx(X, { className: "text-[#ecc7bc] h-6 w-6" }) : /* @__PURE__ */ jsx(MenuIcon, { className: "text-[#ecc7bc] h-6 w-6" })
        }
      ) }),
      /* @__PURE__ */ jsxs("ul", { className: "hidden md:flex space-x-6", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#projects", className: "hover:text-[#fff] transition-colors", children: "Projects" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/blogs", className: "hover:text-[#fff] transition-colors", children: "Blogs" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `fixed top-0 left-0 h-full w-1/3 bg-[#201d1b] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`,
        style: {
          zIndex: 50
        },
        children: /* @__PURE__ */ jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "#projects",
              className: "block text-[#ecc7bc] hover:text-[#fff] transition-colors",
              onClick: () => setIsMenuOpen(false),
              children: "Projects"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/blogs",
              className: "block text-[#ecc7bc] hover:text-[#fff] transition-colors",
              onClick: () => setIsMenuOpen(false),
              children: "Blog"
            }
          ) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              className: "block text-[#ecc7bc] hover:text-[#fff] transition-colors",
              onClick: () => setIsMenuOpen(false),
              children: "Contact"
            }
          ) })
        ] }) })
      }
    ),
    isMenuOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 md:hidden",
        onClick: () => setIsMenuOpen(false),
        style: {
          zIndex: 40
        }
      }
    )
  ] });
};

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(Cross2Icon, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const ContactBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    message: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
    setFormData({ fullName: "", subject: "", message: "" });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contacts = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/+254726721982",
      color: "green"
    },
    {
      icon: Phone,
      label: "Call",
      href: "tel:+254726721982",
      color: "blue"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vitalismutwiri/",
      color: "blue"
    }
    // {
    //   icon: Mail,
    //   label: 'Email',
    //   action: () => setIsModalOpen(true),
    //   color: 'red'
    // }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "fixed  right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 ", children: contacts.map((contact, index) => /* @__PURE__ */ jsxs("div", { className: "relative group flex", children: [
      contact.action ? /* @__PURE__ */ jsx(
        "button",
        {
          onClick: contact.action,
          className: "p-3 bg-stone-900 text-stone-200 rounded-full transition-all duration-300 hover:scale-110 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
          children: /* @__PURE__ */ jsx(contact.icon, { size: 24 })
        }
      ) : /* @__PURE__ */ jsx(
        "a",
        {
          href: contact.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "p-3 bg-stone-900 text-stone-200 relative rounded-full w-fulltransition-all duration-300 hover:scale-110 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
          children: /* @__PURE__ */ jsx(contact.icon, { size: 24 })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 bg-stone-900 text-stone-200 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap", children: contact.label })
    ] }, index)) }),
    /* @__PURE__ */ jsx(Dialog, { open: isModalOpen, onOpenChange: setIsModalOpen, children: /* @__PURE__ */ jsxs(DialogContent, { className: "bg-stone-900 text-stone-200 border-red-600", children: [
      /* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { className: "text-2xl font-bold text-red-600", children: "Contact Me" }) }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "fullName", className: "text-stone-200", children: "Full Name" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "fullName",
              name: "fullName",
              value: formData.fullName,
              onChange: handleChange,
              className: "bg-stone-800 border-stone-700 text-stone-200 focus:border-red-600",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "subject", className: "text-stone-200", children: "Subject" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "subject",
              name: "subject",
              value: formData.subject,
              onChange: handleChange,
              className: "bg-stone-800 border-stone-700 text-stone-200 focus:border-red-600",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "message", className: "text-stone-200", children: "Message" }),
          /* @__PURE__ */ jsx(
            Textarea,
            {
              id: "message",
              name: "message",
              value: formData.message,
              onChange: handleChange,
              className: "bg-stone-800 border-stone-700 text-stone-200 focus:border-red-600 min-h-[100px]",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            className: "w-full bg-red-600 hover:bg-red-700 text-white transition-colors",
            children: "Send Message"
          }
        )
      ] })
    ] }) })
  ] });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const author = "Vitalis Mutwiri";
  const description = "I am Vitalis A frontend developer Throughout my career, I've had the privilege of contributing to diverse projects, each offering a unique challenge and opportunity for growth. This experience has allowed me to sharpen my skills and collaborate with a network of intelligent and driven professionals. Here's a brief overview";
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="article"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Canonical URL --><link rel="canonical"', '><!-- Additional SEO tags --><meta name="author"', '><!-- <meta name="date" content={date} /> --><meta name="keywords" content="software engineer developer front-end developer full-stack developer"><title>', "</title>", '</head> <body> <!-- Cooking Preloader --> <div id="preloader" class="preloader"> <div class="kitchen"> <!-- Pot --> <div class="pot-wrap"> <div class="steam-container"> <div class="steam steam-1"></div> <div class="steam steam-2"></div> <div class="steam steam-3"></div> </div> <div class="pot"> <div class="pot-body"> <div class="bubble bubble-1"></div> <div class="bubble bubble-2"></div> <div class="bubble bubble-3"></div> <div class="bubble bubble-4"></div> </div> <div class="pot-handle-left"></div> <div class="pot-handle-right"></div> </div> <div class="spoon"></div> <div class="flame-container"> <div class="flame flame-1"></div> <div class="flame flame-2"></div> <div class="flame flame-3"></div> </div> </div> <p class="loader-text">Cooking up something special<span class="dots"></span></p> </div> </div> ', " ", " ", "  <script>\n	window.addEventListener('load', function() {\n		var preloader = document.getElementById('preloader');\n		if (preloader) {\n			setTimeout(function() {\n				preloader.classList.add('hidden');\n			}, 1800);\n			setTimeout(function() {\n				preloader.style.display = 'none';\n			}, 2500);\n		}\n	});\n<\/script></body></html>"])), title, addAttribute(description, "content"), addAttribute(`https://yourdomain.com`, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute("https://pbs.twimg.com/profile_images/1577206532160176128/qz_G5k4Z_400x400.jpg", "content"), addAttribute(`https://x.com/WilsonVitalis`, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute("https://pbs.twimg.com/profile_images/1577206532160176128/qz_G5k4Z_400x400.jpg", "content"), addAttribute(`https://yourdomain.com`, "href"), addAttribute(author, "content"), title, renderHead(), renderComponent($$result, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/shared/Header", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "ContactBar", ContactBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/shared/ContactBar", "client:component-export": "default" }));
}, "/Users/slu/Public/code folders/personal_code/portfolio-v1/src/layouts/Layout.astro", void 0);

export { $$Layout as $, Button as B, Dialog as D, Input as I, Label as L, Textarea as T, DialogTrigger as a, DialogContent as b, cn as c, DialogHeader as d, DialogTitle as e, DialogDescription as f };
