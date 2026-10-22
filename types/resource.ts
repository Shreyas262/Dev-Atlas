export type ResourceType =
  | "documentation"
  | "tool"
  | "tutorial"
  | "course"
  | "guide"
  | "other";
  
export interface Resource {
  id: string;
  slug: string;
  title: string;
  description: string;
  url: string;
  category: string;
  type: ResourceType;
  technologies: string[];
  tags: string[];
  dateAdded: string; // ISO calendar date: YYYY-MM-DD
}