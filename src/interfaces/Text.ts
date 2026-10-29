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
