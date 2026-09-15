// File: src/utils/htmlSanitizer.js
import sanitizeHtml from 'sanitize-html';

// Tiptap emits headings, lowlight code blocks, images, links and coloured spans.
const OPTIONS = {
  allowedTags: [...sanitizeHtml.defaults.allowedTags, 'img'],
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
    // `rel` must be allowed explicitly or the transformTags rule below sets it and
    // the attribute filter immediately strips it again.
    a: [...sanitizeHtml.defaults.allowedAttributes.a, 'rel'],
    // lowlight puts `language-*` on <code>; the reader looks for data-language.
    code: ['class', 'data-language'],
    pre: ['class', 'data-language'],
    span: ['class'],
    // Tiptap's colour and text-align extensions emit inline styles. The attribute
    // has to be allowed before allowedStyles can filter which properties survive.
    '*': ['style'],
  },
  allowedStyles: {
    '*': {
      color: [/^#[0-9a-f]{3,8}$/i, /^rgba?\([\d\s,.%]+\)$/i, /^[a-z]+$/i],
      'text-align': [/^(left|right|center|justify)$/],
    },
  },
  // Defaults already exclude javascript: and data:. Listed explicitly so a later
  // edit cannot widen the set by accident.
  allowedSchemes: ['http', 'https', 'mailto', 'tel'],
  allowedSchemesAppliedToAttributes: ['href', 'src', 'cite'],
  // Discard the *contents* of these too, so a stripped <script> body does not
  // resurface as visible text.
  nonTextTags: ['script', 'style', 'textarea', 'option', 'noscript'],
  transformTags: {
    a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer' }),
  },
};

export function sanitizeRichTextContent(content) {
  if (typeof content !== 'string') return '';
  // No textFilter here: the previous `replace(/\s+/g, ' ')` collapsed every run of
  // whitespace, which destroyed the indentation inside <pre>/<code> blocks.
  return sanitizeHtml(content, OPTIONS);
}
