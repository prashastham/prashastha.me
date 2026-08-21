import Link from "next/link";
import Icon from "@/components/icons/Icon";

export default function NotFound() {
  return (
    <div className="pt-[160px] pb-section-desktop px-margin-mobile md:px-margin-desktop max-w-[800px] mx-auto flex flex-col items-start gap-md">
      <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
        Post not found
      </h1>
      <p className="font-body-base text-body-base text-on-surface-variant">
        This post may have been moved or unpublished.
      </p>
      <Link
        href="/"
        className="group flex items-center gap-xs font-label-caps text-secondary hover:text-primary transition-colors"
      >
        <Icon
          name="arrow_back"
          className="transition-transform group-hover:-translate-x-1"
        />
        <span>Back to all posts</span>
      </Link>
    </div>
  );
}
