export interface Product {
  name: string;
  description: string;
  image: string;
  price: string;
}

export interface ProductCategory {
  name: string;
  description: string;
  image: string;
  items: Product[];
}

export interface ProductsContent {
  categories: ProductCategory[];
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio?: string;
}

export interface AboutContent {
  mission: string;
  story: string;
  team: TeamMember[];
}

export interface CompanyInfo {
  name: string;
  logo: string;
  logo_white: string;
  phone: string;
  email: string;
  address: string;
  social: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
}

export interface LandingContent {
  hero: {
    title: string;
    subtitle: string;
    images: string[];
  };
  intro: {
    title: string;
    description: string;
    image: string;
  };
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  process: {
    title: string;
    description: string;
    image: string;
    steps: ProcessStep[];
  };
}

export interface ProcessStep {
  title: string;
  description: string;
  longDescription: string;
  image: string;
}

export interface ProcessContent {
  title: string;
  description: string;
  image: string;
  steps: ProcessStep[];
}

export interface ContentData {
  company: CompanyInfo;
  landing: LandingContent;
  products: ProductsContent;
  gallery: {
    projects: Array<{
      title: string;
      description: string;
      image: string;
      category: string;
      
    }>;
  };
  about: AboutContent;
  process: ProcessContent;
} 