import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteNavigation } from "./site-navigation";

describe("SiteNavigation", () => {
  it("renders a navigation landmark", () => {
    render(<SiteNavigation />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders a Directory link pointing to the homepage", () => {
    render(<SiteNavigation />);

    expect(screen.getByRole("link", { name: "Directory" })).toHaveAttribute(
      "href",
      "/",
    );
  });

  it("renders a Bookmarks link pointing to the bookmarks page", () => {
    render(<SiteNavigation />);

    expect(screen.getByRole("link", { name: "Bookmarks" })).toHaveAttribute(
      "href",
      "/bookmarks",
    );
  });
});
