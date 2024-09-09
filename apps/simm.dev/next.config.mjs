import nextMdx from "@next/mdx";
import remarkGfm from "remark-gfm";
const withMDX = nextMdx({
  options: {
    remarkPlugins: [remarkGfm],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  experimental: {
    optimizePackageImports: ["shiki"],
  },
  output: 'export',
  images: {
    unoptimized: true,
  }
  // Optionally, add any other Next.js config below
};

const config = withMDX(nextConfig);

export default config;
