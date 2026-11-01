export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  categories: string[];
  technologies: string[];
  status: "in-progress" | "completed" | "paused";
  published: boolean;
  githubUrl?: string;
}
