import { useState } from 'react';
import { format } from 'date-fns';

const emptyBlog = () => ({
  title: '',
  content: '',
  excerpt: '',
  tags: [],
  categories: [],
  author: '',
  publishDate: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
  isPublished: false,
  seoTitle: '',
  seoDescription: '',
});

/** Form state for the blog composer, kept out of the rendering component. */
export function useBlogForm() {
  const [blogData, setBlogData] = useState(emptyBlog);

  const setField = (field, value) => {
    setBlogData((previous) => ({ ...previous, [field]: value }));
  };

  const addToList = (field, value) => {
    setBlogData((previous) => ({ ...previous, [field]: [...previous[field], value] }));
  };

  const removeFromList = (field, indexToRemove) => {
    setBlogData((previous) => ({
      ...previous,
      [field]: previous[field].filter((_, index) => index !== indexToRemove),
    }));
  };

  // Rebuilt from scratch so publishDate is "now" again rather than the stale value.
  const reset = () => setBlogData(emptyBlog());

  return { blogData, setField, addToList, removeFromList, reset };
}
