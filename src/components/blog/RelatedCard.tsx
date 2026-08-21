import Link from "next/link";
import type { Blog } from "@/types/blog";

export default function RelatedCard({ post }: { post: Blog }) {
  const label = post.tags?.map((tag) => tag.name).join(" / ");

  return (
    <Link
      href={`/blog/${post.id}`}
      className="group block bg-surface-container-lowest border border-surface-variant rounded-xl p-xl hover:-translate-y-1 hover:shadow-lift transition-all duration-300 relative overflow-hidden flex-col"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-primary-container transition-colors" />
      {label && (
        <div className="font-label-caps text-label-caps text-secondary mb-md">
          {label}
        </div>
      )}
      <h4 className="font-title-lg text-title-lg text-on-surface mb-sm group-hover:text-primary transition-colors">
        {post.title}
      </h4>
      <p className="font-body-base text-body-base text-on-surface-variant line-clamp-2">
        {post.description}
      </p>
    </Link>
  );
}
