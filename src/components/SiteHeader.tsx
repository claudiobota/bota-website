import Link from "next/link";
import { NAV_ITEMS, type NavKey } from "@/lib/nav";
import { MaterialIcon } from "./MaterialIcon";
import Image from "next/image";

type Props = {
  active?: NavKey;
};

export function SiteHeader({ active }: Props) {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30">
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center h-24">
        <Link
          href="/"
          className="font-display text-headline-sm font-bold tracking-tight text-primary"
        >
          <Image width={1025.53} height={269.95} src="/bota-holdings-logo.svg" alt="BOTA Holdings Logo" className="w-auto h-12" priority />
        </Link>

        <nav className="hidden md:flex gap-gutter items-center">
          {NAV_ITEMS.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={
                  isActive
                    ? "text-primary border-b-2 border-primary pb-1 text-body-md font-medium"
                    : "text-secondary font-medium hover:text-primary transition-colors text-body-md"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href="/portal"
            className="hidden sm:inline-block bg-primary text-on-primary px-6 py-3 text-label-caps hover:bg-primary/90 transition-all"
          >
            Family Portal
          </Link>
        </div>
      </div>
    </header>
  );
}
