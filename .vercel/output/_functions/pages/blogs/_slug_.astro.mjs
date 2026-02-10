/* empty css                                    */
import { e as createComponent, g as addAttribute, r as renderTemplate, l as renderHead, k as renderComponent, h as createAstro } from '../../chunks/astro/server_BOClSVLC.mjs';
import 'piccolore';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, X } from 'lucide-react';
import { MongoClient, ObjectId } from 'mongodb';
export { renderers } from '../../renderers.mjs';

const formatCode = (code) => {
  return code.split(";").map((line) => line.trim()).filter((line) => line.length > 0).map((line) => {
    if (line.startsWith("import ")) {
      return `${line};`;
    }
    if (line.includes("{") && !line.includes("}")) {
      return `${line};`;
    }
    const indentLevel = (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
    const indent = "  ".repeat(Math.max(0, indentLevel));
    return `${indent}${line};`;
  }).join("\n");
};
const TerminalCodeBlock = ({ code, language = "bash" }) => {
  const formattedCode = formatCode(code);
  return /* @__PURE__ */ jsxs("div", { className: "my-6 bg-[#2d2d2d] rounded-lg overflow-hidden shadow-lg", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-[#3d3d3d] px-4 py-2 flex items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mr-4", children: [
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-[#ff5f56]" }),
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-[#ffbd2e]" }),
        /* @__PURE__ */ jsx("div", { className: "w-3 h-3 rounded-full bg-[#27c93f]" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center text-[#ddd] text-sm", children: [
        /* @__PURE__ */ jsx(Terminal, { size: 14, className: "mr-2" }),
        /* @__PURE__ */ jsx("span", { children: "terminal" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-4 font-mono text-sm", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[#6bf982] mr-2", children: "$" }),
      /* @__PURE__ */ jsx("pre", { className: "text-[#f8f8f2] overflow-x-auto whitespace-pre", children: /* @__PURE__ */ jsx("code", { children: formattedCode }) })
    ] }) })
  ] });
};
const parseBlogContent = (htmlContent) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const sections = [];
  let currentSection = null;
  const isHeading = (node) => {
    return ["H1", "H2", "H3", "H4", "H5", "H6"].includes(node.tagName);
  };
  const isCodeBlock = (node) => {
    return node.tagName === "CODE" || node.tagName === "PRE";
  };
  const processNode = (node) => {
    if (isCodeBlock(node)) {
      return {
        type: "code",
        content: node.textContent,
        language: node.getAttribute("data-language") || "bash"
      };
    }
    return {
      type: "html",
      content: node.outerHTML
    };
  };
  const createSection = (title, node) => {
    if (currentSection) {
      sections.push(currentSection);
    }
    currentSection = {
      id: title.toLowerCase().replace(/\s+/g, "-"),
      title: title.trim(),
      content: [processNode(node)]
    };
  };
  doc.body.childNodes.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (isHeading(node)) {
        createSection(node.textContent, node);
      } else if (node.tagName === "P" && node.querySelector("strong")) {
        const strongText = node.querySelector("strong").textContent;
        createSection(strongText, node);
      } else if (currentSection) {
        currentSection.content.push(processNode(node));
      } else {
        currentSection = {
          id: "introduction",
          title: "Introduction",
          content: [processNode(node)]
        };
      }
    }
  });
  if (currentSection) {
    sections.push(currentSection);
  }
  return sections;
};
const RenderIndividualBlog = ({ blogData }) => {
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(parseBlogContent(blogData.content));
  }, [blogData.content]);
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = winScroll / height * 100;
      setScrollProgress(scrolled);
      const sectionElements = document.querySelectorAll("section");
      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const renderContent = (content) => {
    if (content.type === "code") {
      return /* @__PURE__ */ jsx(TerminalCodeBlock, { code: content.content, language: content.language });
    }
    return /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: content.content } });
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#201d1b] w-full text-[#fff] font-sans", children: [
    /* @__PURE__ */ jsx("div", { className: "fixed top-0 left-0 w-full h-1 bg-blue-500 z-50", style: { width: `${scrollProgress}%` } }),
    /* @__PURE__ */ jsxs("div", { className: "lg:flex", children: [
      /* @__PURE__ */ jsxs("nav", { className: `lg:w-1/4 lg:max-w-[300px] lg:fixed lg:h-screen p-8 bg-[#ecc7bc] shadow-md z-40 ${isMenuOpen ? "fixed inset-0" : "hidden lg:block"}`, children: [
        /* @__PURE__ */ jsx("button", { onClick: () => setIsMenuOpen(false), className: "lg:hidden absolute top-4 right-4 text-gray-700", children: "Close" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: sections.map((section) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: `#${section.id}`,
            className: `text-sm ${activeSection === section.id ? "text-blue-600 font-semibold" : "text-gray-900"}`,
            onClick: () => setIsMenuOpen(false),
            children: section.title
          }
        ) }, section.id)) })
      ] }),
      /* @__PURE__ */ jsx("main", { className: "lg:w-3/4 lg:ml-auto", children: /* @__PURE__ */ jsx("div", { className: "px-4 lg:px-8 pb-16 max-w-3xl pt-16 lg:pt-8", children: /* @__PURE__ */ jsx("div", { className: "prose prose-invert max-w-none", children: sections.map((section) => /* @__PURE__ */ jsxs("section", { id: section.id, className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl lg:text-3xl font-semibold mb-4", children: section.title }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: section.content.map((content, index) => /* @__PURE__ */ jsx("div", { children: renderContent(content) }, index)) })
      ] }, section.id)) }) }) })
    ] })
  ] });
};

