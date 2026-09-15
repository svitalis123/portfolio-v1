/** Presentation helpers shared by the blog cards. */

/** Avatar initials. Guards against a missing author rather than throwing on `.split`. */
export function getInitials(author: string | undefined): string {
  const name = (author ?? '').trim();
  if (!name) return '?';
  if (name.toLowerCase() === 'vitalis') return 'VM';

  return name
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export function formatPublishDate(isoDate: string | undefined): string {
  if (!isoDate) return '';

  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return '';

  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
