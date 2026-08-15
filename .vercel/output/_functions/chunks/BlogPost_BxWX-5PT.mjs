import { ObjectId } from "mongodb";
//#region src/models/BlogPost.js
var BlogPostSchema = {
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	excerpt: { type: String },
	slug: { type: String },
	tags: {
		type: [String],
		default: []
	},
	categories: {
		type: [String],
		default: []
	},
	author: {
		type: String,
		required: true
	},
	publishDate: {
		type: Date,
		default: Date.now
	},
	isPublished: {
		type: Boolean,
		default: false
	},
	seoTitle: { type: String },
	seoDescription: { type: String },
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}
};
function slugify(text) {
	return text.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").substring(0, 80);
}
function createBlogPost(data) {
	return {
		...data,
		_id: new ObjectId(),
		slug: data.slug || slugify(data.title),
		createdAt: /* @__PURE__ */ new Date(),
		updatedAt: /* @__PURE__ */ new Date()
	};
}
//#endregion
export { createBlogPost as n, slugify as r, BlogPostSchema as t };
