// File: src/utils/htmlSanitizer.js
import sanitizeHtml from 'sanitize-html';

export function sanitizeRichTextContent(content) {
  return sanitizeHtml(content, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ['src', 'alt']
    },
    exclusiveFilter: (frame) => {
      return frame.tag === 'script';
    },
    textFilter: (text) => {
      return text.replace(/\s+/g, " ").trim();
    }
  });
}