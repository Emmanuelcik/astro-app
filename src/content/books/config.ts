import { defineCollection, z } from "astro:content";

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string().url(),
    readtime: z.string(),
    description: z.string(),
    buy: z.object({
      mexico: z.string(),
      usa: z.string(),
    }),
  }),
});
export const collections = { books };
