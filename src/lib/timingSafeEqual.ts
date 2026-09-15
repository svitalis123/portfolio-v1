/**
 * Constant-time string comparison.
 *
 * `a === b` returns as soon as two characters differ, so the time it takes to
 * reject a guess leaks how much of the secret was correct. This always walks the
 * full length of the longer string.
 */
export function timingSafeEqual(a: string, b: string): boolean {
  const length = Math.max(a.length, b.length);
  // Seed with the length difference so strings of unequal length can never match.
  let difference = a.length ^ b.length;

  for (let i = 0; i < length; i++) {
    difference |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  }

  return difference === 0;
}
