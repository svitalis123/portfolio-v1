/**
 * Best-effort re-indentation for code blocks that were flattened before storage.
 *
 * Posts written before 2026-09 went through a sanitizer whose `textFilter` collapsed
 * every whitespace run, so their code sits in the database as a single line — one
 * block is nearly 1,500 characters wide. Those newlines are gone from the data and
 * cannot be recovered, so this reconstructs plausible line breaks for display only.
 *
 * It applies ONLY to blocks with no newline at all. Anything whose formatting
 * survived is rendered verbatim.
 */

const INDENT = '  ';
const MIN_LENGTH = 80;
const MAX_INLINE_GROUP = 60;

export function needsReflow(code: string): boolean {
  // A newline anywhere means the original formatting survived; leave it alone.
  return !code.includes('\n') && code.length > MIN_LENGTH;
}

/**
 * True when `{` at `start` closes soon and holds no nested braces, e.g. the
 * `{ ZodError }` in an import. Such groups stay inline instead of being exploded.
 */
function isShortInlineGroup(code: string, start: number): boolean {
  const close = code.indexOf('}', start);
  if (close === -1 || close - start > MAX_INLINE_GROUP) return false;
  return !code.slice(start + 1, close).includes('{');
}

export function reflowSingleLineCode(code: string): string {
  const lines: string[] = [];
  let buffer = '';
  let depth = 0;

  const flush = () => {
    const trimmed = buffer.trim();
    if (trimmed) lines.push(INDENT.repeat(Math.max(0, depth)) + trimmed);
    buffer = '';
  };

  for (let index = 0; index < code.length; index += 1) {
    const character = code[index];

    if (character === '{' && isShortInlineGroup(code, index)) {
      const close = code.indexOf('}', index);
      buffer += code.slice(index, close + 1);
      index = close;
      continue;
    }

    if (character === '{') {
      buffer += character;
      flush();
      depth += 1;
      continue;
    }

    if (character === '}') {
      flush();
      depth = Math.max(0, depth - 1);
      // Start the next line with the brace so trailing `,` or `)` stays attached.
      buffer = character;
      continue;
    }

    buffer += character;

    if (character === ';') flush();
  }

  flush();

  return lines.join('\n');
}
