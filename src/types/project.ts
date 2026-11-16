export type ProjectCategory = "individual" | "corporate";
export type ProjectSource = "github" | "gitlab" | "curated";

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  source?: ProjectSource;
  language?: string;
  stars?: number;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  gitlabUrl?: string;
  demoUrl?: string;
  featured: boolean;
  highlightMetric?: string;
  year?: string;
  client?: string;
  discipline?: string;
  challenge?: string;
  solution?: string;
  impact?: string[];
  deliverables?: string[];
}
