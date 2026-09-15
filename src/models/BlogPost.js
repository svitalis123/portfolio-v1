import { ObjectId } from 'mongodb';
import { sanitizeRichTextContent } from '@/utils/htmlSanitizer';

const REQUIRED_FIELDS = ['title', 'content', 'author'];
const MAX_SLUG_LENGTH = 80;

export function slugify(text) {
  const slug = String(text ?? '')
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, MAX_SLUG_LENGTH);

  // A title of only punctuation would otherwise produce an empty, unroutable slug.
  return slug || `post-${Date.now().toString(36)}`;
}

const isNonEmptyString = (value) => typeof value === 'string' && value.trim().length > 0;

/** Returns a list of human-readable problems; empty means the input is acceptable. */
export function validateBlogInput(input) {
  if (input === null || typeof input !== 'object' || Array.isArray(input)) {
    return ['Request body must be a JSON object.'];
  }

  const problems = REQUIRED_FIELDS.filter((field) => !isNonEmptyString(input[field])).map(
    (field) => `"${field}" is required.`
  );

  for (const field of ['tags', 'categories']) {
    if (input[field] !== undefined && !Array.isArray(input[field])) {
      problems.push(`"${field}" must be an array.`);
    }
  }

  if (input.publishDate !== undefined && Number.isNaN(new Date(input.publishDate).getTime())) {
    problems.push('"publishDate" must be a valid date.');
  }

  return problems;
}

const toStringArray = (value) =>
  Array.isArray(value) ? value.filter(isNonEmptyString).map((item) => item.trim()) : [];

const toDate = (value) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date() : date;
};

/**
 * Build the document to persist.
 *
 * Fields are mapped explicitly rather than spread from the request: spreading let a
 * caller set `_id`, overwrite timestamps, or smuggle arbitrary keys into the document.
 */
export function buildBlogPost(input) {
  const now = new Date();

  return {
    _id: new ObjectId(),
    title: input.title.trim(),
    content: sanitizeRichTextContent(input.content),
    excerpt: isNonEmptyString(input.excerpt) ? input.excerpt.trim() : '',
    slug: isNonEmptyString(input.slug) ? slugify(input.slug) : slugify(input.title),
    tags: toStringArray(input.tags),
    categories: toStringArray(input.categories),
    author: input.author.trim(),
    publishDate: input.publishDate ? toDate(input.publishDate) : now,
    isPublished: input.isPublished === true,
    seoTitle: isNonEmptyString(input.seoTitle) ? input.seoTitle.trim() : '',
    seoDescription: isNonEmptyString(input.seoDescription) ? input.seoDescription.trim() : '',
    createdAt: now,
    updatedAt: now,
  };
}
