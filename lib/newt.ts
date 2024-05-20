import { Article } from "@/types/article";
import { createClient } from "newt-client-js";
import "server-only";
import { cache } from "react";

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + "",
  token: process.env.NEWT_CDN_API_TOKEN + "",
  apiType: "cdn",
});

export const getArticles = cache(async () => {
  const { items } = await client.getContents<Article>({
    appUid: "blog",
    modelUid: "article",
    query: {
      select: [
        "_id",
        "title",
        "slug",
        "body",
        "_sys.createdAt",
        "_sys.updatedAt",
      ],
    },
  });
  return items;
});

export const getArticleBySlug = cache(async (slug: string) => {
  const article = await client.getFirstContent<Article>({
    appUid: "blog",
    modelUid: "article",
    query: {
      slug,
      select: [
        "_id",
        "title",
        "slug",
        "body",
        "_sys.createdAt",
        "_sys.updatedAt",
      ],
    },
  });
  return article;
});
