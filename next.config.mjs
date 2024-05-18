/** @type {import('next').NextConfig} */
const nextConfig = process.env.NODE_ENV === "production" ? {
  output: "export",
  basePath: "/nextjs-github-pages",
  assetPrefix: "/nextjs-github-pages",
  images: {
    unoptimized: true,
  },
} : {};

export default nextConfig;
