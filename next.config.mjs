/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    domains: [
      'dev-dashboard.quickmath.id',
      'web.quickmath.id'
    ],
  },
};

export default nextConfig;
