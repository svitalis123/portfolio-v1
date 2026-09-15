export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  type: 'web' | 'app' | 'design';
  /** Omitted when a project has no public URL — the panel then renders no CTA. */
  link?: string;
}
