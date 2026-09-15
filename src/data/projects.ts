import { PLATFORM_PROJECTS } from './projects/platforms';
import { SITE_PROJECTS } from './projects/sites';

export type { Project } from './projects/types';

/**
 * Every project, in carousel order: the platforms and products first, then the
 * client sites and community builds.
 */
export const PROJECTS = [...PLATFORM_PROJECTS, ...SITE_PROJECTS];
