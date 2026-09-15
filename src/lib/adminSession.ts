import { timingSafeEqual } from './timingSafeEqual';

/**
 * Signed admin session cookie.
 *
 * HTTP Basic credentials are only sent by the browser for URLs under the realm it
 * authenticated against, so a `fetch()` from /admin to /api/* arrives with no
 * Authorization header. Successful Basic auth therefore mints this short-lived
 * HMAC-signed cookie, which the browser does send on same-origin requests.
 */
export const ADMIN_COOKIE = 'admin_session';
export const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8;

function signingSecret(): string {
  const secret = import.meta.env.ADMIN_SESSION_SECRET || import.meta.env.ADMIN_PASSWORD;
  if (!secret) {
    throw new Error('Missing ADMIN_SESSION_SECRET (or ADMIN_PASSWORD to derive it from)');
  }
  return secret;
}

function toBase64Url(bytes: Uint8Array): string {
  let binary = '';
  for (const byte of bytes) {
    binary += String.fromCharCode(byte);
  }
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function sign(payload: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(signingSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(payload));
  return toBase64Url(new Uint8Array(signature));
}

/** Mint a token of the form `<expiry-ms>.<hmac>`. */
export async function createSessionToken(): Promise<string> {
  const expiresAt = String(Date.now() + SESSION_MAX_AGE_SECONDS * 1000);
  return `${expiresAt}.${await sign(expiresAt)}`;
}

export async function isValidSessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;

  const separator = token.lastIndexOf('.');
  if (separator === -1) return false;

  const expiresAt = token.slice(0, separator);
  const signature = token.slice(separator + 1);

  // Reject a malformed or expired expiry before spending a HMAC on it.
  const expiryMs = Number(expiresAt);
  if (!Number.isFinite(expiryMs) || expiryMs <= Date.now()) return false;

  return timingSafeEqual(signature, await sign(expiresAt));
}
