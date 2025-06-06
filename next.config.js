/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || ""
};

module.exports = nextConfig;
