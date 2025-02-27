import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx"; // https://astro.build/config
import icon from "astro-icon";
import { remarkSandpack } from "remark-sandpack";

// https://astro.build/config
export default defineConfig({
  site: "https://shagag.dev/",
  integrations: [
    react({ include: ["**/react/*"] }),
    mdx(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
    icon(),
  ],
  markdown: {
    rehypePlugins: [rehypeHeadingIds, rehypeAccessibleEmojis, rehypeKatex],
    remarkPlugins: [remarkToc, remarkMath, remarkSandpack],
  },
});
