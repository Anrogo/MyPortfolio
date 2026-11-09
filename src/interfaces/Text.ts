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

export interface HomeText {
  myName: string;
  myPosition: string;
  myDescription: string;
  profileImageAlt: string;
}

export interface AboutMeText {
  title: string;
  description: string;
  imageAlt: string;
}

export interface NavBarLinkText {
  experience: string;
  projects: string;
  education: string;
}

export interface UiText {
  changeLanguage: string;
  currentLanguage: string;
  spanish: string;
  english: string;
  activateDarkMode: string;
  activateLightMode: string;
  backToTop: string;
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
  detailsLabel: string;
  projects: Project[];
}

export interface PortfolioTexts {
  HomeTexts: HomeText;
  AboutMeTexts: AboutMeText;
  ExperienceTexts: ExperienceText;
  ProjectsTexts: ProjectsText;
  EducationTexts: EducationText;
  NavBarLinkTexts: NavBarLinkText;
  UiTexts: UiText;
}

export type Language = 'es' | 'en';
