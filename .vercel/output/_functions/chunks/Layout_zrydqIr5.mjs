import { g as addAttribute, h as renderHead, i as renderComponent, s as renderSlot, u as renderTemplate, w as createAstro } from "./server_DKvTTH34.mjs";
import { t as createComponent } from "./compiler_CXH3bZoW.mjs";
import { t as $$ClientRouter } from "./_astro_transitions_CiJu3ZJd.mjs";
import { a as DialogTitle, c as Button, i as DialogHeader, l as Label, n as DialogContent, s as Input, t as Dialog, u as cn } from "./dialog_CrDbWmc7.mjs";
import * as React$1 from "react";
import { useState } from "react";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
import { Linkedin, MenuIcon, MessageCircle, Phone, X } from "lucide-react";
//#region src/components/ui/textarea.tsx
var Textarea = React$1.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
//#endregion
//#region src/components/shared/Header.jsx
var Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-[#201d1b]  text-[#ecc7bc] relative",
		children: [
			/* @__PURE__ */ jsxs("nav", {
				className: "p-4 flex w-[98%] mx-auto justify-between items-center",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-bold text-[#ecc7bc]",
						children: /* @__PURE__ */ jsx("a", {
							href: "/",
							className: "no-underline hover:no-underline",
							children: "Vitalis"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "md:hidden",
						children: /* @__PURE__ */ jsx("button", {
							onClick: toggleMenu,
							className: "focus:outline-none",
							children: isMenuOpen ? /* @__PURE__ */ jsx(X, { className: "text-[#ecc7bc] h-6 w-6" }) : /* @__PURE__ */ jsx(MenuIcon, { className: "text-[#ecc7bc] h-6 w-6" })
						})
					}),
					/* @__PURE__ */ jsxs("ul", {
						className: "hidden md:flex space-x-6",
						children: [/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "/#projects",
							className: "hover:text-[#fff] transition-colors",
							children: "Projects"
						}) }), /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "/blogs",
							className: "hover:text-[#fff] transition-colors",
							children: "Blogs"
						}) })]
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: `fixed top-0 left-0 h-full w-1/3 bg-[#201d1b] transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`,
				style: { zIndex: 50 },
				children: /* @__PURE__ */ jsx("div", {
					className: "p-4",
					children: /* @__PURE__ */ jsxs("ul", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "#projects",
								className: "block text-[#ecc7bc] hover:text-[#fff] transition-colors",
								onClick: () => setIsMenuOpen(false),
								children: "Projects"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "/blogs",
								className: "block text-[#ecc7bc] hover:text-[#fff] transition-colors",
								onClick: () => setIsMenuOpen(false),
								children: "Blog"
							}) }),
							/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
								href: "#contact",
								className: "block text-[#ecc7bc] hover:text-[#fff] transition-colors",
								onClick: () => setIsMenuOpen(false),
								children: "Contact"
							}) })
						]
					})
				})
			}),
			isMenuOpen && /* @__PURE__ */ jsx("div", {
				className: "fixed inset-0 bg-black bg-opacity-50 md:hidden",
				onClick: () => setIsMenuOpen(false),
				style: { zIndex: 40 }
			})
		]
	});
};
//#endregion
//#region src/components/shared/ContactBar.jsx
var ContactBar = () => {
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
		setFormData({
			fullName: "",
			subject: "",
			message: ""
		});
	};
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
		className: "fixed  right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50 ",
		children: [
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
		].map((contact, index) => /* @__PURE__ */ jsxs("div", {
			className: "relative group flex",
			children: [contact.action ? /* @__PURE__ */ jsx("button", {
				onClick: contact.action,
				className: "p-3 bg-stone-900 text-stone-200 rounded-full transition-all duration-300 hover:scale-110 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
				children: /* @__PURE__ */ jsx(contact.icon, { size: 24 })
			}) : /* @__PURE__ */ jsx("a", {
				href: contact.href,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "p-3 bg-stone-900 text-stone-200 relative rounded-full w-fulltransition-all duration-300 hover:scale-110 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
				children: /* @__PURE__ */ jsx(contact.icon, { size: 24 })
			}), /* @__PURE__ */ jsx("div", {
				className: "absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 bg-stone-900 text-stone-200 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
				children: contact.label
			})]
		}, index))
	}), /* @__PURE__ */ jsx(Dialog, {
		open: isModalOpen,
		onOpenChange: setIsModalOpen,
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "bg-stone-900 text-stone-200 border-red-600",
			children: [/* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, {
				className: "text-2xl font-bold text-red-600",
				children: "Contact Me"
			}) }), /* @__PURE__ */ jsxs("form", {
				onSubmit: handleSubmit,
				className: "space-y-6",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "fullName",
							className: "text-stone-200",
							children: "Full Name"
						}), /* @__PURE__ */ jsx(Input, {
							id: "fullName",
							name: "fullName",
							value: formData.fullName,
							onChange: handleChange,
							className: "bg-stone-800 border-stone-700 text-stone-200 focus:border-red-600",
							required: true
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "subject",
							className: "text-stone-200",
							children: "Subject"
						}), /* @__PURE__ */ jsx(Input, {
							id: "subject",
							name: "subject",
							value: formData.subject,
							onChange: handleChange,
							className: "bg-stone-800 border-stone-700 text-stone-200 focus:border-red-600",
							required: true
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx(Label, {
							htmlFor: "message",
							className: "text-stone-200",
							children: "Message"
						}), /* @__PURE__ */ jsx(Textarea, {
							id: "message",
							name: "message",
							value: formData.message,
							onChange: handleChange,
							className: "bg-stone-800 border-stone-700 text-stone-200 focus:border-red-600 min-h-[100px]",
							required: true
						})]
					}),
					/* @__PURE__ */ jsx(Button, {
						type: "submit",
						className: "w-full bg-red-600 hover:bg-red-700 text-white transition-colors",
						children: "Send Message"
					})
				]
			})]
		})
	})] });
};
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title } = Astro.props;
	const author = "Vitalis Mutwiri";
	const description = "I am Vitalis A frontend developer Throughout my career, I've had the privilege of contributing to diverse projects, each offering a unique challenge and opportunity for growth. This experience has allowed me to sharpen my skills and collaborate with a network of intelligent and driven professionals. Here's a brief overview";
	return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/jpeg" href="/favicon.jpg"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(`https://yourdomain.com`, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute("https://pbs.twimg.com/profile_images/1577206532160176128/qz_G5k4Z_400x400.jpg", "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(`https://x.com/WilsonVitalis`, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute("https://pbs.twimg.com/profile_images/1577206532160176128/qz_G5k4Z_400x400.jpg", "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(`https://yourdomain.com`, "href")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<!-- Additional SEO tags --><meta name="author"${addAttribute(author, "content")}><meta name="keywords" content="software engineer developer front-end developer full-stack developer">${renderHead($$result)}</head><body><!-- Cooking Preloader --><div id="preloader" class="preloader"><div class="kitchen"><!-- Pot --><div class="pot-wrap"><div class="steam-container"><div class="steam steam-1"></div><div class="steam steam-2"></div><div class="steam steam-3"></div></div><div class="pot"><div class="pot-body"><div class="bubble bubble-1"></div><div class="bubble bubble-2"></div><div class="bubble bubble-3"></div><div class="bubble bubble-4"></div></div><div class="pot-handle-left"></div><div class="pot-handle-right"></div></div><div class="spoon"></div><div class="flame-container"><div class="flame flame-1"></div><div class="flame flame-2"></div><div class="flame flame-3"></div></div></div><p class="loader-text">Cooking up something special<span class="dots"></span></p></div></div>${renderComponent($$result, "Header", Header, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/components/shared/Header",
		"client:component-export": "default"
	})}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "ContactBar", ContactBar, {
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/components/shared/ContactBar",
		"client:component-export": "default"
	})}</body></html><script>
	window.addEventListener('load', function() {
		var preloader = document.getElementById('preloader');
		if (preloader) {
			setTimeout(function() {
				preloader.classList.add('hidden');
			}, 1800);
			setTimeout(function() {
				preloader.style.display = 'none';
			}, 2500);
		}
	});
<\/script>`;
}, "/Users/slu/Public/code folders/personal_code/portfolio-v1/src/layouts/Layout.astro", void 0);
//#endregion
export { Textarea as n, $$Layout as t };
