import type { CvProject } from './types';

/** Projects delivered as part of a team or scoped to one layer of the stack. */
export const CV_PROJECTS_TEAM: CvProject[] = [
  {
    name: 'Shukran Jobs',
    role: 'Fullstack',
    org: 'Impact Africa Network',
    summary:
      'Multi-tenant SaaS job marketplace processing 2,000+ views and 300+ applications monthly.',
    bullets: [
      'Built domain-based tenant isolation with per-tenant branding using Django views and templates.',
      'Implemented secure RESTful API with cursor pagination and role-based team collaboration.',
    ],
    stack: ['Django', 'Django REST Framework', 'PostgreSQL', 'AWS S3'],
  },
  {
    name: 'Shukran Donations',
    role: 'Frontend',
    org: 'Impact Africa Network',
    url: 'https://shukrandonations.co',
    summary: 'Conservancy donation platform with cause creation and integrated payment processing.',
    bullets: [
      'Designed middleware architecture: Components → Services (API layer) → Webhooks → Components, decoupling UI from payment logic.',
      'Integrated TanStack Query for server state management, form validation, and optimistic UI updates.',
      'After establishing the architecture, used AI to accelerate page development across the platform.',
    ],
    stack: ['Next.js', 'TanStack Query', 'Webhooks'],
  },
  {
    name: 'TechiHub',
    role: 'Fullstack',
    url: 'https://techihub.io',
    summary: 'Talent marketplace connecting tech talent to opportunities across Africa.',
    bullets: [
      'Built Django backend with talent profiles and matching logic; Next.js frontend with search and filtering.',
    ],
    stack: ['Django', 'Next.js', 'PostgreSQL'],
  },
  {
    name: 'Ravora Systems',
    role: 'Fullstack',
    org: 'SISCOM (Contract)',
    url: 'https://ravorasystems.com',
    summary: 'E-commerce platform with admin dashboard, checkout flow, and order tracking.',
    bullets: [
      'Built scalable Node.js backend separating API layer from storefront; implemented full checkout with payment integration and order lifecycle.',
    ],
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    name: 'Women in Tech Events',
    role: 'Fullstack',
    summary: 'Event management platform for women in technology communities.',
    bullets: [
      'Built REST API with FastAPI and React frontend handling authentication, event creation, and registration.',
    ],
    stack: ['FastAPI', 'React'],
  },
  {
    name: 'EduYetu',
    role: 'Fullstack',
    url: 'https://eduyetu.com',
    summary: 'Education platform using 3D to help teachers prepare and deliver interactive lessons.',
    bullets: [
      'Integrated 3D rendering for school concepts, enabling visual and interactive lesson delivery.',
    ],
    stack: ['React', 'Three.js', 'Node.js'],
  },
];
