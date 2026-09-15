import { requireAdmin } from '@/lib/adminAuth';
import { postsCollection } from '@/services/BlogDataService';
import { buildBlogPost, validateBlogInput } from '@/models/BlogPost';

export const prerender = false;

const json = (body, status) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

/** Append a short suffix until the slug is free. Single-author blog: no contention. */
async function uniqueSlug(collection, slug) {
  if (!(await collection.findOne({ slug }, { projection: { _id: 1 } }))) {
    return slug;
  }
  return `${slug}-${Date.now().toString(36)}`;
}

export async function POST(context) {
  // Authorize inside the handler. This is a public POST endpoint regardless of what
  // middleware does upstream, so it re-verifies rather than trusting the edge.
  const denied = await requireAdmin(context, { audience: 'api' });
  if (denied) return denied;

  let input;
  try {
    input = await context.request.json();
  } catch {
    return json({ success: false, error: 'Request body must be valid JSON.' }, 400);
  }

  const problems = validateBlogInput(input);
  if (problems.length > 0) {
    return json({ success: false, error: problems.join(' ') }, 400);
  }

  try {
    const collection = await postsCollection();
    const post = buildBlogPost(input);
    post.slug = await uniqueSlug(collection, post.slug);

    const result = await collection.insertOne(post);
    return json({ success: true, id: result.insertedId.toString(), slug: post.slug }, 201);
  } catch (error) {
    // Not swallowed: console.error is this project's only error channel and Vercel
    // captures it into the function logs. The client gets a generic message so
    // driver internals and connection strings never reach a response body.
    console.error('[api/admin/upload-blog] failed to insert post', error);
    return json({ success: false, error: 'Could not save the post. Please try again.' }, 500);
  }
}
