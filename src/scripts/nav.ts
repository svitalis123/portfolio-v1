/**
 * Mobile navigation drawer.
 *
 * Delegated from `document` so it survives view-transition DOM swaps without
 * rebinding on every navigation.
 */
function setMenu(open: boolean): void {
  const drawer = document.querySelector<HTMLElement>('[data-nav-drawer]');
  const overlay = document.querySelector<HTMLElement>('[data-nav-overlay]');
  const toggle = document.querySelector<HTMLElement>('[data-nav-toggle]');
  if (!drawer || !overlay || !toggle) return;

  drawer.classList.toggle('-translate-x-full', !open);
  overlay.classList.toggle('hidden', !open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  toggle.querySelector('[data-nav-icon-open]')?.classList.toggle('hidden', open);
  toggle.querySelector('[data-nav-icon-close]')?.classList.toggle('hidden', !open);
}

export function initNav(): void {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    if (target.closest('[data-nav-toggle]')) {
      const expanded =
        document.querySelector('[data-nav-toggle]')?.getAttribute('aria-expanded') === 'true';
      setMenu(!expanded);
      return;
    }

    if (target.closest('[data-nav-overlay]') || target.closest('[data-nav-close]')) {
      setMenu(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
}
