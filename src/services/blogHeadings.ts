import { textContent } from 'domutils';
import type { Element } from 'domhandler';

export const HEADINGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);

const MIN_HEADING_LENGTH = 3;

/** Bold text only counts as a heading when it carries actual words — a stray
 *  <strong>-</strong> was otherwise becoming a table-of-contents entry named "-". */
export function looksLikeHeading(text: string): boolean {
  const trimmed = text.trim();
  return trimmed.length >= MIN_HEADING_LENGTH && /[a-z0-9]/i.test(trimmed);
}

export function slugifyHeading(text: string, index: number): string {
  return (
    text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-') || `section-${index}`
  );
}

/** lowlight records the language as a `language-*` class on the <code> element. */
export function codeLanguage(node: Element, code: Element | null): string {
  const classes = `${node.attribs?.class ?? ''} ${code?.attribs?.class ?? ''}`;
  return node.attribs?.['data-language'] || classes.match(/language-(\w+)/)?.[1] || 'bash';
}

export const headingText = (node: Element): string => textContent(node);
