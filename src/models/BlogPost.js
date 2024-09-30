// File: src/models/BlogPost.js
import { ObjectId } from 'mongodb';

export const BlogPostSchema = {
  title: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: { type: String },
  tags: { type: [String], default: [] },
  categories: { type: [String], default: [] },
  author: { type: String, required: true },
  publishDate: { type: Date, default: Date.now },
  isPublished: { type: Boolean, default: false },
  seoTitle: { type: String },
  seoDescription: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
};

export function createBlogPost(data) {
  return {
    ...data,
    _id: new ObjectId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}