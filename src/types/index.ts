export type PillarType = "community" | "academy" | "media";

export interface Opportunity {
  id: string;
  title: string;
  category: "MUN Conference" | "Youth Summit" | "Fellowship" | "Writing Competition" | "EB Application";
  organizer: string;
  dateOrDeadline: string;
  location: string;
  isOnline: boolean;
  sourceUrl: string;
  description: string;
  tags: string[];
}

export interface AcademyResource {
  id: string;
  slug: string;
  title: string;
  category:
    | "MUN Fundamentals"
    | "Research & Country Preparation"
    | "Position Papers"
    | "Rules of Procedure"
    | "Public Speaking"
    | "Negotiation & Diplomacy"
    | "Resolution Drafting"
    | "Executive Board Preparation"
    | "Advanced Delegate Strategy";
  summary: string;
  readingTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  publishedDate: string;
  content: string[];
  keyTakeaways: string[];
}

export interface MediaArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category:
    | "Geopolitics"
    | "Diplomacy & International Relations"
    | "MUN Insights"
    | "Interviews & Perspectives";
  author: string;
  authorRole: string;
  publishedDate: string;
  readingTime: string;
  coverImage?: string;
  summary: string;
  content: {
    heading?: string;
    paragraphs: string[];
    quote?: string;
  }[];
  sources?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Community" | "Academy" | "Participation";
}