const Header = () => {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 bg-[#201d1b] text-white p-4 md:p-6 shadow-md", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto flex flex-col items-center md:flex-row md:justify-between", children: [
    /* @__PURE__ */ jsx("a", { href: "/", className: "text-2xl no-underline hover:no-underline md:text-3xl font-bold mb-4 md:mb-0", children: "Vitalis" }),
    /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsxs("ul", { className: "flex space-x-4", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://github.com/svitalis123", target: "_blank", rel: "noopener noreferrer", "aria-label": "GitHub", children: /* @__PURE__ */ jsx(Github, { className: "w-6 h-6 hover:text-gray-300 transition-colors" }) }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/vitalismutwiri/", target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsx(Linkedin, { className: "w-6 h-6 hover:text-gray-300 transition-colors" }) }) }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://x.com/WilsonVitalis", target: "_blank", rel: "noopener noreferrer", "aria-label": "Twitter", children: /* @__PURE__ */ jsx(X, { className: "w-6 h-6 hover:text-gray-300 transition-colors" }) }) })
    ] }) })
  ] }) });
};

const $$Astro = createAstro();
async function getStaticPaths() {
  const client = new MongoClient("mongodb+srv://slu:clCFKVSqqzbGBdhx@blogcluster.xdgyh.mongodb.net/?retryWrites=true&w=majority&appName=BlogCluster");
  try {
    await client.connect();
    const db = client.db("blogDatabase");
    const collection = db.collection("posts");
    const blogPosts = await collection.find({}).toArray();
    return blogPosts.map((blogPost) => ({
      params: { slug: blogPost._id.toString() },
      props: { blogPost: JSON.parse(JSON.stringify(blogPost)) }
    }));
  } finally {
    await client.close();
  }
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const { blogPost } = Astro2.props;
  const client = new MongoClient("mongodb+srv://slu:clCFKVSqqzbGBdhx@blogcluster.xdgyh.mongodb.net/?retryWrites=true&w=majority&appName=BlogCluster");
  let data;
  try {
    await client.connect();
    const db = client.db("blogDatabase");
    const collection = db.collection("posts");
    data = await collection.findOne({ _id: new ObjectId(slug) });
    data = JSON.parse(JSON.stringify(data));
  } finally {
    await client.close();
  }
  console.log(data);
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${data.seoTitle || data.title}</title><meta name="description"${addAttribute(data.seoDescription || data.excerpt, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="article"><meta property="og:url"${addAttribute(`https://yourdomain.com/blog/${data._id}`, "content")}><meta property="og:title"${addAttribute(data.seoTitle || data.title, "content")}><meta property="og:description"${addAttribute(data.seoDescription || data.excerpt, "content")}><meta property="og:image"${addAttribute("https://pbs.twimg.com/profile_images/1577206532160176128/qz_G5k4Z_400x400.jpg", "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(`https://x.com/WilsonVitalis`, "content")}><meta property="twitter:title"${addAttribute(data.seoTitle || data.title, "content")}><meta property="twitter:description"${addAttribute(data.seoDescription || data.excerpt, "content")}><meta property="twitter:image"${addAttribute("https://pbs.twimg.com/profile_images/1577206532160176128/qz_G5k4Z_400x400.jpg", "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(`https://yourdomain.com/blog/${data._id}`, "href")}><!-- Additional SEO tags --><meta name="author"${addAttribute(data.author, "content")}><meta name="date"${addAttribute(data.publishDate, "content")}>${data.tags.length > 0 && renderTemplate`<meta name="keywords"${addAttribute(data.tags.join(", "), "content")}>`}${renderHead()}</head> <body class="bg-[#201d1b] min-h-screen overflow-x-hidden flex flex-col"> ${renderComponent($$result, "BlogHeader", Header, {})} <main class="flex-grow  "> <!-- Adjust these values based on your header height --> <div class="container mx-auto px-4"> ${renderComponent($$result, "RenderIndividualBlog", RenderIndividualBlog, { "blogData": data, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/editor/EditorHomepage/RenderIndividualBlog", "client:component-export": "default" })} </div> </main> </body></html><!-- blogData={data} --><!-- // export async function getStaticPaths() {
  //   const blogPosts = [
  //     {
  //       title: "The Future of Artificial Intelligence",
  //       id: "1",
  //       image: "https://pro.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1719716136369-59ecf938a911%3Fq%3D80%26w%3D3540%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=1080&q=75",
  //       sections: [
  //         {
  //           id: "introduction",
  //           title: "Introduction",
  //           content:
  //             "Artificial Intelligence (AI) has been rapidly evolving, transforming various aspects of our lives. From voice assistants to autonomous vehicles, AI is becoming increasingly integrated into our daily routines.",
  //         },
  //         {
  //           id: "key-areas",
  //           title: "Key Areas of AI Development",
  //           content: [
  //             {
  //               subtitle: "Machine Learning",
  //               items: ["Deep Learning", "Neural Networks"],
  //             },
  //             {
  //               subtitle: "Natural Language Processing",
  //               items: ["Speech Recognition", "Language Translation"],
  //             },
  //             {
  //               subtitle: "Computer Vision",
  //               items: ["Image Recognition", "Object Detection"],
  //             },
  //             {
  //               subtitle: "Robotics",
  //               items: ["Autonomous Robots", "Human-Robot Interaction"],
  //             },
  //           ],
  //         },
  //         {
  //           id: "ethical-considerations",
  //           title: "Ethical Considerations",
  //           content:
  //             "As AI becomes more advanced and ubiquitous, several ethical considerations come to the forefront:\\n\\n1. Privacy and Data Protection\\n2. Bias and Fairness\\n3. Accountability\\n4. Transparency\\n5. Job Displacement",
  //         },
  //         {
  //           id: "conclusion",
  //           title: "Conclusion",
  //           content:
  //             "The future of Artificial Intelligence holds immense potential to revolutionize our world. As we continue to develop and integrate AI into various aspects of our lives, it's crucial to balance innovation with ethical considerations. By doing so, we can harness the power of AI to create a more efficient, sustainable, and equitable future for all.",
  //         },
  //       ],
  //     },
  //   ];
  
  //   return blogPosts.map((blogPost) => {
  //     return {
  //       params: { slug: blogPost.id },
  //       props: { blogPost },
  //     };
  //   });
  // }
  
  // const { slug }: any = Astro.params;
  // const { blogPost }: any = Astro.props;
  // const proper = blogPosts;
  // const data = proper.filter((dat: any) => parseInt(dat.id) === parseInt(slug));
  // console.log("my sing blog", data); -->`;
}, "/Users/slu/Public/code folders/personal_code/portfolio-v1/src/pages/blogs/[slug].astro", void 0);
const $$file = "/Users/slu/Public/code folders/personal_code/portfolio-v1/src/pages/blogs/[slug].astro";
const $$url = "/blogs/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
