import type { APIContext } from 'astro';
import { clearFailures, recordFailure, retryAfterSeconds } from './rateLimit';
import { clientKey, hasValidCredentials } from './adminCredentials';
import {
  ADMIN_COOKIE,
  SESSION_MAX_AGE_SECONDS,
  createSessionToken,
  isValidSessionToken,
} from './adminSession';

type Audience = 'page' | 'api';

function deny(message: string, status: number, audience: Audience, extra: HeadersInit = {}): Response {
  const headers = new Headers(extra);

  // Only a browser navigation should get the native login prompt; a fetch() from
  // the admin page would otherwise pop a credential dialog mid-request.
  if (audience === 'page' && status === 401) {
    headers.set('WWW-Authenticate', 'Basic realm="Admin Area", charset="UTF-8"');
  }

  if (audience === 'api') {
    headers.set('Content-Type', 'application/json');
    return new Response(JSON.stringify({ success: false, error: message }), { status, headers });
  }

  return new Response(message, { status, headers });
}

/**
 * The authorization boundary for /admin and every admin API route.
 *
 * Returns `null` when the caller is authorized, or the Response to send when not.
 * Called from middleware (cheap rejection of unauthenticated traffic) AND from the
 * route handler itself, because a middleware check is an optimisation, not a gate.
 */
export async function requireAdmin(
  context: APIContext,
  { audience }: { audience: Audience }
): Promise<Response | null> {
  if (await isValidSessionToken(context.cookies.get(ADMIN_COOKIE)?.value)) {
    return null;
  }

  const key = clientKey(context.request);
  const retryAfter = retryAfterSeconds(key);
  if (retryAfter !== null) {
    const minutes = Math.ceil(retryAfter / 60);
    return deny(`Too many login attempts. Try again in ${minutes} minute(s).`, 429, audience, {
      'Retry-After': String(retryAfter),
    });
  }

  const header = context.request.headers.get('authorization');
  if (!header) {
    return deny('Authorization required', 401, audience);
  }

  if (!hasValidCredentials(header)) {
    recordFailure(key);
    return deny('Invalid credentials', 401, audience);
  }

  clearFailures(key);
  context.cookies.set(ADMIN_COOKIE, await createSessionToken(), {
    httpOnly: true,
    sameSite: 'strict',
    secure: import.meta.env.PROD,
    path: '/',
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
  return null;
}
