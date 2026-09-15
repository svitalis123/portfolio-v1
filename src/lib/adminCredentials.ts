import { timingSafeEqual } from './timingSafeEqual';

/** Best-effort caller identity for rate limiting — spoofable, so never used for authorization. */
export function clientKey(request: Request): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'
  );
}

/** Verify an HTTP Basic `Authorization` header against the configured admin credentials. */
export function hasValidCredentials(header: string): boolean {
  const [scheme, encoded] = header.split(' ');
  if (scheme !== 'Basic' || !encoded) return false;

  let decoded: string;
  try {
    decoded = atob(encoded);
  } catch {
    return false;
  }

  // Split on the FIRST colon only — a password may legitimately contain colons.
  const separator = decoded.indexOf(':');
  if (separator === -1) return false;

  const expectedUsername = import.meta.env.ADMIN_USERNAME;
  const expectedPassword = import.meta.env.ADMIN_PASSWORD;
  // Never authenticate against unset config, or a misconfigured deploy is wide open.
  if (!expectedUsername || !expectedPassword) return false;

  // Both comparisons always run: short-circuiting would leak which half was wrong.
  const usernameOk = timingSafeEqual(decoded.slice(0, separator), expectedUsername);
  const passwordOk = timingSafeEqual(decoded.slice(separator + 1), expectedPassword);
  return usernameOk && passwordOk;
}
