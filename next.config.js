/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Optional: good for development, often enabled by default
  output: 'export',    // THIS IS CRUCIAL FOR GITHUB PAGES

  // If you plan to deploy to a URL like: your-username.github.io/your-repo-name/
  // You'll likely need to uncomment and set these (replace 'your-repo-name'):
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',

  // If you are using the next/image component, you often need this for static export:
   images: {
     unoptimized: true,
   },
};

module.exports = nextConfig;
