export interface SiteContent {
  branding: {
    name: string;
    tagline: string;
    disclaimer: string;
  };
  nav: { label: string; to: string }[];
  hero: {
    eyebrow: string;
    headline: string;
    subtext: string;
    cta_primary: string;
    cta_secondary: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    pullQuote: string;
    vision: string;
    founder: { name: string; role: string; note: string };
  };
  services: { title: string; description: string; icon: string }[];
  whyUs: {
    title: string;
    description: string;
    metrics: { value: number; suffix: string; label: string }[];
    pillars: { title: string; description: string }[];
  };
  insights: {
    title: string;
    description: string;
    posts: {
      category: string;
      title: string;
      excerpt: string;
      readTime: string;
      date: string;
    }[];
  };
  team: {
    title: string;
    description: string;
    members: { name: string; role: string; expertise: string[]; initials: string }[];
  };
  contact: {
    title: string;
    description: string;
    email: string;
    phone: string;
    phoneRaw: string;
    whatsapp: string;
    address: string;
    hours: string;
    caseTypes: string[];
  };
  socials: { label: string; href: string }[];
}
