import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
  output: "export",
  // reactStrictMode: true,
  // // Add basePath
  // basePath: "/ITKS",
};

export default withContentlayer(nextConfig);
