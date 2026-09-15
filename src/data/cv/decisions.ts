import type { CvDecision } from './types';

export const CV_DECISIONS: CvDecision[] = [
  {
    label: 'AI integration',
    detail:
      'Designed AI-assisted document verification pipeline (OCR, tamper/liveness checks, risk scoring) with human-in-the-loop review for edge cases; use AI tooling throughout the development workflow.',
  },
  {
    label: 'Async processing',
    detail:
      'Celery + Redis for background jobs and payment workflows in production fintech systems.',
  },
  {
    label: 'SPA vs MPA',
    detail:
      'Chose Astro (MPA) for content sites after researching trade-offs — better SEO, smaller JS bundles. Used Next.js (SSR) for interactive applications.',
  },
  {
    label: 'Multi-tenancy',
    detail:
      'Implemented domain-based tenant isolation in Django views/templates, avoiding per-tenant database overhead.',
  },
  {
    label: 'Security',
    detail:
      'Eliminated WordPress attack surface via static-first architecture. Implemented JWT authentication & authorization, webhook signature validation, and input sanitization.',
  },
];
