import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
  output: "export",
	cleanDistDir: true,
	distDir: "OUTPUT",
  // reactStrictMode: true,
  // // Add basePath
  // basePath: "/ITKS",
};

export default withContentlayer(nextConfig);
