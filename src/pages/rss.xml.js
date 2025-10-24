import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "../consts";

export async function GET(context) {
	const posts = await getCollection("posts");

	// Filter out posts with groups if you only want main posts in RSS
	const mainPosts = posts.filter((post) => !post.data.group);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: mainPosts.map((post) => ({
			title: post.data.title,
			description: post.data.spoiler,
			link: post.data.customUrl || `/${post.slug}/`, // The docs show using the slug directly
			pubDate: new Date(post.data.date),
		})),
	});
}
