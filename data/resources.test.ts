import { describe, it, expect } from "vitest";
import { developerResources } from "./resources";

describe("developerResources", () => {
  it("has unique resource IDs", () => {
    const ids = developerResources.map((resource) => resource.id);

    expect(new Set(ids).size).toBe(ids.length);
  });

  it("has unique resource slugs", () => {
    const slugs = developerResources.map((resource) => resource.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("uses the YYYY-MM-DD format for every dateAdded", () => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;

    for (const resource of developerResources) {
      expect(
        resource.dateAdded,
        `Invalid date format for resource: ${resource.slug}`,
      ).toMatch(datePattern);
    }
  });
});
