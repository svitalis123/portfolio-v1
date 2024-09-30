import { MongoClient, ObjectId } from 'mongodb';
export { renderers } from '../../renderers.mjs';

const uri = "mongodb+srv://slu:clCFKVSqqzbGBdhx@blogcluster.xdgyh.mongodb.net/?retryWrites=true&w=majority&appName=BlogCluster";
const options = {};
let client;
let clientPromise;
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}
const clientPromise$1 = clientPromise;

// File: src/models/BlogPost.js

const BlogPostSchema = {
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

function createBlogPost(data) {
  return {
    ...data,
    _id: new ObjectId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

// File: src/pages/api/upload-blog.js

async function POST({ request }) {
  const blogData = await request.json();
  
  try {
    // Validate blogData against BlogPostSchema
    // This is a simple check, you might want to use a validation library for more complex schemas
    Object.keys(BlogPostSchema).forEach(key => {
      if (BlogPostSchema[key].required && !blogData[key]) {
        throw new Error(`${key} is required`);
      }
    });

    const client = await clientPromise$1;
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
