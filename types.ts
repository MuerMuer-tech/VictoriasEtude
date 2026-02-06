
export enum Page {
  HOME = 'home',
  ABOUT = 'about',
  LESSONS = 'lessons',
  BOOKING = 'booking',
  CONTACT = 'contact'
}

export interface NavItem {
  label: string;
  page: Page;
}

export interface PhilosophyItem {
  icon: string;
  title: string;
  description: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface CurriculumCard {
  image: string;
  title: string;
  description: string;
  features: string[];
}
