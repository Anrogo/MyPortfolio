import type { StaticImageData } from 'next/image';

export interface ExperienceText {
  title: string;
  jobs: Job[];
}

export interface Job {
  dates: string;
  description?: string;
  linkDescription?: LinkDescription;
  detailsTitle?: string;
  details?: string[];
}

export interface LinkDescription {
  before: string;
  linkText: string;
  linkHref: string;
  after: string;
}

export interface EducationText {
  title: string;
  education: Education[];
}

export interface Education {
  dates: string;
  description: string;
}

export type ProjectTextContent = string | LinkDescription;

export type ProjectMedia =
  | {
      type: 'image';
      src: StaticImageData;
      width: number;
      height: number;
      alt: string;
      className?: string;
    }
  | {
      type: 'iframe';
      src: string;
      title: string;
    };

export interface Project {
  title: string;
  description: ProjectTextContent;
  detailsTitle?: string;
  detailsDescription?: string;
  details?: ProjectTextContent[];
  media?: ProjectMedia;
}

export interface ProjectsText {
  title: string;
  projects: Project[];
}
