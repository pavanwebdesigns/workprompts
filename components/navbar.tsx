"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mobileNavLinks } from "@/lib/site-links";
import { cn } from "@/lib/utils";

function SearchBar({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <Input
        type="search"
        placeholder="Search 1000+ prompts..."
        aria-label="Search prompts"
        className="h-10 w-full rounded-full border-border bg-white pl-11 pr-4 shadow-sm focus-visible:ring-brand/30 md:w-96"
      />
    </div>
  );
}

function NavActions({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button variant="ghost" className="rounded-full" asChild>
        <Link href="/submit">Submit Prompt</Link>
      </Button>
      <Button
        className="rounded-full bg-brand text-white hover:bg-brand/90"
        asChild
      >
        <Link href="/premium">Get Premium</Link>
      </Button>
    </div>
  );
}

export function Navbar() {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="hidden flex-1 justify-center md:flex">
          <SearchBar />
        </div>

        <NavActions className="hidden md:flex" />

        <div className="flex items-center gap-1 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label={mobileSearchOpen ? "Close search" : "Open search"}
            aria-expanded={mobileSearchOpen}
            onClick={() => setMobileSearchOpen((open) => !open)}
          >
            <Search className="h-5 w-5" aria-hidden="true" />
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav
                className="mt-8 flex flex-col gap-1"
                aria-label="Mobile navigation"
              >
                {mobileNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8 flex flex-col gap-3 border-t pt-6">
                <Button variant="outline" className="w-full rounded-full" asChild>
                  <Link href="/submit" onClick={() => setMenuOpen(false)}>
                    Submit Prompt
                  </Link>
                </Button>
                <Button
                  className="w-full rounded-full bg-brand text-white hover:bg-brand/90"
                  asChild
                >
                  <Link href="/premium" onClick={() => setMenuOpen(false)}>
                    Get Premium
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {mobileSearchOpen ? (
        <div className="border-t border-border/60 px-4 pb-4 pt-3 md:hidden">
          <SearchBar />
        </div>
      ) : null}
    </header>
  );
}
