# Prashastha Mudannayake — Blog

A personal blog built with Next.js (App Router, TypeScript), Tailwind CSS v4, and [MicroCMS](https://microcms.io) as a headless CMS. The visual design is converted 1:1 from the **Kinetic Precision** design system and the Blog / Blog Post mockups in the [Prashastha Mudannayake Portfolio](https://microcms.io) Stitch project — see [`design.md`](./design.md) for the full spec (colors, type scale, spacing, shape language) this app implements verbatim in `src/app/globals.css`.

## Getting started

```bash
pnpm install
cp .env.local.example .env.local
```

Fill in `.env.local`:

```
MICROCMS_SERVICE_DOMAIN=your-service-domain   # just the subdomain, e.g. "abc123", not the full URL
MICROCMS_API_KEY=your-api-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000    # used for RSS links and the post share URL
```

Then run the dev server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## MicroCMS content model

This app reads from a **list** API endpoint named `blog` with the following fields (verified against the live service):

| Field ID    | Type                     | Notes                                    |
| ----------- | ------------------------ | ----------------------------------------- |
| `title`     | Text field               | Post title                                |
| `thumbnail` | Image field               | Cover image, used on the list and post view |
| `description` | Text area              | Short summary shown on post cards and in `<meta description>` |
| `content`   | Rich editor               | Full post body, rendered as HTML          |
| `tags`      | Content reference (multiple), to a `tags` endpoint with a `name` field | Shown as the category badge (first tag) and as pills at the bottom of the post |
| `writer`    | Content reference (single), to a `writers` endpoint with `name`, `profile`, `image` | Shown as the byline on the post page |

`id`, `createdAt`, `updatedAt`, and `publishedAt` are provided automatically by MicroCMS.

There is no separate `category` field — the mockups' category badge is filled from the post's first tag.

## Project structure

```
src/
  app/
    page.tsx                Blog list (paginated, 6 posts/page, ?page=N)
    blog/[id]/page.tsx        Blog post view + related posts
    blog/[id]/not-found.tsx
    feed.xml/route.ts         RSS 2.0 feed
    error.tsx                 Error boundary (e.g. MicroCMS misconfigured)
    layout.tsx
    globals.css                Design tokens (colors, type scale, spacing) from design.md
  components/
    layout/                    Header, Footer
    blog/                      PostCard, RelatedCard, Chip, TagPill, Pagination, ShareButton
    icons/                     Icon (Material Symbols Outlined wrapper)
  lib/
    microcms.ts                MicroCMS client + list/detail/pagination/related-posts queries
    format.ts                  Date formatting
    reading-time.ts             Reading-time estimate from post content
  types/
    blog.ts                    Blog, Tag, Writer content types
design.md                      Kinetic Precision design system (source of truth for tokens)
```

## Deploy

Deploy on [Vercel](https://vercel.com/new) or any Next.js-compatible host. Set `MICROCMS_SERVICE_DOMAIN`, `MICROCMS_API_KEY`, and `NEXT_PUBLIC_SITE_URL` (your production origin) as environment variables on the host.
