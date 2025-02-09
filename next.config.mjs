/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    domains: [
      'dashboard.quickmath.id',
      'web.quickmath.id',
      'quickmath.id',
    ],
  },
};

export default nextConfig;
