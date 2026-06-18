export type SiteLink = {
  label: string;
  href: string;
};

export const exploreLinks: SiteLink[] = [
  { label: "All Prompts", href: "/prompts" },
  { label: "Cursor AI", href: "/prompts/cursor" },
  { label: "ChatGPT", href: "/prompts/chatgpt" },
  { label: "Claude", href: "/prompts/claude" },
  { label: "Midjourney", href: "/prompts/midjourney" },
];

export const resourceLinks: SiteLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Submit a Prompt", href: "/submit" },
  { label: "Premium Packs", href: "/premium" },
  { label: "Affiliate Tools", href: "/affiliate" },
];

export const companyLinks: SiteLink[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export const mobileNavLinks: SiteLink[] = [
  ...exploreLinks,
  ...resourceLinks.slice(0, 2),
];
