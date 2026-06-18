import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Logo } from "@/components/logo";
import {
  companyLinks,
  exploreLinks,
  resourceLinks,
  type SiteLink,
} from "@/lib/site-links";

function FooterLinkColumn({
  title,
  links,
}: {
  title: string;
  links: SiteLink[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-zinc-400" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr] lg:gap-16">
          <div>
            <Logo variant="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              Your AI Prompt Command Center
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <FooterLinkColumn title="Explore" links={exploreLinks} />
            <FooterLinkColumn title="Resources" links={resourceLinks} />
            <FooterLinkColumn title="Company" links={companyLinks} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-500">
            © 2026 WorkPrompts. Built for developers, by developers.
          </p>
          <Link
            href="https://workutilities.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-white"
            aria-label="Visit WorkUtilities (opens in new tab)"
          >
            Also check WorkUtilities
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
