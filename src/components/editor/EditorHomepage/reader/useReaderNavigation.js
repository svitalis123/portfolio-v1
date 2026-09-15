import { useEffect, useState } from 'react';

/** Percentage of the document scrolled, sampled once per animation frame. */
export function useReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      // The raw scroll event fires far more often than the screen repaints;
      // coalescing into a frame keeps this off the critical path.
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        const scrollable = scrollHeight - clientHeight;
        setProgress(scrollable > 0 ? (scrollTop / scrollable) * 100 : 0);
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return progress;
}

/**
 * Id of the section currently in view.
 *
 * Uses IntersectionObserver rather than measuring every section on every scroll
 * event, and only observes this article's sections instead of every <section> on
 * the page.
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (sectionIds.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-10% 0px -60% 0px', threshold: 0 }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element) => element !== null);
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
