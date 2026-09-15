/**
 * Fixed-window, in-memory failure counter for the admin login.
 *
 * Deliberately best-effort: on Vercel each serverless instance keeps its own Map,
 * so attempts spread across cold starts get more tries than MAX_ATTEMPTS suggests.
 * It exists to blunt naive credential stuffing from a single client. The real
 * boundary is the constant-time credential check in `adminAuth.ts`, not this.
 */
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

interface FailureWindow {
  count: number;
  expiresAt: number;
}

const windows = new Map<string, FailureWindow>();

/** Drop expired windows so the Map cannot grow without bound on a warm instance. */
function sweepExpired(now: number): void {
  for (const [key, window] of windows) {
    if (window.expiresAt <= now) {
      windows.delete(key);
    }
  }
}

/** Seconds the caller must wait, or `null` when they are not currently locked out. */
export function retryAfterSeconds(key: string): number | null {
  const now = Date.now();
  const window = windows.get(key);

  if (!window || window.expiresAt <= now || window.count < MAX_ATTEMPTS) {
    return null;
  }

  return Math.ceil((window.expiresAt - now) / 1000);
}

export function recordFailure(key: string): void {
  const now = Date.now();
  sweepExpired(now);

  const window = windows.get(key);
  if (!window || window.expiresAt <= now) {
    windows.set(key, { count: 1, expiresAt: now + WINDOW_MS });
    return;
  }

  window.count += 1;
}

export function clearFailures(key: string): void {
  windows.delete(key);
}
