import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { g as addAttribute, h as renderHead, i as renderComponent, u as renderTemplate, w as createAstro } from "./server_DKvTTH34.mjs";
import { t as createComponent } from "./compiler_CXH3bZoW.mjs";
import { t as $$ClientRouter } from "./_astro_transitions_CiJu3ZJd.mjs";
import { r as slugify } from "./BlogPost_BxWX-5PT.mjs";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Github, Linkedin, Terminal, X } from "lucide-react";
import { MongoClient, ObjectId } from "mongodb";
//#region src/components/editor/EditorHomepage/RenderIndividualBlog.jsx
var formatCode = (code) => {
	return code.split(";").map((line) => line.trim()).filter((line) => line.length > 0).map((line) => {
		if (line.startsWith("import ")) return `${line};`;
		if (line.includes("{") && !line.includes("}")) return `${line};`;
		const indentLevel = (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
		return `${"  ".repeat(Math.max(0, indentLevel))}${line};`;
	}).join("\n");
};
var TerminalCodeBlock = ({ code, language = "bash" }) => {
	const formattedCode = formatCode(code);
	return /* @__PURE__ */ jsxs("div", {
		className: "my-6 bg-[#2d2d2d] rounded-lg overflow-hidden shadow-lg",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "bg-[#3d3d3d] px-4 py-2 flex items-center",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex gap-2 mr-4",
				children: [
					/* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-[#ff5f56]" }),
					/* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-[#ffbd2e]" }),
					/* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-[#27c93f]" })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center text-[#ddd] text-sm",
				children: [/* @__PURE__ */ jsx(Terminal, {
					size: 14,
					className: "mr-2"
				}), /* @__PURE__ */ jsx("span", { children: "terminal" })]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "p-4 font-mono text-sm",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex items-start",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-[#6bf982] mr-2",
					children: "$"
				}), /* @__PURE__ */ jsx("pre", {
					className: "text-[#f8f8f2] overflow-x-auto whitespace-pre",
					children: /* @__PURE__ */ jsx("code", { children: formattedCode })
				})]
			})
		})]
	});
};
var parseBlogContent = (htmlContent) => {
	const doc = new DOMParser().parseFromString(htmlContent, "text/html");
	const sections = [];
	let currentSection = null;
	const isHeading = (node) => {
		return [
			"H1",
			"H2",
			"H3",
			"H4",
			"H5",
			"H6"
		].includes(node.tagName);
	};
	const isCodeBlock = (node) => {
		return node.tagName === "CODE" || node.tagName === "PRE";
	};
	const processNode = (node) => {
		if (isCodeBlock(node)) return {
			type: "code",
			content: node.textContent,
			language: node.getAttribute("data-language") || "bash"
		};
		return {
			type: "html",
			content: node.outerHTML
		};
	};
	const createSection = (title, node) => {
		if (currentSection) sections.push(currentSection);
		currentSection = {
			id: title.toLowerCase().replace(/\s+/g, "-"),
			title: title.trim(),
			content: [processNode(node)]
		};
	};
	doc.body.childNodes.forEach((node) => {
		if (node.nodeType === Node.ELEMENT_NODE) {
			if (isHeading(node)) createSection(node.textContent, node);
			else if (node.tagName === "P" && node.querySelector("strong")) {
				const strongText = node.querySelector("strong").textContent;
				createSection(strongText, node);
			} else if (currentSection) currentSection.content.push(processNode(node));
			else currentSection = {
				id: "introduction",
				title: "Introduction",
				content: [processNode(node)]
			};
		}
	});
	if (currentSection) sections.push(currentSection);
	return sections;
};
var RenderIndividualBlog = ({ blogData }) => {
	const [activeSection, setActiveSection] = useState("");
	const [scrollProgress, setScrollProgress] = useState(0);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [sections, setSections] = useState([]);
	useEffect(() => {
		setSections(parseBlogContent(blogData.content));
	}, [blogData.content]);
	useEffect(() => {
		const handleScroll = () => {
			const scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
			setScrollProgress(scrolled);
			document.querySelectorAll("section").forEach((section) => {
				const rect = section.getBoundingClientRect();
				if (rect.top >= 0 && rect.top <= window.innerHeight / 2) setActiveSection(section.id);
			});
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	const renderContent = (content) => {
		if (content.type === "code") return /* @__PURE__ */ jsx(TerminalCodeBlock, {
			code: content.content,
			language: content.language
		});
		return /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: content.content } });
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-[#201d1b] w-full text-[#fff] font-sans",
		children: [/* @__PURE__ */ jsx("div", {
			className: "fixed top-0 left-0 w-full h-1 bg-blue-500 z-40",
			style: { width: `${scrollProgress}%` }
		}), /* @__PURE__ */ jsxs("div", {
			className: "lg:flex",
			children: [/* @__PURE__ */ jsxs("nav", {
				className: `lg:w-1/4 lg:max-w-[300px] lg:fixed lg:top-20 lg:h-[calc(100vh-5rem)] p-8 bg-[#ecc7bc] shadow-md z-40 ${isMenuOpen ? "fixed inset-0" : "hidden lg:block"}`,
				children: [/* @__PURE__ */ jsx("button", {
					onClick: () => setIsMenuOpen(false),
					className: "lg:hidden absolute top-4 right-4 text-gray-700",
					children: "Close"
				}), /* @__PURE__ */ jsx("ul", {
					className: "space-y-4",
					children: sections.map((section) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: `#${section.id}`,
						className: `text-sm ${activeSection === section.id ? "text-blue-600 font-semibold" : "text-gray-900"}`,
						onClick: () => setIsMenuOpen(false),
						children: section.title
					}) }, section.id))
				})]
			}), /* @__PURE__ */ jsx("main", {
				className: "lg:w-3/4 lg:ml-auto",
				children: /* @__PURE__ */ jsx("div", {
					className: "px-4 lg:px-8 pb-16 max-w-3xl pt-16 lg:pt-8",
					children: /* @__PURE__ */ jsx("div", {
						className: "prose prose-invert max-w-none",
						children: sections.map((section) => /* @__PURE__ */ jsxs("section", {
							id: section.id,
							className: "mb-12",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "text-2xl lg:text-3xl font-semibold mb-4",
								children: section.title
							}), /* @__PURE__ */ jsx("div", {
								className: "space-y-4",
								children: section.content.map((content, index) => /* @__PURE__ */ jsx("div", { children: renderContent(content) }, index))
							})]
						}, section.id))
					})
				})
			})]
		})]
	});
};
//#endregion
//#region src/components/shared/BlogHeader.jsx
var Header = () => {
	return /* @__PURE__ */ jsx("header", {
		className: "sticky top-0 z-50 bg-[#201d1b] text-white p-4 md:p-6 shadow-md",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container mx-auto flex flex-col items-center md:flex-row md:justify-between",
			children: [/* @__PURE__ */ jsx("a", {
				href: "/",
				className: "text-2xl no-underline hover:no-underline md:text-3xl font-bold mb-4 md:mb-0",
				children: "Vitalis"
			}), /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", {
				className: "flex space-x-4",
				children: [
					/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: "https://github.com/svitalis123",
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": "GitHub",
						children: /* @__PURE__ */ jsx(Github, { className: "w-6 h-6 hover:text-gray-300 transition-colors" })
					}) }),
					/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: "https://www.linkedin.com/in/vitalismutwiri/",
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": "LinkedIn",
						children: /* @__PURE__ */ jsx(Linkedin, { className: "w-6 h-6 hover:text-gray-300 transition-colors" })
					}) }),
					/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: "https://x.com/WilsonVitalis",
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": "Twitter",
						children: /* @__PURE__ */ jsx(X, { className: "w-6 h-6 hover:text-gray-300 transition-colors" })
					}) })
				]
			}) })]
		})
	});
};
//#endregion
//#region src/pages/blogs/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Slug = createComponent(async ($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$Slug;
	const { slug } = Astro2.params;
	const client = new MongoClient("mongodb+srv://slu:clCFKVSqqzbGBdhx@blogcluster.xdgyh.mongodb.net/?retryWrites=true&w=majority&appName=BlogCluster");
	let data;
	try {
		await client.connect();
		const collection = client.db("blogDatabase").collection("posts");
		data = await collection.findOne({ slug });
		if (!data) try {
			const objectId = new ObjectId(slug);
			data = await collection.findOne({ _id: objectId });
			if (data && !data.slug) {
				const generated = slugify(data.title);
				await collection.updateOne({ _id: data._id }, { $set: { slug: generated } });
				data.slug = generated;
			}
		} catch {}
		if (!data) return Astro2.redirect("/blogs");
		data = JSON.parse(JSON.stringify(data));
	} finally {
		await client.close();
	}
	return renderTemplate`<html lang="en" class="overflow-x-hidden"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${data.seoTitle || data.title}</title><meta name="description"${addAttribute(data.seoDescription || data.excerpt, "content")}><link rel="icon" type="image/jpeg" href="/favicon.jpg"><meta property="og:type" content="article"><meta property="og:url"${addAttribute(`https://yourdomain.com/blogs/${data.slug}`, "content")}><meta property="og:title"${addAttribute(data.seoTitle || data.title, "content")}><meta property="og:description"${addAttribute(data.seoDescription || data.excerpt, "content")}><meta property="og:image"${addAttribute("https://pbs.twimg.com/profile_images/1577206532160176128/qz_G5k4Z_400x400.jpg", "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(`https://x.com/WilsonVitalis`, "content")}><meta property="twitter:title"${addAttribute(data.seoTitle || data.title, "content")}><meta property="twitter:description"${addAttribute(data.seoDescription || data.excerpt, "content")}><meta property="twitter:image"${addAttribute("https://pbs.twimg.com/profile_images/1577206532160176128/qz_G5k4Z_400x400.jpg", "content")}><link rel="canonical"${addAttribute(`https://yourdomain.com/blogs/${data.slug}`, "href")}>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}<meta name="author"${addAttribute(data.author, "content")}><meta name="date"${addAttribute(data.publishDate, "content")}>${data.tags.length > 0 && renderTemplate`<meta name="keywords"${addAttribute(data.tags.join(", "), "content")}>`}${renderHead($$result)}</head><body class="bg-[#201d1b] min-h-screen flex flex-col" style="font-family: 'Plus Jakarta Sans Variable', sans-serif; margin: 0; padding: 0;">${renderComponent($$result, "BlogHeader", Header, {})}<main class="flex-grow"><div class="container mx-auto px-4">${renderComponent($$result, "RenderIndividualBlog", RenderIndividualBlog, {
		"blogData": data,
		"client:idle": true,
		"client:component-hydration": "idle",
		"client:component-path": "@/components/editor/EditorHomepage/RenderIndividualBlog",
		"client:component-export": "default"
	})}</div></main></body></html>`;
}, "/Users/slu/Public/code folders/personal_code/portfolio-v1/src/pages/blogs/[slug].astro", void 0);
var $$file = "/Users/slu/Public/code folders/personal_code/portfolio-v1/src/pages/blogs/[slug].astro";
var $$url = "/blogs/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blogs/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
