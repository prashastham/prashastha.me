"use client";

import { useState } from "react";
import Icon from "@/components/icons/Icon";

export default function ShareButton({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        // user cancelled the native share sheet — nothing to do
      }
      return;
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleShare}
      className="text-secondary hover:text-primary-container transition-colors flex items-center gap-xs font-body-base text-body-base"
    >
      <Icon name="share" className="text-sm" />
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
