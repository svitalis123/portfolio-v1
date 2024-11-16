// src/services/BlogDataService.ts
import { MongoClient, ObjectId } from 'mongodb';

export class BlogDataService {
  private static readonly MONGODB_URI = import.meta.env.MONGODB_URI;
  private static readonly DB_NAME = "blogDatabase";
  private static readonly COLLECTION_NAME = "posts";

  private static async getClient() {
    const client = new MongoClient(this.MONGODB_URI);
    await client.connect();
    return client;
  }

  static async getAllPosts(limit?: number) {
    const client = await this.getClient();
    
    try {
      const db = client.db(this.DB_NAME);
      const collection = db.collection(this.COLLECTION_NAME);
      
      // Create a query pipeline
      let query = collection.find({})
        // Sort by publishDate in descending order (newest first)
        // If publishDate doesn't exist, fall back to _id
        .sort({
          publishDate: -1,
          _id: -1
        });
      
      // Apply limit if specified
      if (limit) {
        query = query.limit(limit);
      }
      
      const blogPosts = await query.toArray();
      
      return JSON.parse(JSON.stringify(blogPosts));
    } finally {
      await client.close();
    }
  }

  static async getPostById(id: string) {
    const client = await this.getClient();
    
    try {
      const db = client.db(this.DB_NAME);
      const collection = db.collection(this.COLLECTION_NAME);
      const post = await collection.findOne({ _id: new ObjectId(id) });
      
      return post ? JSON.parse(JSON.stringify(post)) : null;
    } finally {
      await client.close();
    }
  }

  static async getStaticPaths() {
    const blogPosts = await this.getAllPosts();
    
    return blogPosts.map((blogPost) => ({
      params: { slug: blogPost._id.toString() },
      props: { blogPost },
    }));
  }

  // New method to get latest posts
  static async getLatestPosts(count: number = 5) {
    return this.getAllPosts(count);
  }

  // New method to get posts by tag
  static async getPostsByTag(tag: string) {
    const client = await this.getClient();
    
    try {
      const db = client.db(this.DB_NAME);
      const collection = db.collection(this.COLLECTION_NAME);
      
      const blogPosts = await collection
        .find({ tags: tag })
        .sort({ publishDate: -1, _id: -1 })
        .toArray();
      
      return JSON.parse(JSON.stringify(blogPosts));
    } finally {
      await client.close();
    }
  }
}