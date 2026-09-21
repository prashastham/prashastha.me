import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogDetail, getBlogList, getRelatedPosts } from "@/lib/microcms";
import { formatDate } from "@/lib/format";
import { getReadingTime } from "@/lib/reading-time";
import Icon from "@/components/icons/Icon";
import TagPill from "@/components/blog/TagPill";
import ShareButton from "@/components/blog/ShareButton";
import RelatedCard from "@/components/blog/RelatedCard";

type Params = { id: string };

export async function generateStaticParams() {
  const { contents } = await getBlogList({ fields: ["id"], limit: 100 });
  return contents.map((post) => ({ id: post.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getBlogDetail(id).catch(() => null);

  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const post = await getBlogDetail(id).catch(() => null);

  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(post.id);
  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/blog/${post.id}`;
  const primaryTag = post.tags?.[0];

  return (
    <div className="flex-grow pt-[120px] pb-section-desktop px-margin-mobile md:px-margin-desktop w-full max-w-[1200px] mx-auto">
      <article className="max-w-[800px] mx-auto mb-section-desktop">
        <Link
          href="/blog"
          className="group flex items-center gap-xs mb-md font-label-caps text-secondary hover:text-primary transition-colors w-fit text-body-base"
        >
          <Icon
            name="arrow_back"
            className="transition-transform group-hover:-translate-x-1"
          />
          <span>Navigate Back</span>
        </Link>

        <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface mb-md tracking-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-md font-code-mono text-code-mono text-on-surface-variant mb-xl flex-wrap">
          {post.writer && <span>{post.writer.name}</span>}
          {post.writer && <span className="w-1 h-1 bg-surface-variant rounded-full" />}
          <span>{formatDate(post.publishedAt ?? post.createdAt, "compact")}</span>
          {!post.isPDFContent && (
            <>
              <span className="w-1 h-1 bg-surface-variant rounded-full" />
              <span>{getReadingTime(post.content ?? "")}</span>
            </>
          )}
        </div>

        {primaryTag && (
          <div className="flex gap-sm mb-xl">
            <span className="text-primary-container bg-primary-container/10 px-2 py-1 rounded font-label-caps text-label-caps uppercase tracking-widest">
              {primaryTag.name}
            </span>
          </div>
        )}

        {post.thumbnail && (
          <div className="w-full h-[400px] bg-surface-container-high rounded-xl mb-xl border border-surface-variant overflow-hidden relative">
            <Image
              src={post.thumbnail.url}
              alt={post.title}
              fill
              sizes="(min-width: 768px) 800px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        {post.content && (
          <div
            className="markdown-content font-body-lg text-body-lg text-on-surface leading-relaxed max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}

        {post.isPDFContent && post.fileURL && (
          <div className="mt-xl">
            <div className="w-full h-[85vh] rounded-xl border border-surface-variant overflow-hidden bg-surface-container-high">
              <iframe
                src={post.fileURL}
                title={`${post.title} — PDF`}
                className="w-full h-full"
              />
            </div>
            <div className="mt-sm text-right">
              <a
                href={post.fileURL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-caps text-label-caps text-secondary hover:text-primary transition-colors"
              >
                Open PDF in a new tab
              </a>
            </div>
          </div>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="mt-xl pt-lg border-t border-surface-variant flex items-center justify-between flex-wrap gap-md">
            <div className="flex gap-sm flex-wrap">
              {post.tags.map((tag) => (
                <TagPill key={tag.id}>{tag.name}</TagPill>
              ))}
            </div>
            <ShareButton title={post.title} url={shareUrl} />
          </div>
        )}
      </article>

      {relatedPosts.length > 0 && (
        <section className="max-w-[1200px] mx-auto pt-section-desktop border-t border-surface-variant">
          <h3 className="font-headline-md text-headline-md text-on-surface mb-xl">
            Related Artifacts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-lg items-stretch">
            {relatedPosts.map((related) => (
              <RelatedCard key={related.id} post={related} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
