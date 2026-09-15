import type { CvRole } from './types';

export const CV_EXPERIENCE: CvRole[] = [
  {
    title: 'Full-Stack Developer',
    org: 'Impact Africa Network',
    period: '02/2023 — Present',
    context:
      'Non-Profit Startup Studio — NGO, Fintech, Edtech, HR SaaS Platform, Co-working, Venture Fund & other projects — USA, Kenya & Tanzania',
    bullets: [
      'Owned 7+ projects across fintech, edtech, HR, and recruitment — handling system design, API architecture, database design, and cloud deployment.',
      'Led architecture migration from WordPress to Astro (MPA) after evaluating SPA vs MPA trade-offs — eliminated recurring security vulnerabilities and reduced page load times.',
      'Improved performance, reliability, and scalability: scaled RootsAfrica from 100 to 1,100+ monthly visitors through technical SEO and performance optimization.',
      'Used AI tools (Claude) for architecture planning, debugging, and accelerating development velocity; collaborated closely with product, design, and business teams.',
    ],
  },
  {
    title: 'Full-Stack Developer (Contract)',
    org: 'SISCOM',
    period: '08/2025 — Present',
    context:
      'Investment & digital infrastructure company facilitating community-driven development across Africa',
    bullets: [
      'Delivered 3 production applications: investment platform (KSh 1M+ transactions), event networking app (200+ attendees), and e-commerce storefront.',
      'Designed API-first architecture separating backend services from frontend, enabling independent scaling.',
      'Troubleshot production issues and shipped fixes rapidly across live, transaction-critical systems.',
    ],
  },
  {
    title: 'Website Developer & Organizing Team',
    org: 'AWS Community Day Kenya',
    period: '2025',
    context: 'Annual cloud computing conference organized by the AWS community in Kenya',
    bullets: [
      'Built official event website under tight deadlines.',
      'Contributed to event logistics and community engagement.',
    ],
  },
];
