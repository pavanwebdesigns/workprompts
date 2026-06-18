/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://workprompts.in",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
