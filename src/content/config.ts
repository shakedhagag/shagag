import { defineCollection, z } from "astro:content";
import { group } from "node:console";

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
