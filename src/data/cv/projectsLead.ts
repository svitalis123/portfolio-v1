import type { CvProject } from './types';

/** Projects where the role was lead or sole owner of the architecture. */
export const CV_PROJECTS_LEAD: CvProject[] = [
  {
    name: 'Belong',
    role: 'Dev Lead',
    org: 'Fintech investment platform',
    url: 'https://belong.club',
    summary:
      'Consumer investing app making curated investment portfolios ("Jams") accessible in KES, with direct M-Pesa integration.',
    bullets: [
      'Leading development across backend and mobile: API architecture, database design, and delivery.',
      'Built REST API with Django Ninja on PostgreSQL; background and async workflows with Celery + Redis.',
      'Integrated M-Pesa for local-currency deposits; built referral/rewards system and real-time portfolio tracking dashboard.',
      'Shipping cross-platform mobile apps: Expo (Android) and Swift (iOS).',
    ],
    stack: ['Django 5', 'Django Ninja', 'PostgreSQL 16', 'Celery + Redis', 'Expo', 'Swift'],
  },
  {
    name: 'Go Kazi',
    role: 'Fullstack',
    org: 'AI-enabled vehicle rental marketplace',
    summary:
      'Marketplace connecting private vehicle owners directly with renters — replacing informal brokers with software-based trust.',
    bullets: [
      'Building an AI-assisted identity verification pipeline: OCR of national IDs, driving licences and logbooks, automated tamper and liveness checks, risk scoring, and human-in-the-loop review of flagged cases.',
      'Designed photographic check-in/check-out evidence logging (condition, fuel, mileage) and a two-way review system to make disputes resolvable and reputation portable.',
      'Integrated M-Pesa STK push for merchant registration-fee collection.',
      'Owning architecture end-to-end: Django Ninja API, PostgreSQL, async processing with Celery + Redis, Next.js frontend.',
    ],
    stack: ['Django 5', 'Django Ninja', 'PostgreSQL 16', 'Celery + Redis', 'Next.js'],
  },
  {
    name: 'Siscom Investment Platform',
    role: 'Fullstack, Solo',
    org: 'SISCOM (Contract)',
    url: 'https://siscom.africa',
    summary:
      'Investment platform facilitating KSh 1M+ in transactions for digital infrastructure across Africa.',
    bullets: [
      'Built secure payment processing pipeline with end-to-end transaction management, authentication, and investor dashboards.',
    ],
    stack: ['Django', 'PostgreSQL'],
  },
  {
    name: 'TheBridge',
    role: 'Fullstack, Solo',
    org: 'Impact Africa Network',
    summary:
      'Learning platform bridging traditional education with career skills through adaptive paths and gamification.',
    bullets: [
      'Designed full backend API with FastAPI including adaptive learning-path logic and progress tracking.',
      'Built real-time analytics and reporting dashboard for learners and instructors.',
    ],
    stack: ['FastAPI', 'Next.js', 'PostgreSQL', 'AWS'],
  },
  {
    name: 'ElevateHR',
    role: 'Fullstack, Solo',
    org: 'Impact Africa Network',
    summary: 'HR platform grown from 500 to 3,000+ monthly visitors (500%+ growth).',
    bullets: [
      'Owned full product end-to-end: backend API, frontend, deployment, and performance optimization.',
    ],
    stack: ['Astro', 'React', 'PostgreSQL'],
  },
];
