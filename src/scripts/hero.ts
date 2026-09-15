import { HERO_ROLES, ROLE_INTERVAL_MS, IMAGE_INTERVAL_MS } from '@/data/hero';

const PARALLAX_DAMPING = 80;

/** Timers and listeners from a previous page are torn down before rebinding. */
let teardown: (() => void)[] = [];

function showRole(root: ParentNode, index: number): void {
  const label = root.querySelector<HTMLElement>('[data-role-label]');
  if (label) label.textContent = HERO_ROLES[index];

  root.querySelectorAll<HTMLButtonElement>('[data-role-index]').forEach((button) => {
    button.setAttribute('aria-pressed', String(Number(button.dataset.roleIndex) === index));
  });
}

function showPhoto(photos: HTMLElement[], index: number): void {
  photos.forEach((photo, position) => {
    photo.dataset.active = String(position === index);
  });
}

export function initHero(): void {
  teardown.forEach((off) => off());
  teardown = [];

  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero) return;

  let roleIndex = 0;
  const roleTimer = setInterval(() => {
    roleIndex = (roleIndex + 1) % HERO_ROLES.length;
    showRole(hero, roleIndex);
  }, ROLE_INTERVAL_MS);
  teardown.push(() => clearInterval(roleTimer));

  hero.querySelectorAll<HTMLButtonElement>('[data-role-index]').forEach((button) => {
    const onClick = () => {
      roleIndex = Number(button.dataset.roleIndex);
      showRole(hero, roleIndex);
    };
    button.addEventListener('click', onClick);
    teardown.push(() => button.removeEventListener('click', onClick));
  });

  const photos = [...hero.querySelectorAll<HTMLElement>('[data-hero-photo]')];
  if (photos.length > 1) {
    let photoIndex = 0;
    const photoTimer = setInterval(() => {
      photoIndex = (photoIndex + 1) % photos.length;
      showPhoto(photos, photoIndex);
    }, IMAGE_INTERVAL_MS);
    teardown.push(() => clearInterval(photoTimer));
  }

  // Pointer parallax is decoration, so it is skipped for touch input and for
  // anyone who asked for reduced motion.
  const wantsMotion = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  const hasPointer = window.matchMedia('(pointer: fine)').matches;
  if (!wantsMotion || !hasPointer) return;

  const layers = [...hero.querySelectorAll<HTMLElement>('[data-hero-parallax]')];
  let frame = 0;

  const onMove = (event: MouseEvent) => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) / PARALLAX_DAMPING;
      const y = (event.clientY - rect.top - rect.height / 2) / PARALLAX_DAMPING;
      layers.forEach((layer) => {
        layer.style.setProperty('--px', `${x}px`);
        layer.style.setProperty('--py', `${y}px`);
      });
    });
  };

  hero.addEventListener('mousemove', onMove, { passive: true });
  teardown.push(() => {
    hero.removeEventListener('mousemove', onMove);
    if (frame) cancelAnimationFrame(frame);
  });
}
