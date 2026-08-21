"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/icons/Icon";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop h-16">
        <Link
          href="/"
          className="font-title-lg text-title-lg tracking-tight text-on-surface hover:opacity-80 transition-opacity"
        >
          Prashastha Mudannayake
        </Link>
        <nav className="hidden md:flex gap-gutter items-center font-body-base text-body-base">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={
                  isActive
                    ? "text-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full hover:opacity-80 transition-opacity"
                    : "text-on-surface hover:text-primary transition-colors hover:opacity-80"
                }
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/feed.xml"
            className="text-on-surface hover:text-primary transition-colors ml-sm hover:opacity-80 flex items-center"
            aria-label="RSS feed"
          >
            <Icon name="rss_feed" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
