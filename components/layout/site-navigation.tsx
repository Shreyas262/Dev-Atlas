import Link from "next/link";

export function SiteNavigation() {
  return (
    <nav aria-label="Main navigation">
      <Link href="/">Directory</Link>
      <Link href="/bookmarks">Bookmarks</Link>
    </nav>
  );
}
