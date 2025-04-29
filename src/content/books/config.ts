import { defineCollection, z } from "astro:content";

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    img: z.string(),
    readtime: z.string(),
    description: z.string(),
    buy: z.object({
      mexico: z.string().url(),
      usa: z.string().url(),
    }),
  }),
});
export const collections = { books };
