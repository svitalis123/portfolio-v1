import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { n as createBlogPost, t as BlogPostSchema } from "./BlogPost_BxWX-5PT.mjs";
import { MongoClient } from "mongodb";
import sanitizeHtml from "sanitize-html";
//#region src/lib/mongodb.js
var uri = "mongodb+srv://slu:clCFKVSqqzbGBdhx@blogcluster.xdgyh.mongodb.net/?retryWrites=true&w=majority&appName=BlogCluster";
var options = {};
var client;
var clientPromise;
client = new MongoClient(uri, options);
clientPromise = client.connect();
var mongodb_default = clientPromise;
//#endregion
//#region src/utils/htmlSanitizer.js
function sanitizeRichTextContent(content) {
	return sanitizeHtml(content, {
		allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
		allowedAttributes: {
			...sanitizeHtml.defaults.allowedAttributes,
			img: ["src", "alt"]
		},
		exclusiveFilter: (frame) => {
			return frame.tag === "script";
		},
		textFilter: (text) => {
			return text.replace(/\s+/g, " ").trim();
		}
	});
}
//#endregion
//#region src/pages/api/upload-blog.js
var upload_blog_exports = /* @__PURE__ */ __exportAll({ POST: () => POST });
async function POST({ request }) {
	const blogData = await request.json();
	try {
		Object.keys(BlogPostSchema).forEach((key) => {
			if (BlogPostSchema[key].required && !blogData[key]) throw new Error(`${key} is required`);
		});
		if (blogData.content) blogData.content = sanitizeRichTextContent(blogData.content);
		const collection = (await mongodb_default).db("blogDatabase").collection("posts");
		const blogPost = createBlogPost(blogData);
		if (await collection.findOne({ slug: blogPost.slug })) blogPost.slug = `${blogPost.slug}-${Date.now().toString(36)}`;
		const result = await collection.insertOne(blogPost);
		return new Response(JSON.stringify({
			success: true,
			id: result.insertedId
		}), {
			status: 200,
			headers: { "Content-Type": "application/json" }
		});
	} catch (error) {
		return new Response(JSON.stringify({
			success: false,
			error: error.message
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
}
//#endregion
//#region \0virtual:astro:page:src/pages/api/upload-blog@_@js
var page = () => upload_blog_exports;
//#endregion
export { page };
