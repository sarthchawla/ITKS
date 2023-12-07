import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
  reactStrictMode: true,
  // Add basePath
  basePath: "/github-pages",
};

export default withContentlayer(nextConfig);
