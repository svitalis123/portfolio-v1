// File: src/pages/api/upload-blog.js
import clientPromise from '../../lib/mongodb';
import { createBlogPost, BlogPostSchema } from '../../models/BlogPost';

export async function POST({ request }) {
  const blogData = await request.json();
  
  try {
    // Validate blogData against BlogPostSchema
    // This is a simple check, you might want to use a validation library for more complex schemas
    Object.keys(BlogPostSchema).forEach(key => {
      if (BlogPostSchema[key].required && !blogData[key]) {
        throw new Error(`${key} is required`);
      }
    });

    const client = await clientPromise;
    const db = client.db("blogDatabase");
    const collection = db.collection("posts");
    
    const blogPost = createBlogPost(blogData);
    const result = await collection.insertOne(blogPost);
    
    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}