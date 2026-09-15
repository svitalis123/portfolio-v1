import { defineMiddleware } from 'astro:middleware';
import { requireAdmin } from '@/lib/adminAuth';

const SECURITY_HEADERS: Record<string, string> = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
};

const isAdminPage = (pathname: string): boolean =>
  pathname === '/admin' || pathname.startsWith('/admin/');

/** Admin-only endpoints live under /api/admin/ so the gate is a path convention, not a list. */
const isAdminApi = (pathname: string): boolean => pathname.startsWith('/api/admin/');

const isApi = (pathname: string): boolean => pathname.startsWith('/api/');

function harden(response: Response, { cacheable }: { cacheable: boolean }): Response {
  // Clone rather than mutate: some adapters hand back an immutable headers object.
  const hardened = new Response(response.body, response);

  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    hardened.headers.set(name, value);
  }

  if (import.meta.env.PROD) {
    hardened.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  }

  hardened.headers.set(
    'Cache-Control',
    cacheable
      ? 'public, s-maxage=60, stale-while-revalidate=300'
      : // Admin and API responses are per-request and may be authenticated;
        // a shared CDN cache must never hold them.
        'private, no-store'
  );

  return hardened;
}

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const guarded = isAdminPage(pathname) || isAdminApi(pathname);

  // Edge gate: rejects unauthenticated traffic early and mints the session cookie.
  // Route handlers re-check independently via requireAdmin, so a middleware bypass
  // (see CVE-2025-29927 for why that is not hypothetical) is not an auth bypass.
  if (guarded) {
    const denied = await requireAdmin(context, {
      audience: isAdminApi(pathname) ? 'api' : 'page',
    });
    // Harden the rejection too: a 401/429 still needs the security headers, and
    // must never be cached and replayed to the next visitor.
    if (denied) return harden(denied, { cacheable: false });
  }

  return harden(await next(), { cacheable: !guarded && !isApi(pathname) });
});
