export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Data Engineering' | 'Machine Learning' | 'Data Analytics' | 'Database' | 'Research';
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  demoUrl?: string;
  paperUrl?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  technologies: string[];
  featured: boolean;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks' | 'Tools' | 'Cloud' | 'Databases' | 'ML/AI';
  icon?: string;
  proficiency?: number;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
}
