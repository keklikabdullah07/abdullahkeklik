export type ProjectCategory = "individual" | "corporate";

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  gitlabUrl?: string;
  demoUrl?: string;
  featured: boolean;
  bentoSpan?: "col-span-1" | "col-span-2" | "md:col-span-2" | "md:col-span-3";
  highlightMetric?: string;
  year?: string;
  client?: string;
  discipline?: string;
}
