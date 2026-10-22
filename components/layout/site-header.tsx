import Link from "next/link";

import { SiteNavigation } from "./site-navigation";

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight">
          DevAtlas
        </Link>

        <SiteNavigation />
      </div>
    </header>
  );
}
