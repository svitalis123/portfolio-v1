/**
 * Horizontal project track.
 *
 * GSAP + ScrollTrigger is ~108KB and drives one below-the-fold section, so it is
 * imported on demand as that section approaches the viewport rather than shipped
 * with the page.
 */
let started = false;

async function start(container: HTMLElement): Promise<void> {
  if (started) return;
  started = true;

  const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ]);

  gsap.registerPlugin(ScrollTrigger);
  const panels = gsap.utils.toArray<HTMLElement>('.panel');

  // A single panel has nothing to scroll through, and 1 / (1 - 1) is Infinity.
  if (panels.length < 2) return;

  gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      snap: 1 / (panels.length - 1),
      end: () => `+=${container.offsetWidth}`,
    },
  });

  // View transitions swap the DOM without a reload, so triggers bound to the old
  // nodes must be torn down or they stack up and fight each other.
  document.addEventListener('astro:before-swap', () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    started = false;
  });
}

export function watchForProjects(): void {
  const container = document.querySelector<HTMLElement>('.my_container');
  if (!container) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      start(container);
    },
    { rootMargin: '200px' }
  );

  observer.observe(container);
}
