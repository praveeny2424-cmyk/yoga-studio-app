export type ProgramKind = 'residential' | 'workshop' | 'retreat' | 'online';

export interface RoomRate {
  id: string;
  name: string;
  price: number;
  listPrice: number;
}

export interface Cohort {
  id: string;
  label: string;
  seats: number;
}

export interface CurriculumGroup {
  title: string;
  items: string[];
}

export interface ScheduleBlock {
  time: string;
  title: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Program {
  slug: string;
  kind: ProgramKind;
  title: string;
  shortTitle: string;
  days: number;
  level: string;
  certification: string;
  summary: string;
  overview: string[];
  feeFrom: number;
  rooms: RoomRate[];
  inclusions: string[];
  eligibility: string[];
  curriculum: CurriculumGroup[];
  schedule: ScheduleBlock[];
  cohorts: Cohort[];
  faqs: Faq[];
}

export interface Teacher {
  name: string;
  years: string;
  education: string;
  expertise: string;
  bio: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  paragraphs: string[];
}

export interface Review {
  name: string;
  source: string;
  title: string;
  quote: string;
}

export interface Enquiry {
  id: string;
  createdAt: string;
  kind: 'booking' | 'contact' | 'affiliate';
  programSlug: string;
  programTitle: string;
  roomId: string;
  roomName: string;
  cohortLabel: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  referenceCode: string;
  message: string;
  total: number;
}
