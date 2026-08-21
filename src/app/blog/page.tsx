import type { Metadata } from "next";
import { getBlogPage, PAGE_SIZE } from "@/lib/microcms";
import PostCard from "@/components/blog/PostCard";
import Pagination from "@/components/blog/Pagination";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Exploring the intersections of Reinforcement Learning, Neuroscience, and High-Frequency Trading.",
};

export default async function BlogList({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number(pageParam) || 1);

  const { contents: posts, totalCount } = await getBlogPage(page);
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  return (
    <div className="pt-24 pb-section-mobile md:pb-section-desktop min-h-screen">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <header className="mb-section-mobile md:mb-section-desktop pt-xl">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-md tracking-tight">
            Insights &amp; Documentation
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Exploring the intersections of Reinforcement Learning,
            Neuroscience, and High-Frequency Trading. Powered by MicroCMS.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="text-on-surface-variant">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        <Pagination page={page} totalPages={totalPages} />
      </div>
    </div>
  );
}
