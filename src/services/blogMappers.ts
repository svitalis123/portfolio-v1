import type { Document, WithId } from 'mongodb';
import type { BlogSection } from './blogSections';

export interface BlogListItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  categories: string[];
  tags: string[];
  coverImage: string;
}

export interface BlogPost extends BlogListItem {
  /**
   * Pre-split on the server. The raw `content` string is deliberately absent: the
   * reader only ever renders these blocks, so shipping both would send the whole
   * article body to the browser twice.
   */
  sections: BlogSection[];
  seoTitle: string;
  seoDescription: string;
}

/** First inline image in the post body, used as the card thumbnail. */
export function extractCoverImage(content: unknown): string {
  if (typeof content !== 'string') return '';
  return content.match(/<img[^>]+src="([^"]+)"/i)?.[1] ?? '';
}

const toIsoString = (value: unknown): string => {
  const date = value instanceof Date ? value : new Date(String(value ?? ''));
  return Number.isNaN(date.getTime()) ? '' : date.toISOString();
};

const toStringArray = (value: unknown): string[] =>
  Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [];

/**
 * Project a document down to what a listing card renders.
 *
 * Note what is absent: `content`. The listing pages used to hand every post's full
 * HTML body to a client:load island, which serialised the whole blog into the page.
 */
export function toListItem(document: WithId<Document>): BlogListItem {
  const id = document._id.toString();

  return {
    id,
    slug: typeof document.slug === 'string' && document.slug ? document.slug : id,
    title: typeof document.title === 'string' ? document.title : 'Untitled',
    excerpt: typeof document.excerpt === 'string' ? document.excerpt : '',
    author: typeof document.author === 'string' ? document.author : 'Unknown',
    publishDate: toIsoString(document.publishDate ?? document.createdAt),
    categories: toStringArray(document.categories),
    tags: toStringArray(document.tags),
    coverImage: extractCoverImage(document.content),
  };
}

export function toFullPost(document: WithId<Document>, sections: BlogSection[]): BlogPost {
  return {
    ...toListItem(document),
    sections,
    seoTitle: typeof document.seoTitle === 'string' ? document.seoTitle : '',
    seoDescription: typeof document.seoDescription === 'string' ? document.seoDescription : '',
  };
}
