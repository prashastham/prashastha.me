import Link from "next/link";
import Icon from "@/components/icons/Icon";

type PaginationProps = {
  page: number;
  totalPages: number;
};

export default function Pagination({ page, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null;

  const prevHref = page > 1 ? `/blog?page=${page - 1}` : undefined;
  const nextHref = page < totalPages ? `/blog?page=${page + 1}` : undefined;

  return (
    <div className="mt-xl flex justify-center items-center gap-md">
      <PaginationButton href={prevHref} label="Previous page" icon="chevron_left" />
      <span className="font-code-mono text-code-mono text-on-surface">
        {String(page).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
      </span>
      <PaginationButton href={nextHref} label="Next page" icon="chevron_right" />
    </div>
  );
}

function PaginationButton({
  href,
  label,
  icon,
}: {
  href?: string;
  label: string;
  icon: string;
}) {
  const className =
    "w-10 h-10 flex items-center justify-center rounded-full border border-[#D2D2D7] bg-white transition-colors";

  if (!href) {
    return (
      <span
        aria-hidden="true"
        className={`${className} text-secondary opacity-50 cursor-not-allowed`}
      >
        <Icon name={icon} className="text-[20px]" />
      </span>
    );
  }

  return (
    <Link
      href={href}
      aria-label={label}
      className={`${className} text-on-surface hover:border-primary hover:text-primary`}
    >
      <Icon name={icon} className="text-[20px]" />
    </Link>
  );
}
