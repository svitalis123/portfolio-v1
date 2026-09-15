export type * from './cv/types';

export { CV_PROFILE } from './cv/profile';
export { CV_EXPERIENCE } from './cv/experience';
export { CV_DECISIONS } from './cv/decisions';
export { CV_SKILLS } from './cv/skills';
export { CV_EDUCATION } from './cv/education';
export { CV_CREDENTIALS } from './cv/credentials';

import { CV_PROJECTS_LEAD } from './cv/projectsLead';
import { CV_PROJECTS_TEAM } from './cv/projectsTeam';

/** All CV projects, lead/solo work first. */
export const CV_PROJECTS = [...CV_PROJECTS_LEAD, ...CV_PROJECTS_TEAM];
