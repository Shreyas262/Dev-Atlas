import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteHeader } from "./site-header";

describe("SiteHeader", () => {
  it("renders the DevAtlas brand link pointing to the homepage", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "DevAtlas" })).toHaveAttribute(
      "href",
      "/",
    );
  });

  it("renders the Directory and Bookmarks navigation links", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: "Directory" })).toHaveAttribute(
      "href",
      "/",
    );

    expect(screen.getByRole("link", { name: "Bookmarks" })).toHaveAttribute(
      "href",
      "/bookmarks",
    );
  });

  it("renders a banner landmark containing the site navigation", () => {
    render(<SiteHeader />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("banner").querySelector("nav")).toBeInTheDocument();
  });
});
