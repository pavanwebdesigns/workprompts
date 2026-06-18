import Link from "next/link";
import { Zap } from "lucide-react";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className, variant = "light" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 transition-opacity hover:opacity-80",
        className
      )}
      aria-label="WorkPrompts home"
    >
      <Zap
        className={cn(
          "h-5 w-5 shrink-0",
          variant === "light" ? "text-brand" : "text-indigo-400"
        )}
        aria-hidden="true"
      />
      <span
        className={cn(
          "font-jakarta text-lg font-bold tracking-tight",
          variant === "light" ? "text-brand" : "text-white"
        )}
      >
        WorkPrompts
      </span>
    </Link>
  );
}
