import type { Project } from './types';

/** Products and platforms built end to end — fintech, marketplaces, SaaS. */
export const PLATFORM_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Belong',
    description:
      'A consumer fintech investment platform making curated investment portfolios ("Jams") accessible in Kenyan shillings, with direct M-Pesa integration, a referral and rewards system, and real-time portfolio tracking.',
    technologies: ['Django Ninja', 'PostgreSQL', 'Celery + Redis', 'Expo', 'Swift'],
    type: 'app',
    link: 'https://belong.club',
  },
  {
    id: 2,
    title: 'Go Kazi',
    description:
      'An AI-enabled vehicle rental marketplace connecting private vehicle owners directly with renters, replacing informal brokers with software-based trust: automated identity verification, photographic check-in evidence, and a two-way review system.',
    technologies: ['Django Ninja', 'PostgreSQL', 'Celery + Redis', 'Next.js'],
    type: 'web',
  },
  {
    id: 3,
    title: 'SISCOM Africa',
    description:
      "A digital infrastructure investment platform enabling users to own a stake in Kenya's $3.5B cloud, data, and AI opportunity through scalable infrastructure assets that earn rent and lease income.",
    technologies: ['Django', 'Python', 'Chart.js', 'Cloudflare'],
    type: 'web',
    link: 'https://siscom.africa/',
  },
  {
    id: 4,
    title: 'Shukran Jobs',
    description:
      'A multi-tenant SaaS job marketplace processing 2,000+ views and 300+ applications monthly, built with domain-based tenant isolation, per-tenant branding, and role-based team collaboration.',
    technologies: ['Django', 'Django REST Framework', 'PostgreSQL', 'AWS S3'],
    type: 'web',
  },
  {
    id: 5,
    title: 'Shukran Donations',
    description:
      'A conservancy donation platform with cause creation and integrated payment processing, built on a middleware architecture that decouples the interface from payment logic.',
    technologies: ['Next.js', 'TanStack Query', 'Webhooks'],
    type: 'web',
    link: 'https://shukrandonations.co',
  },
  {
    id: 6,
    title: 'ElevateHR',
    description:
      'An HR platform owned end to end from backend API through frontend, deployment and performance optimisation, grown from 500 to more than 3,000 monthly visitors.',
    technologies: ['Astro', 'React', 'PostgreSQL'],
    type: 'web',
  },
  {
    id: 7,
    title: 'EduYetu',
    description:
      'An education platform using 3D rendering to help teachers prepare and deliver interactive lessons, turning school concepts into visual, explorable models.',
    technologies: ['React', 'Three.js', 'Node.js'],
    type: 'web',
    link: 'https://eduyetu.com',
  },
];
