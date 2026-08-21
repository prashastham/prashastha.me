"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="pt-[160px] pb-section-desktop px-margin-mobile md:px-margin-desktop max-w-[800px] mx-auto flex flex-col items-start gap-md">
      <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
        Something went wrong
      </h1>
      <p className="font-body-base text-body-base text-on-surface-variant">
        Couldn&apos;t load posts from MicroCMS. Check that{" "}
        <code className="rounded bg-surface-container-low px-1.5 py-0.5 font-code-mono text-code-mono">
          MICROCMS_SERVICE_DOMAIN
        </code>{" "}
        and{" "}
        <code className="rounded bg-surface-container-low px-1.5 py-0.5 font-code-mono text-code-mono">
          MICROCMS_API_KEY
        </code>{" "}
        are set in your environment.
      </p>
      <button
        onClick={reset}
        className="rounded-xl bg-primary-container px-5 py-2.5 font-body-base text-body-base font-medium text-white transition-colors hover:bg-primary"
      >
        Try again
      </button>
    </div>
  );
}
