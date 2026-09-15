export interface CvProject {
  name: string;
  role: string;
  org?: string;
  url?: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

export interface CvRole {
  title: string;
  org: string;
  period: string;
  context: string;
  bullets: string[];
}

export interface CvDecision {
  label: string;
  detail: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface CvEducation {
  qualification: string;
  institution: string;
  period: string;
  detail: string;
}

export interface CvCredential {
  name: string;
  issuer: string;
  /** Omitted where no date was supplied — never invented. */
  date?: string;
  /** Public verification link, where one exists. */
  url?: string;
  /** Capture of the certificate in public/certificates/, where one could be made. */
  image?: string;
}
