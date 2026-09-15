import { ObjectId, type Collection, type Document, type Filter } from 'mongodb';
import { mongoClient } from '@/lib/mongodb';
import { slugify } from '@/models/BlogPost';
import { sanitizeRichTextContent } from '@/utils/htmlSanitizer';
import { toFullPost, toListItem, type BlogListItem, type BlogPost } from './blogMappers';
import { buildBlogSections } from './blogSections';

const DB_NAME = 'blogDatabase';
const COLLECTION_NAME = 'posts';

/**
 * Only published posts are ever served publicly.
 *
 * `isPublished` was written by the admin form but read by nothing, so every post
 * predating this change sat at `false` while still being publicly visible. Those
 * 8 documents were backfilled to `true`, which is why a strict check is safe here.
 */
const PUBLISHED: Filter<Document> = { isPublished: true };

export async function postsCollection(): Promise<Collection<Document>> {
  const client = await mongoClient();
  return client.db(DB_NAME).collection(COLLECTION_NAME);
}

export async function listPosts({ limit }: { limit?: number } = {}): Promise<BlogListItem[]> {
  const collection = await postsCollection();

  let cursor = collection
    .find(PUBLISHED, {
      // `content` is fetched only to derive the cover image; toListItem drops it
      // again so it never reaches the browser.
      projection: {
        title: 1, excerpt: 1, slug: 1, author: 1, publishDate: 1,
        createdAt: 1, categories: 1, tags: 1, content: 1,
      },
    })
    .sort({ publishDate: -1, _id: -1 });

  if (limit) {
    cursor = cursor.limit(limit);
  }

  return (await cursor.toArray()).map(toListItem);
}

/**
 * Look a post up by slug, falling back to its ObjectId so links minted before
 * slugs existed keep working. A legacy hit backfills the slug on the way through.
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const collection = await postsCollection();
  let document = await collection.findOne({ ...PUBLISHED, slug });

  if (!document && ObjectId.isValid(slug)) {
    document = await collection.findOne({ ...PUBLISHED, _id: new ObjectId(slug) });

    if (document && !document.slug) {
      const generated = slugify(document.title);
      await collection.updateOne(
        { _id: document._id },
        { $set: { slug: generated, updatedAt: new Date() } }
      );
      document.slug = generated;
    }
  }

  if (!document) return null;

  // Sanitised again on read: every post predating the authenticated upload endpoint
  // was written through a publicly writable API, so stored HTML is not trusted.
  // Split into sections here too, so the reader island needs no DOM at render time.
  return toFullPost(document, buildBlogSections(sanitizeRichTextContent(document.content)));
}
