import clientPromise from '../../lib/mongodb';
import { createBlogPost, BlogPostSchema } from '../../models/BlogPost';
import { sanitizeRichTextContent } from '../../utils/htmlSanitizer';

export async function POST({ request }) {
  const blogData = await request.json();

  try {
    Object.keys(BlogPostSchema).forEach(key => {
      if (BlogPostSchema[key].required && !blogData[key]) {
        throw new Error(`${key} is required`);
      }
    });

    if (blogData.content) {
      blogData.content = sanitizeRichTextContent(blogData.content);
    }

    const client = await clientPromise;
    const db = client.db("blogDatabase");
    const collection = db.collection("posts");

    const blogPost = createBlogPost(blogData);

    const existing = await collection.findOne({ slug: blogPost.slug });
    if (existing) {
      blogPost.slug = `${blogPost.slug}-${Date.now().toString(36)}`;
    }

    const result = await collection.insertOne(blogPost);

    return new Response(
      JSON.stringify({ success: true, id: result.insertedId }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
