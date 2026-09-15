/**
 * Canonical site metadata, shared by every page <head>.
 *
 * The real origin comes from the `site` option in astro.config.mjs (PUBLIC_SITE_URL),
 * never a hardcoded placeholder — the previous "https://yourdomain.com" shipped to
 * production in every canonical and og:url tag.
 */
export const SITE = {
  name: 'Vitalis Mutwiri',
  author: 'Vitalis Mutwiri',
  description:
    "I am Vitalis, a software engineer. Throughout my career I've contributed to diverse projects, each offering a unique challenge and an opportunity for growth — sharpening my skills alongside a network of intelligent, driven professionals.",
  keywords: 'software engineer, developer, front-end developer, full-stack developer',
  twitterUrl: 'https://x.com/WilsonVitalis',
  ogImage:
    'https://pbs.twimg.com/profile_images/1577206532160176128/qz_G5k4Z_400x400.jpg',
} as const;

/**
 * Absolute URL for the current page.
 *
 * Falls back to the request origin when `site` is unset, so a preview deployment
 * still emits a working absolute URL instead of a placeholder domain.
 */
export function absoluteUrl(pathname: string, requestUrl: URL, site?: URL): string {
  return new URL(pathname, site ?? requestUrl.origin).href;
}
