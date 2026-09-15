/**
 * Scrolls to the projects track for `#projects`.
 *
 * The native anchor jump does not work here: the track lives inside
 * `<main class="overflow-hidden">`, and an `overflow: hidden` ancestor is still a
 * scroll container, so the browser "satisfies" the anchor by scrolling main's own
 * box and leaves the window at the top of the page. Scrolling the window
 * explicitly sidesteps that regardless of what the ancestors do.
 */
const TARGET = '#projects';

function scrollToProjects(behavior: ScrollBehavior): boolean {
  const container = document.querySelector<HTMLElement>(TARGET);
  if (!container) return false;

  const top = container.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior });
  return true;
}

export function initProjectsAnchor(): void {
  // Same-page clicks: take over before the browser's own jump.
  document.addEventListener('click', (event) => {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href$="#projects"]');
    if (!link) return;

    const url = new URL(link.href, window.location.href);
    if (url.pathname !== window.location.pathname) return;

    event.preventDefault();
    if (scrollToProjects('smooth')) {
      history.replaceState(null, '', TARGET);
    }
  });

  window.addEventListener('hashchange', () => {
    if (window.location.hash === TARGET) scrollToProjects('smooth');
  });

  // Arriving with the hash already in the URL: the layout has to settle first,
  // so correct the position on the next frame rather than during parse.
  if (window.location.hash === TARGET) {
    requestAnimationFrame(() => scrollToProjects('auto'));
  }
}
