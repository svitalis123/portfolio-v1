import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_DKvTTH34.mjs";
import { t as createComponent } from "./compiler_CXH3bZoW.mjs";
import { u as cn } from "./dialog_CrDbWmc7.mjs";
import { t as $$Layout } from "./Layout_zrydqIr5.mjs";
import { a as Avatar, n as CardContent, o as AvatarFallback, t as Card } from "./card_DMkLjadk.mjs";
import { useState } from "react";
import { cva } from "class-variance-authority";
import { jsx, jsxs } from "react/jsx-runtime";
import { MongoClient } from "mongodb";
import { motion } from "framer-motion";
//#region src/components/ui/badge.tsx
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
//#endregion
//#region src/components/blogs/FeaturedBlogPost.jsx
var FeaturedBlogPost = ({ blog }) => {
	const getInitials = (author) => {
		return author.toLowerCase() === "vitalis" ? "VM" : author.split(" ").map((word) => word[0]).join("").toUpperCase();
	};
	const imageUrl = blog.content.match(/src="([^"]+)"/)?.[1] || "";
	return /* @__PURE__ */ jsx("div", {
		className: "mb-12 max-w-[1330px] mx-auto",
		children: /* @__PURE__ */ jsx(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .5 },
			children: /* @__PURE__ */ jsx("a", {
				href: `/blogs/${blog.slug || blog._id}`,
				className: "no-underline hover:no-underline",
				children: /* @__PURE__ */ jsx(Card, {
					className: "bg-[#2c2824] border-none hover:border-gray-700 overflow-hidden",
					children: /* @__PURE__ */ jsx(CardContent, {
						className: "p-0",
						children: /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col lg:flex-row w-full gap-6",
							children: [/* @__PURE__ */ jsx("div", {
								className: "p-6 md:p-8 flex-1 lg:w-3/6 flex flex-col justify-center",
								children: /* @__PURE__ */ jsxs("div", {
									className: "space-y-6",
									children: [
										/* @__PURE__ */ jsx(Badge, {
											variant: "outline",
											className: "bg-[#3d3731] text-gray-100 border-none mb-4",
											children: "FEATURED"
										}),
										/* @__PURE__ */ jsx("h1", {
											className: "text-2xl md:text-4xl font-bold text-gray-100 leading-tight",
											children: blog.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-gray-300 text-sm md:text-base",
											children: blog.excerpt
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center space-x-4",
											children: [/* @__PURE__ */ jsx(Avatar, {
												className: "h-10 w-10 bg-[#3d3731] text-[#000]",
												children: /* @__PURE__ */ jsx(AvatarFallback, { children: getInitials(blog.author) })
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-gray-100",
													children: blog.author
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[#fff] text-sm",
													children: new Date(blog.publishDate).toLocaleDateString("en-US", {
														month: "long",
														day: "numeric",
														year: "numeric"
													})
												})]
											})]
										})
									]
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "h-full lg:w-3/6 relative",
								children: [/* @__PURE__ */ jsx("img", {
									src: imageUrl,
									alt: blog.title,
									className: "w-full h-full object-cover"
								}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#2c2824] via-transparent to-transparent opacity-50" })]
							})]
						})
					})
				})
			})
		})
	});
};
//#endregion
//#region src/components/blogs/BlogListingPage.jsx
var BlogListingPage = ({ blogs }) => {
	const [selectedCategory, setSelectedCategory] = useState("ALL");
	const getUniqueCategories = () => {
		const allCategories = blogs.reduce((acc, blog) => {
			if (blog.categories && blog.categories.length > 0) return [...acc, ...blog.categories];
			return acc;
		}, []);
		return ["ALL", ...new Set(allCategories)];
	};
	const filteredBlogs = blogs.filter((blog) => {
		if (selectedCategory === "ALL") return true;
		return blog.categories.includes(selectedCategory);
	});
	const getInitials = (author) => {
		return author.toLowerCase() === "vitalis" ? "VM" : author.split(" ").map((word) => word[0]).join("").toUpperCase();
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "max-w-[1330px] mx-auto px-4",
		children: [/* @__PURE__ */ jsx(motion.div, {
			initial: {
				opacity: 0,
				y: -10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: { duration: .5 },
			className: "mb-8",
			children: /* @__PURE__ */ jsx("nav", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ jsx("div", {
					className: "flex space-x-4 py-4 min-w-max",
					children: getUniqueCategories().map((category) => /* @__PURE__ */ jsx(Badge, {
						variant: "outline",
						className: `
                  cursor-pointer px-4 py-2 transition-colors duration-200
                  ${selectedCategory === category ? "bg-[#2c2824] text-gray-100" : "bg-[#3d3731] text-gray-100 hover:bg-[#2c2824]"} border-none
                `,
						onClick: () => setSelectedCategory(category),
						children: category.toUpperCase()
					}, category))
				})
			})
		}), /* @__PURE__ */ jsx(motion.div, {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			transition: { duration: .5 },
			className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
			children: filteredBlogs.map((blog) => {
				const imageUrl = blog.content.match(/src="([^"]+)"/)?.[1] || "";
				return /* @__PURE__ */ jsx(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: { duration: .5 },
					children: /* @__PURE__ */ jsx("a", {
						href: `/blogs/${blog.slug || blog._id}`,
						className: "no-underline hover:no-underline",
						children: /* @__PURE__ */ jsx(Card, {
							className: "bg-[#2c2824] border-none hover:border-gray-700 overflow-hidden h-full",
							children: /* @__PURE__ */ jsxs(CardContent, {
								className: "p-0",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "relative h-48",
									children: [/* @__PURE__ */ jsx("img", {
										src: imageUrl,
										alt: blog.title,
										className: "w-full h-full object-cover"
									}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#2c2824] via-transparent to-transparent opacity-50" })]
								}), /* @__PURE__ */ jsxs("div", {
									className: "p-6 space-y-4",
									children: [
										blog.categories.map((category) => /* @__PURE__ */ jsx(Badge, {
											variant: "outline",
											className: "bg-[#3d3731] text-gray-100 border-none",
											children: category.toUpperCase()
										}, category)),
										/* @__PURE__ */ jsx("h2", {
											className: "text-xl font-bold text-gray-100 line-clamp-2",
											children: blog.title
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-gray-300 text-sm line-clamp-3",
											children: blog.excerpt
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "flex items-center space-x-4 pt-4",
											children: [/* @__PURE__ */ jsx(Avatar, {
												className: "h-8 w-8 bg-[#3d3731] text-[#000]",
												children: /* @__PURE__ */ jsx(AvatarFallback, { children: getInitials(blog.author) })
											}), /* @__PURE__ */ jsxs("div", {
												className: "flex flex-col",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-gray-100 text-sm",
													children: blog.author
												}), /* @__PURE__ */ jsx("span", {
													className: "text-gray-400 text-xs",
													children: new Date(blog.publishDate).toLocaleDateString("en-US", {
														month: "long",
														day: "numeric",
														year: "numeric"
													})
												})]
											})]
										})
									]
								})]
							})
						})
					})
				}, blog._id);
			})
		})]
	});
};
//#endregion
//#region src/pages/blogs.astro
var blogs_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Blogs,
	file: () => $$file,
	url: () => $$url
});
var $$Blogs = createComponent(async ($$result, $$props, $$slots) => {
	const client = new MongoClient("mongodb+srv://slu:clCFKVSqqzbGBdhx@blogcluster.xdgyh.mongodb.net/?retryWrites=true&w=majority&appName=BlogCluster");
	let blogPosts = [];
	try {
		await client.connect();
		const posts = await client.db("blogDatabase").collection("posts").find({}).sort({ createdAt: -1 }).toArray();
		blogPosts = JSON.parse(JSON.stringify(posts));
	} finally {
		await client.close();
	}
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "blogs" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class=" bg-[#201d1b] w-full py-4 lg:py-12 overflow-hidden text-[#ecc7bc]">${renderComponent($$result2, "FeaturedBlogPost", FeaturedBlogPost, {
		"blog": blogPosts[0],
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "/Users/slu/Public/code folders/personal_code/portfolio-v1/src/components/blogs/FeaturedBlogPost.jsx",
		"client:component-export": "default"
	})}${renderComponent($$result2, "BlogListingPage", BlogListingPage, {
		"blogs": blogPosts,
		"client:load": true,
		"client:component-hydration": "load",
		"client:component-path": "@/components/blogs/BlogListingPage",
		"client:component-export": "default"
	})}</main>` })}`;
}, "/Users/slu/Public/code folders/personal_code/portfolio-v1/src/pages/blogs.astro", void 0);
var $$file = "/Users/slu/Public/code folders/personal_code/portfolio-v1/src/pages/blogs.astro";
var $$url = "/blogs";
//#endregion
//#region \0virtual:astro:page:src/pages/blogs@_@astro
var page = () => blogs_exports;
//#endregion
export { page };
