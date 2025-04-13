// next-sitemap.config.js

module.exports = {
  siteUrl: "https://www.easyfixexpert.com", // Replace with your actual website URL
  generateRobotsTxt: true, // Optional: to generate robots.txt
  outDir: "./public", // Ensure this points to the `public` directory where you want the sitemap to be generated
  exclude: ["/404"], // Optional: Exclude paths you do not want in the sitemap
  sitemapSize: 50000, // Define max URLs per sitemap (default: 50000)
  generateIndexSitemap: false, // No index file, only one sitemap.xml
  // Other optional configuration options
};
