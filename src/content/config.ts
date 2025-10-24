import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		date: z.string(),
		spoiler: z.string(),
		group: z.string().optional(),
		customUrl: z.string().optional(),
	}),
});

export const collections = {
	posts: blogCollection,
};
