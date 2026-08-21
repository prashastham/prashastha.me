import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Blog } from "@/types/blog";

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getBlogList = (queries?: MicroCMSQueries) => {
  return client.getList<Blog>({ endpoint: "blog", queries });
};

export const getBlogDetail = (contentId: string, queries?: MicroCMSQueries) => {
  return client.getListDetail<Blog>({ endpoint: "blog", contentId, queries });
};

export const PAGE_SIZE = 6;

export const getBlogPage = (page: number) => {
  return getBlogList({
    orders: "-publishedAt",
    limit: PAGE_SIZE,
    offset: (page - 1) * PAGE_SIZE,
  });
};

export const getRelatedPosts = async (currentId: string, limit = 3) => {
  const { contents } = await getBlogList({
    orders: "-publishedAt",
    limit,
    filters: `id[not_equals]${currentId}`,
  });
  return contents;
};
