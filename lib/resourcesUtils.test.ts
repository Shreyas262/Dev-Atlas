
import { describe, it, expect } from "vitest";
import { searchResources } from "./resourcesUtils";
import type { Resource } from "@/types/resource";

const resources: Resource[] = [
  {
    id: "1",
    slug: "react-docs",
    title: "React Documentation",
    description: "Official documentation for building React applications.",
    url: "https://react.dev",
    category: "Frontend",
    type: "documentation",
    technologies: ["React", "JavaScript"],
    tags: ["ui", "components"],
    dateAdded: "2026-10-20",
  },
  {
    id: "2",
    slug: "typescript-handbook",
    title: "TypeScript Handbook",
    description: "Learn about static typing with TypeScript.",
    url: "https://www.typescriptlang.org/docs/",
    category: "Frontend",
    type: "documentation",
    technologies: ["TypeScript"],
    tags: ["types", "javascript"],
    dateAdded: "2026-10-21",
  },
];

describe("searchResources", () => {
  it("finds resources by title", () => {
    expect(searchResources(resources, "React")).toEqual([resources[0]]);
  });

  it("searches case-insensitively", () => {
    expect(searchResources(resources, "react")).toEqual([resources[0]]);
  });

  it("finds resources by description", () => {
    expect(searchResources(resources, "static typing")).toEqual([
      resources[1],
    ]);
  });

  it("returns an empty array when there are no matches", () => {
    expect(searchResources(resources, "Python")).toEqual([]);
  });
  
  it("returns all resources when the query is empty or whitespace", () => {
    expect(searchResources(resources, "")).toEqual(resources);
    expect(searchResources(resources, "   ")).toEqual(resources);
  });

  it("finds resources by tags and technologies", () => {
    expect(searchResources(resources, "components")).toEqual([resources[0]]);
    expect(searchResources(resources, "TypeScript")).toEqual([resources[1]]);
  });

});
