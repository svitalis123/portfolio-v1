import type { CvCredential } from './types';

/**
 * Titled "Certifications & Programmes" rather than "Certifications": Aspire,
 * Founders Factory and The Bridge are selective programmes, not credentials.
 *
 * Dates and issuers were read off the certificates themselves, not inferred —
 * which is why several entries the CV left undated now carry one.
 *
 * `image` points at a capture of the certificate in public/certificates/.
 * Udemy is behind a Cloudflare bot check so it has no capture; Google Cloud Quest
 * has neither a link nor a date because none was supplied.
 */
export const CV_CREDENTIALS: CvCredential[] = [
  {
    name: 'Aspire Leaders Program 2026',
    issuer: 'Aspire Institute',
    date: '07/2026',
    url: 'https://engage.aspireleaders.org/share/certificate/did:rcw:fd56f0b9-c75d-40c6-9730-93b7c4821fab',
    image: '/certificates/aspire-leaders.webp',
  },
  {
    name: 'Kubernetes & Cloud Native Essentials (LFS250)',
    issuer: 'Linux Foundation',
    date: '04/2026',
    url: 'https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/0878333d-b0fc-42cc-a5e8-c02222f4e015-vitalis-mutwiri-927b0d4b-a08f-4703-944b-8530f0dee36c-certificate.pdf',
    image: '/certificates/kubernetes-lfs250.webp',
  },
  {
    name: 'NVIDIA AI Infrastructure (NCA-AIIO prep)',
    issuer: 'Udemy',
    date: '04/2026',
    url: 'https://www.udemy.com/certificate/UC-0f7351a8-8dc5-4f3c-9019-e576c0e11ebe/',
  },
  {
    name: 'Migration and Modernization on AWS',
    issuer: 'BeSA Cloud Academy',
    date: '11/2025',
    url: 'https://besa.techexpert.io/certification/vitaliswilson48270/migration-and-modernization-on-aws-4d13fd',
    image: '/certificates/aws-migration-modernization.webp',
  },
  {
    name: 'Introducing Generative AI with AWS',
    issuer: 'Udacity',
    date: '08/2025',
    url: 'https://www.udacity.com/certificate/e/4ed60790-3d28-11f0-a8aa-972687b7133e',
    image: '/certificates/generative-ai-aws.webp',
  },
  {
    // The CV called this "— Finals", but the certificate itself is an Explore
    // Program completion ("for high engagement and commitment during the Founders
    // Factory Africa Academy Explore Program"). Named to match the linked document.
    name: 'Founders Factory Africa Academy — Explore Program',
    issuer: 'Founders Factory Africa',
    date: '12/2023',
    url: 'https://drive.google.com/file/d/1fUicgtHe-Uwv-YbcrrxvY8-dLEzilfbO/view',
    image: '/certificates/founders-factory.webp',
  },
  {
    name: 'Full Stack Capstone',
    issuer: 'Microverse',
    date: '03/2023',
    url: 'https://www.credential.net/c4e26461-a921-4948-8c04-a71cdd9693db#acc.p8juXWzJ',
    image: '/certificates/full-stack-capstone.webp',
  },
  {
    name: 'The Bridge Career Accelerator',
    issuer: 'The Bridge · Impact Africa Network',
    date: '01/2023',
    url: 'https://drive.google.com/file/d/1tacFDtcBKpMH5tYb54xZlew4pFyCa_GY/view',
    image: '/certificates/bridge-career-accelerator.webp',
  },
  {
    name: 'Google Cloud Quest & Infrastructure',
    issuer: 'Google Cloud',
  },
];
