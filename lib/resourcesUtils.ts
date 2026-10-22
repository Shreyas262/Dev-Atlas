
import type { Resource } from "@/types/resource";

export function searchResources(
  resources: Resource[],
  query: string
): Resource[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return resources;
  }

  return resources.filter((resource) => {
    const searchableText = [
      resource.title,
      resource.description,
      ...resource.tags,
      ...resource.technologies,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}
