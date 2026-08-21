import Link from "next/link";
import type { Blog } from "@/types/blog";
import { formatDate } from "@/lib/format";
import Icon from "@/components/icons/Icon";
import Chip from "@/components/blog/Chip";

export default function PostCard({ post }: { post: Blog }) {
  const primaryTag = post.tags?.[0];

  return (
    <Link
      href={`/blog/${post.id}`}
      className="bg-surface-container-lowest border border-[#E5E5EA] rounded-xl p-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lift flex flex-col h-full group cursor-pointer"
    >
      <div className="mb-md flex justify-between items-start">
        {primaryTag && <Chip>{primaryTag.name}</Chip>}
        <span className="font-code-mono text-code-mono text-on-surface-variant">
          {formatDate(post.publishedAt ?? post.createdAt, "compact")}
        </span>
      </div>
      <h2 className="font-headline-md text-headline-md text-on-surface mb-sm group-hover:text-primary transition-colors">
        {post.title}
      </h2>
      <p className="font-body-base text-body-base text-secondary flex-grow mb-lg line-clamp-3">
        {post.description}
      </p>
      <div className="flex items-center text-primary font-title-lg text-sm mt-auto">
        Read more
        <Icon name="arrow_forward" className="ml-xs text-[18px]" />
      </div>
    </Link>
  );
}
