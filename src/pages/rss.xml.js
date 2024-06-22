import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const postImportResult = import.meta.glob("../content/posts/**/*.mdx", {
    eager: true,
  });
  const posts = Object.values(postImportResult);
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.frontmatter.title,
      description: post.frontmatter.spoiler,
      link: post.frontmatter.href,
      pubDate: new Date(post.frontmatter.date),
    })),
  });
}
