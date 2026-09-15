import { parseDocument } from 'htmlparser2';
import render from 'dom-serializer';
import { textContent, findOne } from 'domutils';
import type { Element } from 'domhandler';
import { needsReflow, reflowSingleLineCode } from './reflowLegacyCode';
import { HEADINGS, codeLanguage, looksLikeHeading, slugifyHeading } from './blogHeadings';

export type BlogBlock =
  | { type: 'code'; content: string; language: string }
  | { type: 'html'; content: string };

export interface BlogSection {
  id: string;
  title: string;
  content: BlogBlock[];
}

function describe(node: Element): BlogBlock {
  if (node.name === 'pre' || node.name === 'code') {
    const text = textContent(node);
    const code = node.name === 'code' ? node : findOne((el) => el.name === 'code', node.children, true);
    return {
      type: 'code',
      content: needsReflow(text) ? reflowSingleLineCode(text) : text,
      language: codeLanguage(node, code as Element | null),
    };
  }
  return { type: 'html', content: render(node) };
}

/**
 * Split post HTML into headed sections for the table of contents.
 *
 * Runs on the server. The previous version used DOMParser, which does not exist in
 * Node — rendering the reader island server-side threw and truncated the response
 * mid-stream. Parsing here also means the article body is server-rendered at all,
 * which it never was when this ran in a client-side effect.
 */
export function buildBlogSections(html: string | undefined): BlogSection[] {
  const document = parseDocument(html ?? '');
  const sections: BlogSection[] = [];
  let current: BlogSection | null = null;

  const startSection = (title: string) => {
    if (current) sections.push(current);
    current = { id: slugifyHeading(title, sections.length), title: title.trim(), content: [] };
  };

  for (const node of document.children) {
    if (node.type !== 'tag') continue;
    const element = node as Element;

    if (HEADINGS.has(element.name)) {
      startSection(textContent(element));
      continue;
    }

    const strongLead = element.name === 'p'
      ? findOne((el) => el.name === 'strong', element.children, true)
      : null;

    // A bolded fragment only starts a section if it reads like a heading. Without
    // this a stray <strong>-</strong> became a table-of-contents entry named "-".
    if (strongLead && looksLikeHeading(textContent(strongLead))) {
      startSection(textContent(strongLead));
    } else if (!current) {
      startSection('Introduction');
    }

    current!.content.push(describe(element));
  }

  if (current) sections.push(current);

  // Two headings with the same text would otherwise produce two anchors pointing
  // at the same element.
  const seen = new Map<string, number>();
  return sections.map((section) => {
    const count = seen.get(section.id) ?? 0;
    seen.set(section.id, count + 1);
    return count === 0 ? section : { ...section, id: `${section.id}-${count}` };
  });
}
