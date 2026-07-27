export interface Speaker {
  id: string;
  name: string;
  role: string;
  cert: string;
  bio: string;
  initials: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export interface Deliverable {
  id: string;
  title: string;
  description: string;
  category: 'happiness' | 'ai' | 'strategy';
  sampleContent: string;
  iconName: string;
}

export interface PricingPackage {
  id: 'online' | 'onsite' | 'inhouse';
  name: string;
  badge?: string;
  pricePerPax: number;
  location: string;
  features: string[];
  bonuses?: string[];
  isRecommended?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}
